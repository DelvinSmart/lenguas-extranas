// Lee en voz alta el punto abierto, o todo el material desde ahí, con la mejor voz del dispositivo
// en el idioma de la página. Usa show(), cur y STEPS de js/mapa.js y escucha su evento "punto".
const synth = window.speechSynthesis;
const audioBar = document.getElementById("audio");

if (!synth || typeof SpeechSynthesisUtterance === "undefined") {
  audioBar.hidden = true;
} else {
  initAudio();
}

function initAudio() {
  const playBtn = document.getElementById("aPlay");
  const allBtn = document.getElementById("aAll");
  const pauseBtn = document.getElementById("aPause");
  const stopBtn = document.getElementById("aStop");
  const voiceSel = document.getElementById("aVoice");
  const rateSel = document.getElementById("aRate");

  playBtn.textContent = T.escucharPunto;
  allBtn.textContent = T.escucharTodo;
  stopBtn.textContent = T.detener;
  document.getElementById("lVoz").textContent = T.voz;
  document.getElementById("lVel").textContent = T.velocidad;
  document.getElementById("oLenta").textContent = T.lenta;
  document.getElementById("oNormal").textContent = T.normal;
  document.getElementById("oRapida").textContent = T.rapida;

  const VOICE_KEY = "lenguas-voz-" + LANG;
  let voices = [];
  let mode = null;        // "uno" = solo este punto, "todo" = este y los siguientes
  let runId = 0;          // cambia en cada lectura nueva, para ignorar avisos de lecturas canceladas
  let advancing = false;  // true mientras el lector pasa solo al siguiente punto
  let paused = false;
  let reading = null;     // el bloque que se está leyendo

  // Las voces "mejoradas" o "naturales" se entienden mucho mejor que las básicas
  function score(v) {
    let s = 0;
    if (/premium|enhanced|mejorad|aprimorad|natural|neural|siri/i.test(v.name)) s += 10;
    if (/google/i.test(v.name)) s += 6;
    if (LANG === "pt" && /pt-BR/i.test(v.lang)) s += 3;
    if (LANG === "es" && /es-(MX|US|419|CO|VE|AR)/i.test(v.lang)) s += 2;
    if (/compact|eloquence|eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley/i.test(v.name)) s -= 5;
    return s;
  }

  function loadVoices() {
    const prefix = LANG === "pt" ? "pt" : "es";
    voices = synth.getVoices().filter(v => v.lang.toLowerCase().startsWith(prefix)).sort((a, b) => score(b) - score(a));
    if (!voices.length) { voiceSel.parentElement.hidden = true; return; }
    voiceSel.parentElement.hidden = false;
    let saved = null;
    try { saved = localStorage.getItem(VOICE_KEY); } catch (e) {}
    voiceSel.innerHTML = voices.map((v, k) => `<option value="${k}">${v.name.replace(/\s*\(.*\)\s*/, "")} · ${v.lang}</option>`).join("");
    const k = voices.findIndex(v => v.name === saved);
    voiceSel.value = String(k >= 0 ? k : 0);
  }
  loadVoices();
  synth.onvoiceschanged = loadVoices;
  voiceSel.addEventListener("change", () => {
    try { localStorage.setItem(VOICE_KEY, voices[+voiceSel.value].name); } catch (e) {}
  });

  // Cambia lo que la voz leería mal: referencias bíblicas, siglas y abreviaturas
  const ORDINAL = LANG === "pt" ? { 1: "Primeira", 2: "Segunda" } : { 1: "Primera de", 2: "Segunda de" };
  function forSpeech(text) {
    const verso = LANG === "pt" ? "versículo" : "versículo";
    const versos = LANG === "pt" ? "versículos" : "versículos";
    const hasta = LANG === "pt" ? "a" : "al";
    return text
      .replace(/\b([12]) (Corintios|Coríntios)/g, (m, n, libro) => `${ORDINAL[n]} ${libro}`)
      .replace(/(\d+):(\d+)\s*[-–]\s*(\d+)/g, `capítulo $1, ${versos} $2 ${hasta} $3`)
      .replace(/(\d+):(\d+)/g, `capítulo $1, ${verso} $2`)
      .replace(/\bvs?(\d+)\b/g, `${verso} $1`)
      .replace(/\bLBLA\b/g, "La Biblia de las Américas")
      .replace(/\bRV 1960\b/g, "Reina Valera 1960")
      .replace(/\bARA\b/g, "Almeida Revista e Atualizada")
      .replace(/\bARC\b/g, "Almeida Revista e Corrigida")
      .replace(/[*\[\]]/g, "")
      .replace(/·/g, ",")
      .replace(/\s+/g, " ")
      .trim();
  }

  // Texto de un bloque sin sus listas internas (esas se leen aparte)
  function textOf(el) {
    const copy = el.cloneNode(true);
    copy.querySelectorAll("ul, ol").forEach(n => n.remove());
    if (el.closest(".passage") && el.tagName === "P") {
      const num = copy.querySelector("b");
      if (num) num.textContent = num.textContent + ". ";
    }
    return copy.textContent;
  }

  // Corta los párrafos largos en frases, porque algunos navegadores dejan de leer textos muy largos
  function split(text) {
    if (text.length <= 220) return [text];
    return (text.match(/[^.;:?!]+[.;:?!»”"]*\s*/g) || [text]).map(t => t.trim()).filter(Boolean);
  }

  function partsForCurrent(withIntro) {
    const parts = [];
    const add = (text, el) => { const t = forSpeech(text); if (t) split(t).forEach(x => parts.push({ text: x, el })); };
    if (withIntro) {
      add(T.titulo, null);
      T.preguntas.forEach(q => add(q, null));
      add(T.ybien, null);
    }
    add(document.getElementById("rtag").textContent.replace("·", "."), null);
    add(document.getElementById("rlabel").textContent, null);
    document.getElementById("rbody").querySelectorAll("p, h3, li, .ref").forEach(el => add(textOf(el), el));
    return parts;
  }

  function mark(el) {
    if (reading) reading.classList.remove("leyendo");
    reading = el;
    if (reading) {
      reading.classList.add("leyendo");
      reading.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function speak(parts, onDone) {
    const voice = voices[+voiceSel.value] || null;
    parts.forEach((p, k) => {
      const u = new SpeechSynthesisUtterance(p.text);
      u.lang = voice ? voice.lang : (LANG === "pt" ? "pt-BR" : "es-ES");
      if (voice) u.voice = voice;
      u.rate = Number(rateSel.value);
      u.onstart = () => mark(p.el);
      if (k === parts.length - 1) u.onend = onDone;
      synth.speak(u);
    });
  }

  function run(withIntro) {
    const id = ++runId;
    synth.cancel();
    setPlaying(true);
    speak(partsForCurrent(withIntro), () => {
      if (id !== runId) return;
      if (mode === "todo" && cur < STEPS.length - 1) {
        advancing = true;
        show(cur + 1);
        advancing = false;
        run(false);
      } else {
        stop();
      }
    });
  }

  function stop() {
    runId++;
    synth.cancel();
    mode = null;
    paused = false;
    mark(null);
    setPlaying(false);
  }

  function setPlaying(on) {
    playBtn.hidden = on;
    allBtn.hidden = on;
    pauseBtn.hidden = !on;
    stopBtn.hidden = !on;
    pauseBtn.textContent = T.pausa;
  }

  playBtn.addEventListener("click", () => { mode = "uno"; run(false); });
  allBtn.addEventListener("click", () => { mode = "todo"; run(cur === 0); });
  stopBtn.addEventListener("click", stop);
  pauseBtn.addEventListener("click", () => {
    if (paused) { synth.resume(); pauseBtn.textContent = T.pausa; }
    else { synth.pause(); pauseBtn.textContent = T.seguir; }
    paused = !paused;
  });

  // Si la persona cambia de punto con los botones o el mapa, se detiene la lectura
  document.addEventListener("punto", () => { if (mode && !advancing) stop(); });
  window.addEventListener("pagehide", () => synth.cancel());
}
