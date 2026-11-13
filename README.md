# Personal Website & Blog

The site lives in `docs/`. GitHub Pages serves these HTML, CSS, JavaScript, and image files directly. There is no build step.

## Preview locally

Run `make dev` with Python 3 installed, then open `http://127.0.0.1:3000`.

## Edit the site

Edit the HTML in `docs/`. For a new post, create `docs/blog/<slug>/index.html` and link to it from `docs/blog/index.html`. Update the three latest posts on the homepage and add the new URL to `docs/sitemap.xml`.

To use the optional formatter and linter, run `pnpm install` with Node.js and pnpm installed. Run `pnpm fmt` to format the site, `pnpm fmt:check` to check formatting, and `pnpm lint` to lint the JavaScript.

## Publish

GitHub Pages publishes from the `/docs` folder on `master`. On `master`, run `make deploy` to commit changes in `docs/` and push the branch to `origin`. Commit changes outside `docs/` separately before deploying them.
