// Versículos en portugués, copiados tal cual de la Biblia (ARA = Almeida Revista e Atualizada,
// ARC = Almeida Revista e Corrigida). Cada pasaje: [número, texto]. Un texto vacío se muestra como pendiente.
const BIBLIA_PT = {
  "Atos 2:1-11 ARA": [["1",""],["2",""],["3",""],["4",""],["5",""],["6",""],["7",""],["8",""],["9",""],["10",""],["11",""]],
  "Gênesis 11:1-9 ARA": [["1",""],["2",""],["3",""],["4",""],["5",""],["6",""],["7",""],["8",""],["9",""]],
  "Sofonias 3:9 ARA": [["9",""]],
  "1 Coríntios 14:1-25 ARA": [["1",""],["2",""],["3",""],["4",""],["5",""],["6",""],["7",""],["8",""],["9",""],["10",""],["11",""],["12",""],["13",""],["14",""],["15",""],["16",""],["17",""],["18",""],["19",""],["20",""],["21",""],["22",""],["23",""],["24",""],["25",""]],
  "Efésios 3:3-6 ARA": [["3",""],["4",""],["5",""],["6",""]],
  "1 Coríntios 14:9 ARC": [["9",""]],
  "1 Coríntios 12:13 ARA": [["13",""]],
  "1 Coríntios 12:30 ARA": [["30",""]],
  "Gálatas 5:22-23 ARA": [["22",""],["23",""]],
  "Atos 8:35-39 ARA": [["35",""],["36",""],["37",""],["38",""],["39",""]]
};

// Pasaje completo en su recuadro
const HPT = ref => H(ref, BIBLIA_PT[ref].map(([n, t]) => [n, t || "<i>(texto pendente)</i>"]));
// Un solo versículo, para citarlo dentro de un párrafo
const VPT = (ref, n) => (BIBLIA_PT[ref].find(v => v[0] === String(n)) || [, ""])[1] || "(texto pendente)";
