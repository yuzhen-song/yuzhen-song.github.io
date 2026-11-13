# Copilot Coding Agent Instructions

## Personal site layout (current)

The site source is `site/`, configured by `site/_config.yml`. Use `bash scripts/build.sh` from the repository root. Docker configuration and optional Python dependencies live in `tools/`. The build script enters `site/` so theme plugins can resolve source-relative files. Build output remains `_site/` at the repository root.

This repository is Yuzhen Song's customized portfolio. Start with the root README for the current directory map. The sections below describe the upstream theme and optional features; template posts, books, teaching examples, and sample assets have been removed.

- Personal styles are in `site/_sass/custom/`; content stays in `site/_pages/`, `site/_projects/`, and `site/_includes/home-*.liquid`.
- The current CV is `site/assets/pdf/cv.pdf`. `_archive/` contains local originals and must not be committed or published.
- Theme reference manuals and screenshots are in `docs/theme/`.
- `Deploy site` checks formatting, builds Jekyll with Ruby 3.3.5, optimizes CSS, and validates generated local links before publishing. It does not require notebooks or ImageMagick while those features are disabled.
- The older standalone Lychee and upstream Docker/Lighthouse workflows have been removed. `scripts/check_site.py` checks local files and fragment links without an external binary download.

## Repository Overview

**al-folio** is a simple, clean, and responsive [Jekyll](https://jekyllrb.com/) theme for academics and researchers. It enables users to create professional portfolio and blog websites with minimal configuration. The repository serves both as a template and as a reference implementation.

- **Type:** Jekyll static site generator template
- **Target Users:** Academics, researchers, and professionals
- **Key Features:** CV display, publication bibliography, blog posts, projects, news/announcements, course listings

## Tech Stack & Versions

**Core Technologies:**

- **Jekyll:** v4.x (Ruby static site generator)
- **Ruby:** 3.3.5 (primary CI/CD version), 3.2.2 (some workflows)
- **Python:** 3.13 (for nbconvert, jupyter notebook support)
- **Node.js:** Latest (for purgecss and prettier)
- **Docker:** Uses prebuilt image `amirpourmand/al-folio:v0.16.3` (Ruby slim-based)

**Build Dependencies (from Gemfile):**

- `classifier-reborn` – Related posts calculation
- `jekyll-archives-v2` – Archive page generation
- `jekyll-jupyter-notebook` – Jupyter notebook embedding
- `jekyll-minifier` – CSS/JS minification
- `jekyll-paginate-v2` – Pagination
- `jekyll-scholar` – Bibliography management
- `jekyll-tabs` – Tab UI components
- `jekyll-toc` – Table of contents generation
- `jemoji` – Emoji support
- Multiple other specialized jekyll plugins

**Code Quality Tools:**

- **Prettier:** v3.8.0+ with `@shopify/prettier-plugin-liquid` – Code formatter (mandatory for PRs)
- **Purgecss:** CSS purification for production builds

## Building & Local Development

### Docker (Recommended Approach)

**Always use Docker for local development.** This ensures consistency with CI/CD and avoids Ruby/Python environment issues.

**Initial Setup:**

```bash
docker compose -f tools/compose.yml pull                    # Pull prebuilt image
docker compose -f tools/compose.yml up                      # Start development server
# Site runs at http://localhost:8080
```

**Rebuilding with Updated Dependencies:**

```bash
docker compose -f tools/compose.yml up --build              # Rebuilds Docker image from Dockerfile
docker compose -f tools/compose.yml up --force-recreate     # Forces complete rebuild
```

**For slim Docker image (if image size is critical):**

```bash
docker compose -f tools/compose-slim.yml up
```

**If Docker build fails:**

- Check disk space and available RAM
- Kill any existing jekyll processes: `docker compose -f tools/compose.yml down`
- For M1/M2 Mac: Ensure Docker Desktop is up-to-date
- Linux users may need Docker group permissions: `sudo usermod -aG docker $USER` (then logout/login)

### Bundle/Jekyll (Legacy, Use Docker Instead)

```bash
bundle install                         # Install Ruby gems
pip install jupyter                    # Install Python dependencies
cd site && bundle exec jekyll serve --port 4000   # Run at http://localhost:4000
```

### Important Build Requirements

- **ImageMagick must be installed** – Required for image processing plugins
  - Docker: Installed automatically
  - Local: `sudo apt-get install imagemagick` (Linux) or `brew install imagemagick` (Mac)
- **nbconvert must be upgraded before build** – `pip3 install --upgrade nbconvert`
- **Always set JEKYLL_ENV=production for production builds** – Required for CSS/JS minification

## Project Layout & Key Files

### Root Directory Structure

- `site/_bibliography/papers.bib` – BibTeX bibliography for publications
- `site/_config.yml` – **Primary configuration file** (title, author, URLs, baseurl, feature flags)
- `site/_data/` – YAML data files (socials.yml, coauthors.yml, cv.yml, citations.yml, venues.yml, repositories.yml)
- `site/_includes/` – Reusable Liquid template components
- `site/_layouts/` – Page layout templates (about.liquid, post.liquid, bib.liquid, distill.liquid, cv.liquid, etc.)
- `site/_news/` – News/announcement entries
- `site/_pages/` – Static pages (about.md, cv.md, publications.md, projects.md, teaching.md, etc.)
- `_posts/` – Blog posts (format: YYYY-MM-DD-title.md)
- `site/_projects/` – Project showcase entries
- `site/_sass/` – SCSS stylesheets
- `site/_scripts/` – JavaScript files for functionality
- `_teachings/` – Course and teaching entries
- `site/assets/img/` – Images, profile pictures
- `tools/compose.yml` – Docker compose configuration
- `Dockerfile` – Docker image definition
- `Gemfile` & `Gemfile.lock` – Ruby dependency specifications
- `package.json` – Node.js dependencies (prettier only)
- `purgecss.config.js` – PurgeCSS configuration for production CSS optimization

### Configuration Priority

When making changes:

1. **Always start with `site/_config.yml`** for site-wide settings
2. **Feature flags are in `site/_config.yml`** – Look for `enabled: true/false` options
3. **Social media links:** `site/_data/socials.yml`
4. **Content data:** Respective `site/_data/*.yml` files
5. **Styling:** `site/_sass/` directory (uses SCSS)

## CI/CD Pipeline & Validation

### GitHub Workflows (in `.github/workflows/`)

- **deploy.yml** – Main deployment workflow (runs on push/PR to main/master)
  - Sets up Ruby 3.3.5, Python 3.13
  - Installs imagemagick, nbconvert
  - Runs `bash scripts/build.sh` with JEKYLL_ENV=production
  - Runs purgecss for CSS optimization
  - Commits built site to gh-pages branch
  - **Triggers on:** Changes to site files, assets, config (NOT documentation files alone)
- **prettier.yml** – Code formatting validation (mandatory)
  - Runs prettier on all files
  - **Fails PRs if code is not properly formatted**
  - Generates HTML diff artifact on failure
  - Must install prettier locally to avoid failures: `npm install prettier @shopify/prettier-plugin-liquid`
- **broken-links.yml, broken-links-site.yml** – Link validation
- **axe.yml** – Accessibility testing
- **codeql.yml** – Security scanning
- **update-citations.yml** – Automatic citation updates
- **render-cv.yml** – CV rendering from RenderCV format

### Pre-commit Requirements

**You must run these locally before pushing:**

1. **Prettier formatting (mandatory):**

```bash
npm install --save-dev prettier @shopify/prettier-plugin-liquid
npx prettier . --write
```

2. **Local build test with Jekyll:**

```bash
docker compose -f tools/compose.yml pull && docker compose -f tools/compose.yml up
# Let it build (wait 30-60 seconds)
# Visit http://localhost:8080 and verify site renders correctly
# Exit with Ctrl+C
```

3. **Or run full build simulation:**

```bash
docker compose -f tools/compose.yml up --build
bash scripts/build.sh
# Check for errors in output
```

## Common Pitfalls & Workarounds

### YAML Syntax Errors in \_config.yml

- **Problem:** Special characters (`:`, `&`, `#`) in values cause parse errors
- **Solution:** Quote string values: `title: "My: Cool Site"`
- **Debug:** Run locally to see detailed error: `bash scripts/build.sh`

### "Unknown tag 'toc'" Error on Deployment

- **Problem:** Deploy succeeds locally but fails on GitHub Actions
- **Cause:** Jekyll plugins don't load properly
- **Solution:** Verify gh-pages branch is set as deployment source in Settings → Pages

### CSS/JS Not Loading After Deploy

- **Problem:** Site loads but has no styling
- **Cause:** Incorrect `url` and `baseurl` in `site/_config.yml`
- **Fix:**
  - Personal site: `url: https://username.github.io`, `baseurl:` (empty)
  - Project site: `url: https://username.github.io`, `baseurl: /repo-name/`
  - Clear browser cache (Ctrl+Shift+Del or private browsing)

### Prettier Formatting Failures

- **Problem:** PR fails prettier check after local builds passed
- **Solution:** Run prettier before committing:
  ```bash
  npx prettier . --write
  git add . && git commit -m "Format code with prettier"
  ```

### Port 8080 or 4000 Already in Use

- **Docker:** `docker compose -f tools/compose.yml down` then `docker compose -f tools/compose.yml up`
- **Ruby:** Kill process: `lsof -i :4000 | grep LISTEN | awk '{print $2}' | xargs kill`

### Related Posts Errors ("Zero vectors cannot be normalized")

- **Cause:** Empty blog posts or posts with only stop words confuse classifier-reborn
- **Solution:** Add meaningful content to posts, or set `related_posts: false` in post frontmatter

## File Format Specifications

### Blog Post Frontmatter (\_posts/)

```yaml
---
layout: post
title: Post Title
date: YYYY-MM-DD
categories: category-name
---
```

### Project Frontmatter (\_projects/)

```yaml
---
layout: page
title: Project Name
description: Short description
img: /assets/img/project-image.jpg
importance: 1
---
```

### BibTeX Format (papers.bib)

- Standard BibTeX format
- al-folio supports custom keywords: `pdf`, `code`, `preview`, `doi`, etc.
- Check CUSTOMIZE.md for custom bibtex keyword documentation

## Trust These Instructions

This guidance documents the tested, working build process and project structure. **Trust these instructions and only perform additional searches if:**

1. Specific information contradicts what you observe in the codebase
2. You need implementation details beyond what's documented
3. Error messages reference features or files not mentioned here

The instructions are designed to reduce unnecessary exploration and allow you to focus on code changes.
