// Arma la versión para imprimir: el mapa en la primera página y cada rama en su propia página.
const ORDERED=[0,1,4,2,3,5].map(i=>BRANCHES[i]);
let out='<h1>Lenguas extrañas?</h1><ul class="q"><li>De dónde proviene?</li><li>Donde nació?</li><li>Y la pregunta más importante, ¿qué dice la Bíblia?</li><li>Qué fundamento bíblico tiene esta práctica que hoy se ve comúnmente dentro de las Iglesia?</li></ul><div class="yb">Y bien!</div><div class="ov">';
ORDERED.forEach((b,bi)=>{out+=`<div class="ob" style="--c:var(${b.color})"><div class="oh"><span class="num">${bi+1}</span>${b.title}</div><div class="ol">${b.leaves.map((l,li)=>`<span><b>${bi+1}.${li+1}</b>${l.label}</span>`).join('')}</div></div>`});
out+='</div>';
ORDERED.forEach((b,bi)=>{out+=`<section class="sec" style="--c:var(${b.color})"><div class="sh"><span class="num">${bi+1}</span><div class="t"><small>${b.sub}</small>${b.title}</div></div>`;
b.leaves.forEach((l,li)=>{out+=`<div class="pt"><div class="pl"><span class="n">${bi+1}.${li+1}</span>${l.label}${l.nuevo?'<span class="new">nuevo</span>':''}</div>${l.html}</div>`});out+='</section>'});
document.getElementById('app').innerHTML=out;
