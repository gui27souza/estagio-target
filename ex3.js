const data = require("./dados.json")

let min = Infinity, max = 0, valor_total = 0, dias = 0

for (let i = 0; i < data.length; i++) {
    if (data[i].valor < min && data[i].valor != 0) min = data[i].valor
    if (data[i].valor > max) max = data[i].valor

    valor_total += data[i].valor
    if (data[i].valor != 0) dias++
}

let media = valor_total/dias
let dias_superiores = 0

for (let i = 0; i < data.length; i++) {
    if (data[i].valor > media) dias_superiores++
}

console.log(`O valor mínimo foi: R$ ${min.toFixed(2)}`)
console.log(`O valor máximo foi: R$ ${max.toFixed(2)}`)
console.log(`\nMédia Mensal: R$ ${media.toFixed(2)}`)
console.log(`Dias em que o valor de faturamento foi maior que a média mensal foi: ${dias_superiores} dias`)