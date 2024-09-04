const sp = 67836.49
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const ou = 19849.53

var total = sp + rj + mg + es + ou

var sp_p = (sp / total)*100
var rj_p = (rj / total)*100
var mg_p = (mg / total)*100
var es_p = (es / total)*100
var ou_p = (ou / total)*100

console.log(`SP: ${sp_p.toFixed(2)}%`)
console.log(`RJ: ${rj_p.toFixed(2)}%`)
console.log(`MG: ${mg_p.toFixed(2)}%`)
console.log(`ES: ${es_p.toFixed(2)}%`)
console.log(`Outros: ${ou_p.toFixed(2)}%`)