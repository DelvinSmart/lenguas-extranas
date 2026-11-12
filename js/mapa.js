// Dibuja el mapa y el panel de lectura en el idioma elegido (LANG y T vienen de js/textos.js).
// Orden de la exposición: término, paréntesis, fundamento histórico, Hechos, 1 Corintios, bautismo del Espíritu
const ORDERED = [0, 1, 4, 2, 3, 5].map(i => (LANG === "pt" ? BRANCHES_PT : BRANCHES)[i]);
const STEPS = [];
ORDERED.forEach((b, bi) => b.leaves.forEach((l, li) => STEPS.push({ b, bi, l, li })));

// Textos fijos de la página
const $ = id => document.getElementById(id);
document.title = T.titulo;
$("titulo").textContent = T.titulo;
T.preguntas.forEach(q => { const li = document.createElement("li"); li.textContent = q; $("preguntas").appendChild(li); });
$("ybien").textContent = T.ybien;
$("prev").textContent = T.anterior;
$("next").textContent = T.siguiente;
$("tomap").textContent = T.mapa;
$("ayuda").textContent = T.ayuda;
$("pdf").textContent = T.pdf;
$("pdf").href = T.pdfArchivo;

// Selector de idioma: solo aparece cuando hay más de un idioma completo
if (IDIOMAS_LISTOS.length > 1) {
  $("idiomas").hidden = false;
  document.querySelectorAll("#idiomas a").forEach(a => {
    a.classList.toggle("on", a.dataset.lang === LANG);
    a.addEventListener("click", () => { try { localStorage.setItem("lenguas-idioma", a.dataset.lang); } catch (e) {} });
  });
}

const tree = $("tree");
const chips = [];
ORDERED.forEach((b, bi) => {
  const el = document.createElement("div");
  el.className = "branch";
  el.style.setProperty("--c", `var(${b.color})`);
  el.innerHTML = `<button class="bhead" type="button"><span class="bnum">${bi + 1}</span><span class="btitle"><small>${b.sub}</small>${b.title}</span></button><div class="leaves"></div>`;
  const leaves = el.querySelector(".leaves");
  b.leaves.forEach((l, li) => {
    const idx = STEPS.findIndex(s => s.bi === bi && s.li === li);
    const c = document.createElement("button");
    c.type = "button"; c.className = "leaf";
    c.innerHTML = `<span class="n">${bi + 1}.${li + 1}</span>${l.label}${l.nuevo ? `<span class="new">${T.nuevo}</span>` : ""}`;
    c.addEventListener("click", () => show(idx, true));
    leaves.appendChild(c); chips[idx] = c;
  });
  el.querySelector(".bhead").addEventListener("click", () => show(STEPS.findIndex(s => s.bi === bi), true));
  tree.appendChild(el);
});

const reader = $("reader");
let cur = 0;
function show(i, fromMap){
  cur = Math.max(0, Math.min(STEPS.length - 1, i));
  const s = STEPS[cur];
  reader.style.setProperty("--c", `var(${s.b.color})`);
  $("rtag").textContent = `${s.bi + 1} · ${s.b.title}`;
  $("rlabel").textContent = s.l.label;
  const body = $("rbody");
  body.innerHTML = s.l.html; body.scrollTop = 0;
  $("pos").textContent = `${cur + 1} / ${STEPS.length}`;
  $("prev").disabled = cur === 0;
  $("next").disabled = cur === STEPS.length - 1;
  chips.forEach((c, k) => c.classList.toggle("on", k === cur));
  if (fromMap && window.matchMedia("(max-width:920px)").matches) reader.scrollIntoView({ behavior: "smooth", block: "start" });
  try { localStorage.setItem("lenguas-paso", String(cur)); } catch (e) {}
  document.dispatchEvent(new CustomEvent("punto", { detail: { index: cur } }));
}
$("prev").addEventListener("click", () => show(cur - 1));
$("next").addEventListener("click", () => show(cur + 1));
$("tomap").addEventListener("click", () => {
  chips[cur].scrollIntoView({ behavior: "smooth", block: "center" });
  chips[cur].focus({ preventScroll: true });
});
document.addEventListener("keydown", e => {
  if (e.target.closest && e.target.closest("select")) return;
  if (e.key === "ArrowRight") show(cur + 1);
  if (e.key === "ArrowLeft") show(cur - 1);
});
let start = 0;
try { start = parseInt(localStorage.getItem("lenguas-paso") || "0", 10) || 0; } catch (e) {}
show(start);
