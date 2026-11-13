# Yuzhen Song

[Personal website](https://yuzhen-song.github.io), built with Jekyll and al-folio.

Edit pages in `site/_pages/`, projects in `site/_projects/`, homepage sections in `site/_includes/home-*.liquid`, and styles in `site/_sass/custom/`. The CV is `site/assets/pdf/cv.pdf`.

Project images and GIFs are in `site/assets/img/`, videos in `site/assets/video/`, and presentations in `site/assets/slides/`.

Run locally at <http://localhost:8080>.

```bash
npm ci
npx prettier . --write
docker compose -f tools/compose.yml up --build
```

Push to `main` to build, check links, and publish automatically.
