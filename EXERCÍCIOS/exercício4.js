const ask = require('readline-sync')

let raçasDeCachorro = ["Pitbu", "Rotivale", "Pinxe", "Caramelo", "Pudo"]
let pergunta = Number(ask.question("Insira um numero de 0 a 4: "))
console.log(raçasDeCachorro[pergunta])