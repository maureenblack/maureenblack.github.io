# Maureen Wepngong

A one-page CV website and the two-page PDF CV it links to, sharing one brand.
Live at **[maureenblack.github.io](https://maureenblack.github.io/)**.

Static HTML and CSS. No framework, package manager, build step, analytics or
third-party runtime requests. Fonts are self-hosted.

## Layout

```text
.
├── index.html      the website
├── styles.css      brand tokens + all site styles
├── script.js       nav disclosure, scroll-spy, portrait fallback
├── cv-print.html   source for the PDF CV — see below
├── .nojekyll       serve files as-is on GitHub Pages
└── assets/
    ├── maureen.jpg                 portrait, 960 × 1200
    ├── Maureen-Wepngong-CV.pdf     generated from cv-print.html
    ├── favicon.svg
    └── fonts/                      Fraunces + DM Sans (WOFF2, OFL)
```

## Regenerating the PDF CV

`assets/Maureen-Wepngong-CV.pdf` is **generated**, not hand-made. Edit
`cv-print.html`, then re-render:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=7000 --run-all-compositor-stages-before-draw \
  --print-to-pdf="assets/Maureen-Wepngong-CV.pdf" \
  "file://$PWD/cv-print.html"
```

Notes:

- `cv-print.html` sets `@page { size: A4 }` and its own margins, so the output
  is A4 regardless of the printer default.
- `<section class="brk">` forces the page break before *Professional
  experience*. Without it the break lands mid-entry.
- The `<a href>` elements become real clickable annotations in the PDF.
- Keep it to two pages. Check with:
  `python3 -c "import re;print(re.search(rb'/Count\s+(\d+)',open('assets/Maureen-Wepngong-CV.pdf','rb').read()).group(1))"`

Keep the site and the PDF in step — they carry the same roles, dates and
figures, and they are read side by side.

## Brand

Defined as custom properties at the top of `styles.css`, mirrored in
`cv-print.html`:

| Token | Value | Use |
| --- | --- | --- |
| `--pink` | `#ffe0ee` | accents, bullets, the period after the name |
| `--brown` | `#793707` | headings, links, emphasis |
| `--cream` | `#fffdf8` | page ground |
| `--pink-wash` | `#fff1f6` | summary panels, section washes |

Type is Fraunces for display and DM Sans for text, both self-hosted Latin WOFF2
subsets under the SIL Open Font License (see `assets/fonts/`). Georgia and Arial
are the fallbacks.

## Editing the site

Sections in `index.html` are semantic and self-describing: hero, `#cardano`,
`#experience`, `#skills`, `#contact`. Each role is one `.experience-row` —
dates, title and organisation, then detail.

`SITE_CONFIG` at the top of `script.js` holds every external URL. The HTML
carries the same URLs as real `href`s so the page works without JavaScript;
change both when a link changes.

## Preview

Open `index.html` directly, or serve it:

```sh
python3 -m http.server 4173
```

## Deployment

Pushing to `main` publishes to GitHub Pages from the repository root. Asset
paths are relative, so the same files work at a domain root or under a
repository path.

## Accessibility

Skip link, semantic headings, keyboard-operable disclosure menu with
Escape-to-close, visible focus states, reduced-motion support and print styles.
Content and links work without JavaScript. External links use
`rel="noopener noreferrer"`.
