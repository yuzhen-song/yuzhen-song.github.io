"""Validate generated pages and local assets without external network requests."""

import argparse
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

CSS_URL = re.compile(r"url\(\s*['\"]?([^)'\"\s]+)['\"]?\s*\)", re.I)


class Page(HTMLParser):
    def __init__(self, content):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links = []
        self.feed(content)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        for key in ("id", "name" if tag == "a" else "id"):
            if attrs.get(key):
                self.ids.add(attrs[key])
        for key in ("href", "src", "poster"):
            if attrs.get(key):
                self.links.append(attrs[key])
        if attrs.get("srcset") and not attrs["srcset"].startswith("data:"):
            self.links.extend(part.strip().split()[0] for part in attrs["srcset"].split(",") if part.strip())
        self.links.extend(CSS_URL.findall(attrs.get("style", "")))
        if tag == "meta" and attrs.get("http-equiv", "").lower() == "refresh":
            match = re.search(r"url\s*=\s*(.+)", attrs.get("content", ""), re.I)
            if match:
                self.links.append(match[1].strip(" '\""))

    handle_startendtag = handle_starttag


def check_site(directory, site_url):
    root = Path(directory).resolve()
    origin = urlsplit(site_url)
    pages = {path: Page(path.read_text(encoding="utf-8")) for path in root.rglob("*.html")}
    errors = set()
    css_seen = set()
    checked = 0

    def check(source, link):
        nonlocal checked
        if not link or link == "#":
            return
        source_path = "/" + source.relative_to(root).as_posix()
        resolved = urlsplit(urljoin(site_url.rstrip("/") + source_path, link))
        if resolved.scheme not in ("http", "https") or resolved.netloc != origin.netloc:
            return
        target = (root / unquote(resolved.path).lstrip("/")).resolve()
        label = source.relative_to(root).as_posix()
        if root not in target.parents and target != root:
            errors.add(f"{label}: path escapes build directory: {link}")
            return
        if target.is_dir():
            target = target / "index.html"
        checked += 1
        if not target.is_file():
            errors.add(f"{label}: missing file: {link}")
            return
        fragment = unquote(resolved.fragment).split(":~:text=", 1)[0]
        if fragment and target in pages and fragment not in pages[target].ids:
            errors.add(f"{label}: missing anchor: {link}")
        if target.suffix == ".css" and target not in css_seen:
            css_seen.add(target)
            for asset in CSS_URL.findall(target.read_text(encoding="utf-8")):
                check(target, asset)

    for source, page in pages.items():
        for link in page.links:
            check(source, link)
    if not pages:
        errors.add("No generated HTML files found.")
    for error in sorted(errors):
        print(error)
    print(f"Checked {len(pages)} HTML pages and {checked} local references; {len(errors)} errors.")
    return not errors


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", type=Path)
    parser.add_argument("--url", required=True)
    arguments = parser.parse_args()
    raise SystemExit(0 if check_site(arguments.directory, arguments.url) else 1)
