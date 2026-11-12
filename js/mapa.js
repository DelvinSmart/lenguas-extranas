// Dibuja el mapa y el panel de lectura a partir de BRANCHES (js/contenido.js).
// Order of the talk: término, paréntesis, fundamento histórico, Hechos, 1 Corintios, bautismo del Espíritu
const ORDERED = [0, 1, 4, 2, 3, 5].map(i => BRANCHES[i]);
const STEPS = [];
ORDERED.forEach((b, bi) => b.leaves.forEach((l, li) => STEPS.push({ b, bi, l, li })));

const tree = document.getElementById("tree");
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
    c.innerHTML = `<span class="n">${bi + 1}.${li + 1}</span>${l.label}${l.nuevo ? '<span class="new">nuevo</span>' : ''}`;
    c.addEventListener("click", () => show(idx, true));
    leaves.appendChild(c); chips[idx] = c;
  });
  el.querySelector(".bhead").addEventListener("click", () => show(STEPS.findIndex(s => s.bi === bi), true));
  tree.appendChild(el);
});

const reader = document.getElementById("reader");
let cur = 0;
function show(i, fromMap){
  cur = Math.max(0, Math.min(STEPS.length - 1, i));
  const s = STEPS[cur];
  reader.style.setProperty("--c", `var(${s.b.color})`);
  document.getElementById("rtag").textContent = `${s.bi + 1} · ${s.b.title}`;
  document.getElementById("rlabel").textContent = s.l.label;
  const body = document.getElementById("rbody");
  body.innerHTML = s.l.html; body.scrollTop = 0;
  document.getElementById("pos").textContent = `${cur + 1} / ${STEPS.length}`;
  document.getElementById("prev").disabled = cur === 0;
  document.getElementById("next").disabled = cur === STEPS.length - 1;
  chips.forEach((c, k) => c.classList.toggle("on", k === cur));
  if (fromMap && window.matchMedia("(max-width:920px)").matches) reader.scrollIntoView({ behavior: "smooth", block: "start" });
  try { localStorage.setItem("lenguas-paso", String(cur)); } catch (e) {}
}
document.getElementById("prev").addEventListener("click", () => show(cur - 1));
document.getElementById("next").addEventListener("click", () => show(cur + 1));
document.getElementById("tomap").addEventListener("click", () => {
  chips[cur].scrollIntoView({ behavior: "smooth", block: "center" });
  chips[cur].focus({ preventScroll: true });
});
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") show(cur + 1);
  if (e.key === "ArrowLeft") show(cur - 1);
});
let start = 0;
try { start = parseInt(localStorage.getItem("lenguas-paso") || "0", 10) || 0; } catch (e) {}
show(start);
