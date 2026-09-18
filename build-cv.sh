#!/bin/sh
# Regenerates assets/Maureen-Wepngong-CV.pdf from cv-print.html.
set -e
cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || { echo "Chrome not found at $CHROME" >&2; exit 1; }

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=7000 --run-all-compositor-stages-before-draw \
  --print-to-pdf="assets/Maureen-Wepngong-CV.pdf" "file://$PWD/cv-print.html" 2>/dev/null

python3 - <<'PY'
import re
d = open("assets/Maureen-Wepngong-CV.pdf", "rb").read()
pages = int(re.search(rb"/Count\s+(\d+)", d).group(1))
links = len(re.findall(rb"/URI\s*\(", d))
print(f"CV rebuilt: {pages} pages, {links} links, {len(d)//1024} KB")
if pages != 2:
    print(f"warning: expected 2 pages, got {pages}")
PY
