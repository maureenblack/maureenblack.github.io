# maureenblack.github.io

This is my CV. It has code, links, projects and far too much personality to fit
comfortably inside a PDF.

Live at **[maureenblack.github.io](https://maureenblack.github.io/)**.

Static HTML and CSS. No framework, no build step, self-hosted fonts.

## The PDF is generated

`assets/Maureen-Wepngong-CV.pdf` is rendered from `cv-print.html` — don't edit
the PDF directly. After changing `cv-print.html`:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=7000 \
  --run-all-compositor-stages-before-draw \
  --print-to-pdf="assets/Maureen-Wepngong-CV.pdf" "file://$PWD/cv-print.html"
```

Keep it to two pages, and keep it in step with the site — the same roles and
figures appear in both.
