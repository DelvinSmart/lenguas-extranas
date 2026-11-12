#!/bin/sh
# Genera los PDF (fondo negro, letras blancas) a partir de pdf.html:
#   descargas/Mapa-Lenguas-extranas.pdf  (español)
#   descargas/Mapa-Linguas-estranhas.pdf (portugués, cuando "pt" está en IDIOMAS_LISTOS de js/textos.js)
cd "$(dirname "$0")"
BROWSER="/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"
pdf() {
  "$BROWSER" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
    --print-to-pdf="$(pwd)/../descargas/$2" "file://$(pwd)/pdf.html?lang=$1" 2>/dev/null
  echo "PDF listo: descargas/$2"
}
pdf es Mapa-Lenguas-extranas.pdf
if grep -q 'IDIOMAS_LISTOS = \[[^]]*"pt"' ../js/textos.js; then
  pdf pt Mapa-Linguas-estranhas.pdf
fi
