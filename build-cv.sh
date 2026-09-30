#!/bin/sh
# Regenerates the CV PDFs from their HTML sources:
#   cv-print.html   -> assets/Maureen-Wepngong-CV.pdf
#   cv-product.html -> assets/cv/MaureenWepngongProductCV.pdf
set -e
cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || { echo "Chrome not found at $CHROME" >&2; exit 1; }

build() {
  mkdir -p "$(dirname "$2")"
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=7000 --run-all-compositor-stages-before-draw \
    --print-to-pdf="$2" "file://$PWD/$1" 2>/dev/null

  python3 - "$2" <<'PY'
import re, sys
path = sys.argv[1]
d = open(path, "rb").read()
pages = int(re.search(rb"/Count\s+(\d+)", d).group(1))
links = len(re.findall(rb"/URI\s*\(", d))
print(f"{path}: {pages} pages, {links} links, {len(d)//1024} KB")
if pages > 2:
    print(f"warning: expected at most 2 pages, got {pages}")
PY
}

build cv-print.html assets/Maureen-Wepngong-CV.pdf
build cv-product.html assets/cv/MaureenWepngongProductCV.pdf
