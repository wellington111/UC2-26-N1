/*
//EXEMPLO 1 ↓

const ask = require ('readline-sync')

let nome = ask.question("Qual e o seu nome?");
console.log("Olá", nome)

//EXEMPLO 2 ↓

let nome1 = "Wellington"
let idade = 17
let frase = `Meu nome é ${nome1} e tenho ${idade} anos`;
console.log(frase)

//EXERCÍCIO 1 ↓

const ask = require ('readline-sync')
let nome = ask.question ("Qual seu nome?")
let cor = ask.question ("Qual sua cor favorita?")
let frase = `Meu nome é ${nome} e a minha cor favorira é ${cor}`
console.log(frase)

//EXEMPLO 3 ↓

let nome = "Wellington silva"
console.log(nome.length)

//EXEMPLO 4 ↓

let frase = "OieEeEee!"
let fraseMinuscula = frase.toLowerCase()
console.log(fraseMinuscula)

//EXEMPLO 5 ↓

let frase = "OieEeEee!"
let fraseMaiuscula = frase.toUpperCase()
console.log(fraseMaiuscula)

//EXEMPLO 6 ↓

let email = "    prof.lebc@gmail.com"
console.log(email.trim())

//EXEMPLO 7 ↓

let frase = "Hoje comi cenoura"
let frase1 = frase.includes("cenoura") //true
let frase2 = frase.includes("batata")//false
console.log(frase1,frase2)

//EXEMPLO 8 ↓

let frase = "Hoje comi arroz, feijao e carne"

let fraseFriltrada = frase.includes("feijao")

console.log(`Hoje comi feijao? ${fraseFriltrada}`)
*/
//EXEMPLO 9 ↓
let frase = "Hoje comi cenoura, adoro cenoura"
let novaFrase = frase.replaceAll("cenoura","batata")
console.log(novaFrase)
