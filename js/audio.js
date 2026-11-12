// Lee en voz alta el punto abierto, o todo el material desde ahí, con la voz en español del dispositivo.
// Usa show(), cur y STEPS de js/mapa.js, y escucha el evento "punto" que mapa.js lanza al cambiar de punto.
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
  const rateSel = document.getElementById("aRate");

  let voice = null;
  let mode = null;        // "uno" = solo este punto, "todo" = este y los siguientes
  let runId = 0;          // cambia en cada lectura nueva, para ignorar avisos de lecturas canceladas
  let advancing = false;  // true mientras el lector pasa solo al siguiente punto
  let paused = false;
  let reading = null;     // el párrafo que se está leyendo

  function pickVoice() {
    const voices = synth.getVoices().filter(v => v.lang.toLowerCase().startsWith("es"));
    voice = voices.find(v => v.localService) || voices[0] || null;
  }
  pickVoice();
  synth.onvoiceschanged = pickVoice;

  // Texto de un bloque sin sus listas internas (esas se leen aparte)
  function textOf(el) {
    const copy = el.cloneNode(true);
    copy.querySelectorAll("ul, ol").forEach(n => n.remove());
    if (el.closest(".passage") && el.tagName === "P") {
      const num = copy.querySelector("b");
      if (num) num.textContent = num.textContent + ". ";
    }
    return copy.textContent.replace(/\s+/g, " ").replace(/·/g, ",").trim();
  }

  // Corta los párrafos largos en frases, porque algunos navegadores dejan de leer textos muy largos
  function split(text) {
    if (text.length <= 220) return [text];
    return text.match(/[^.;:?!]+[.;:?!»”"]*\s*/g).map(t => t.trim()).filter(Boolean);
  }

  function partsForCurrent(withIntro) {
    const parts = [];
    const add = (text, el) => split(text).forEach(t => parts.push({ text: t, el }));
    if (withIntro) {
      const root = document.querySelector(".root");
      add(root.querySelector("h1").textContent, root);
      root.querySelectorAll("li").forEach(li => add(li.textContent, root));
      add(root.querySelector(".ybien").textContent, root);
    }
    add(document.getElementById("rtag").textContent.replace("·", "."), null);
    add(document.getElementById("rlabel").textContent.replace("·", ","), null);
    document.getElementById("rbody").querySelectorAll("p, h3, li, .ref").forEach(el => {
      const text = textOf(el);
      if (text) add(text, el);
    });
    return parts;
  }

  function mark(el) {
    if (reading) reading.classList.remove("leyendo");
    reading = el && el.closest(".root") ? null : el;
    if (reading) {
      reading.classList.add("leyendo");
      reading.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function speak(parts, onDone) {
    parts.forEach((p, k) => {
      const u = new SpeechSynthesisUtterance(p.text);
      u.lang = voice ? voice.lang : "es-ES";
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
    pauseBtn.textContent = "❚❚ Pausa";
  }

  playBtn.addEventListener("click", () => { mode = "uno"; run(false); });
  allBtn.addEventListener("click", () => { mode = "todo"; run(cur === 0); });
  stopBtn.addEventListener("click", stop);
  pauseBtn.addEventListener("click", () => {
    if (paused) { synth.resume(); pauseBtn.textContent = "❚❚ Pausa"; }
    else { synth.pause(); pauseBtn.textContent = "▶ Seguir"; }
    paused = !paused;
  });

  // Si la persona cambia de punto con los botones o el mapa, se detiene la lectura
  document.addEventListener("punto", () => { if (mode && !advancing) stop(); });
  window.addEventListener("pagehide", () => synth.cancel());
}
