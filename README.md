# Yuzhen Song ? Personal Website

Live site: <https://yuzhen-song.github.io>

An academic portfolio built with Jekyll and the MIT-licensed [al-folio](https://github.com/alshedivat/al-folio) theme.

## Where to edit

| Content                             | Location                                      |
| ----------------------------------- | --------------------------------------------- |
| Introduction and research interests | `_pages/about.md`                             |
| Publication                         | `_includes/home-publications.liquid`          |
| Education                           | `_includes/home-education.liquid`             |
| Projects                            | `_projects/`                                  |
| Full project list                   | `_pages/projects.md`                          |
| Current CV (revision 13)            | `assets/pdf/cv.pdf`                           |
| Photos, logos, video, papers        | `assets/img/`, `assets/video/`, `assets/pdf/` |
| Custom appearance and animations    | `_sass/custom/`                               |
| Site settings and social links      | `_config.yml`, `_data/socials.yml`            |
| Theme reference manuals             | `docs/theme/`                                 |

Project filenames describe their contents. Explicit `permalink` values preserve the existing public URLs. Set `home_order: 1`, `2`, or `3` for the homepage selection; use `listed: false` to keep a project out of the full list without deleting its detail page. The homepage currently features the metamorphic palm, ROS2 mobile manipulator, and six-axis arm.

The CV navigation link and `/cv/` both open `assets/pdf/cv.pdf`. Replace this file when updating the CV. Older personal source files are kept locally in `_archive/`, excluded from Git and the published website.

## Preview and validate

```bash
npm ci
npx prettier . --write
docker compose up --build
```

Open <http://localhost:8080> to check the layout and navigation. After building, check generated pages, assets, redirects, and anchors:

```bash
python scripts/check_site.py _site --url https://yuzhen-song.github.io
```

Push to `main` to run **Deploy site**. Formatting, the production Jekyll build, CSS optimization, and local link validation must all pass before publishing to `gh-pages`. GitHub Pages then serves that branch. External website availability is not part of this offline link check.

For theme setup and customization, see [installation](docs/theme/INSTALL.md), [customization](docs/theme/CUSTOMIZE.md), and [troubleshooting](docs/theme/TROUBLESHOOTING.md).
