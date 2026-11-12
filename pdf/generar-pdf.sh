#!/bin/sh
# Genera descargas/Mapa-Lenguas-extranas.pdf a partir de pdf.html (fondo negro, letras blancas).
cd "$(dirname "$0")"
BROWSER="/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"
"$BROWSER" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf="$(pwd)/../descargas/Mapa-Lenguas-extranas.pdf" "file://$(pwd)/pdf.html" 2>/dev/null
echo "PDF listo en descargas/Mapa-Lenguas-extranas.pdf"
