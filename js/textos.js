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
    escucharPunto: "▶ Escuchar este punto", escucharTodo: "▶ Escuchar todo desde aquí",
    pausa: "❚❚ Pausa", seguir: "▶ Seguir", detener: "■ Detener",
    velocidad: "Velocidad", voz: "Voz", lenta: "Lenta", normal: "Normal", rapida: "Rápida",
    nuevo: "nuevo",
    ayuda: "Toca cualquier punto del mapa, o usa ← → en el teclado para avanzar en orden. Con “Escuchar” el dispositivo te lo lee en voz alta.",
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
    escucharPunto: "▶ Ouvir este ponto", escucharTodo: "▶ Ouvir tudo a partir daqui",
    pausa: "❚❚ Pausa", seguir: "▶ Continuar", detener: "■ Parar",
    velocidad: "Velocidade", voz: "Voz", lenta: "Lenta", normal: "Normal", rapida: "Rápida",
    nuevo: "novo",
    ayuda: "Toque em qualquer ponto do mapa, ou use ← → no teclado para avançar em ordem. Com “Ouvir” o aparelho lê em voz alta para você.",
    pdf: "Baixar PDF", pdfArchivo: "descargas/Mapa-Linguas-estranhas.pdf"
  }
};
const T = TEXTOS[LANG];
