// Idioma de la página y textos de la interfaz en español y portugués.
// El idioma sale de ?lang=pt en el link; si no viene, del último que eligió la persona.
const IDIOMAS_LISTOS = ["es", "pt"]; // idiomas que aparecen en el selector ES | PT

const LANG = (() => {
  const pedido = new URLSearchParams(location.search).get("lang");
  if (pedido && IDIOMAS_LISTOS.includes(pedido)) return pedido;
  try {
    const guardado = localStorage.getItem("lenguas-idioma");
    if (guardado && IDIOMAS_LISTOS.includes(guardado)) return guardado;
  } catch (e) {}
  return "es";
})();
document.documentElement.lang = LANG === "pt" ? "pt-BR" : "es";

const TEXTOS = {
  es: {
    titulo: "Lenguas extrañas?",
    preguntas: [
      "De dónde proviene?",
      "Donde nació?",
      "Y la pregunta más importante, ¿qué dice la Bíblia?",
      "Qué fundamento bíblico tiene esta práctica que hoy se ve comúnmente dentro de las Iglesia?"
    ],
    ybien: "Y bien!",
    anterior: "← Anterior", siguiente: "Siguiente →", mapa: "Mapa ↑",
    nuevo: "nuevo",
    ayuda: "Toca cualquier punto del mapa, o usa ← → en el teclado para avanzar en orden.",
    pdf: "Descargar PDF", pdfArchivo: "descargas/Mapa-Lenguas-extranas.pdf"
  },
  pt: {
    titulo: "Línguas estranhas?",
    preguntas: [
      "De onde vem?",
      "Onde nasceu?",
      "E a pergunta mais importante: o que diz a Bíblia?",
      "Que fundamento bíblico tem essa prática que hoje se vê com tanta frequência dentro das igrejas?"
    ],
    ybien: "E então!",
    anterior: "← Anterior", siguiente: "Próximo →", mapa: "Mapa ↑",
    nuevo: "novo",
    ayuda: "Toque em qualquer ponto do mapa, ou use ← → no teclado para avançar em ordem.",
    pdf: "Baixar PDF", pdfArchivo: "descargas/Mapa-Linguas-estranhas.pdf"
  }
};
const T = TEXTOS[LANG];
