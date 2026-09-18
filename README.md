# Maureen Wepngong — professional profile

A static professional website in blush pink and warm brown, with local Fraunces and DM Sans fonts. No framework, package manager, build step, analytics or third-party runtime requests.

## Files

```text
maureen-profile/
├── index.html
├── styles.css
├── script.js
├── README.md
├── .nojekyll
└── assets/
    ├── maureen.jpg
    ├── Maureen-Wepngong-CV.pdf
    ├── favicon.svg
    └── fonts/
        ├── dm-sans-latin.woff2
        ├── fraunces-latin.woff2
        ├── DM-Sans-OFL.txt
        └── Fraunces-OFL.txt
```

## Personalise

- **Portrait:** replace `assets/maureen.jpg` with your professional photograph. The included file is a styled MW monogram placeholder, not a photograph. Use a portrait image around 960 × 1200 px or larger, ideally under 400 KB. The frame crops with `object-fit: cover`; adjust `object-position` in `.portrait-frame img` if needed. Set `portraitIsPlaceholder: false` in `script.js` and change the image's `alt` in `index.html` to `Maureen Wepngong`. If the image fails, a CSS monogram remains visible. Keep the filename for a drop-in replacement.
- **CV:** your supplied PDF is already bundled at `assets/Maureen-Wepngong-CV.pdf`. Replace it there when you update your CV.
- **Favicon:** `assets/favicon.svg` is a ready-to-use blush-and-brown monogram. Replace it in place, or update the favicon tag in the HTML if you use a different format.
- **Links:** the clearly labelled `SITE_CONFIG` at the top of `script.js` contains GitHub, LinkedIn, CPS-0033, PR #1211, CV, email, Giiyo Tech, Koki and both store links. All are populated from the supplied CV or brief. The HTML has matching real links so the site also works with JavaScript disabled; update both places when changing a URL.
- **Content:** edit the semantic sections in `index.html`. Dates and professional claims reflect the supplied CV. The Koki entry includes its founder/developer role and dates in Selected Work.
- **Brand:** colours, fonts, spacing and content width are defined at the top of `styles.css`.

### The only missing URL: YOUR_SITE_URL

Once the final public address is known, replace both occurrences of `YOUR_SITE_URL` in the publishing configuration near the top of `index.html`, then uncomment the canonical and `og:url` tags. Use the full `https://` address, including the repository path and trailing slash if applicable. Leaving the tags commented avoids publishing a fictitious canonical URL.

Page title, description, Open Graph and Twitter/X metadata are already present in the HTML. No social account handle or preview photograph has been invented. If you later add a sharing image, add `og:image`, `og:image:alt`, `twitter:image` and `twitter:image:alt` with the real absolute image URL and descriptive text. Use `summary_large_image` if the card is landscape.

There are **no other missing professional URLs**.

## Preview

Open `index.html` in a browser. For a local HTTP preview, run the following from this folder if Python is installed:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`. No installation or build command is required. Use your browser's Print command to print the profile or save it as a PDF; the existing CV download remains the original supplied CV.

## Deploy to GitHub Pages

1. Create or choose your GitHub repository. A user site uses a repository named after your GitHub account followed by `.github.io`; a project site can use another repository name.
2. Put the **contents** of this folder at the repository root, including `.nojekyll`. `index.html` should be at the top level, not inside an extra `maureen-profile` folder. Commit the files and push when ready.
3. In the repository, go to **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, choose the branch containing these files, choose **/(root)**, and save.
4. Use the published address shown by GitHub to fill in `YOUR_SITE_URL` as described above. Commit that update.

All asset paths are relative, so the same files work at a domain root or under a GitHub Pages repository path. No custom workflow or Jekyll theme is needed. These steps follow GitHub's [publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [Pages quickstart](https://docs.github.com/en/pages/quickstart).

## Accessibility and maintenance

The site includes a skip link, semantic headings, a keyboard-operable mobile disclosure menu, Escape-to-close, visible focus states, reduced-motion support and print styling. The main content and all links remain available without JavaScript. Store buttons include descriptive accessible names. External links use `noopener noreferrer`.

The fonts are self-hosted Latin WOFF2 files sourced from Google Fonts and distributed under the included SIL Open Font Licenses. Georgia and Arial are system fallbacks. Interface icons are inline SVG in `index.html`; the favicon is the only separate SVG file.
