# portfolio_template

A one-page portfolio site that publishes itself to GitHub Pages. Push to `main`, and the included
workflow builds the site and deploys it. There is no server, no database, and no hosting account to create.

The repository ships with sample content for a fictional engineer called Alex Doe. Replace it with your own.

## What you get

- Six sections. About, skills, experience, certifications, projects, and contact.
- Two languages, English and Japanese, with a switcher in the header.
- Light and dark themes. The theme follows the system setting until a visitor picks one, and the choice survives a reload.
- A working GitHub Pages deployment that handles the `/<repository>/` prefix a project site needs.
- No analytics, no runtime API call, and no font request after the first load.

## Requirements

Node 20 or newer. The build was verified on Node 24.

## Run it locally

Install the dependencies.

`@bash
npm install
`@

Start the development server and open http://localhost:3000.

`@bash
npm run dev
`@

To check the exported site the way GitHub Pages serves it, build it and preview it.

`@bash
npm run build
npm run preview
`@

The preview serves `out/` at http://localhost:4321/portfolio_template/. Change the prefix with the
`NEXT_PUBLIC_BASE_PATH` environment variable if your repository has a different name.

## Make it yours

Three files hold everything you replace. No component needs an edit.

| File | Holds |
| --- | --- |
| `content/site.ts` | Every id, date, URL, company name, technology name, skill, certification, and link |
| `content/en.ts` | All English prose |
| `content/ja.ts` | All Japanese prose |

**Change the person.** Edit `person`, `about`, and `contact` in both locale files, and the sample
projects, positions, certifications, and links in `content/site.ts`. The name in the header, the page
title, and the footer all read from those.

**Add a project.** Add an entry to `projects` in `content/site.ts`, then add the matching key to
`projects.entries` in `content/en.ts` and `content/ja.ts`. Running `npm run typecheck` tells you if
you missed one, and names the key.

**Drop a language.** Remove it from `locales` in `content/site.ts`, then remove the matching entry from
`byLocale` in `content/index.ts` and delete the unused locale file. The type checker rejects a
`byLocale` that still lists it.

**Change the accent colour.** Edit `--color-accent` in `app/globals.css`.

**Change the favicon.** Replace `app/icon.svg`.

**Add an image.** Put the file in `public/` and reference it through `asset()` from
`app/lib/base-path.ts`. A bare `/photo.jpg` breaks on a project site, because GitHub Pages serves the
repository from a subdirectory.

## Publish it

1. Create an empty repository on GitHub and push this repository to it.

   `@bash
   git remote add origin https://github.com/<you>/<repository>.git
   git push -u origin main
   `@

2. In the repository, open **Settings**, then **Pages**, and set **Source** to **GitHub Actions**.

3. Push to `main`. The workflow builds the site and deploys it to
   `https://<you>.github.io/<repository>/`.

You do not configure the path prefix. The workflow reads the repository name and passes it to the build, so a
clone publishes correctly under its own name. A repository named `<you>.github.io` deploys to the site root
instead.

If step 2 is skipped, the build job succeeds and the deploy job fails with "Get Pages site failed".

## Check your work

`@bash
npm run typecheck   # fails if a locale is missing a project, position, or label
npm run build       # fails on a type error or a broken import
npm run preview     # serve the exported site at the GitHub Pages prefix
`@

## Where the tricky parts live

- `next.config.ts` reads `NEXT_PUBLIC_BASE_PATH` and applies it as `basePath`. Nothing else in the repository restates the prefix.
- `app/lib/base-path.ts` exists because `next/image` does not apply `basePath` to a string `src`. Any file in `public/` goes through `asset()`.
- `content/site.ts` owns every id. The locale files use `Record<Id, ...>` over those ids, so a missing translation is a type error rather than a blank space on the page.
- `app/components/Shell.tsx` sets the theme class in an inline script before first paint, which is why a dark-mode visitor sees no light flash.
- `app/fonts/` holds the three Montserrat weights the site uses. They are committed rather than fetched, because `next/font/google` downloads during the build and that download failed on a GitHub runner. The font is under the SIL Open Font License; `app/fonts/OFL.txt` has the text.
- The two root layouts, `app/(default)/layout.tsx` and `app/[locale]/layout.tsx`, exist so each language can set its own `lang` on the `<html>` element. Next.js allows this only when there is no `app/layout.tsx`.

## Licence

MIT. See [LICENSE](LICENSE).
