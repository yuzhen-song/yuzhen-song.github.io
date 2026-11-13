# Yuzhen Song

[Personal website](https://yuzhen-song.github.io), built with Jekyll and al-folio.

Edit pages in `_pages/`, projects in `_projects/`, homepage sections in `_includes/home-*.liquid`, and styles in `_sass/custom/`. The CV is `assets/pdf/cv.pdf`.

Run locally at <http://localhost:8080>.

```bash
npm ci
npx prettier . --write
docker compose up --build
```

Push to `main` to build, check links, and publish automatically.
