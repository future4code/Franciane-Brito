/* Exercicio 1 - console.log(10) & conssole.log(10, 5)*/

/* Exercicio 2 - console.log(console.log(10, 10, 10)*/

//**Exercícios de escrita de código**
//1
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// Apareceu na tela o valor undefined para as duas variaveis pois não atribui nenhum valor a elas.

nome = prompt("Qual seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// Agora o tipo dos dados foi alterado para string. A idade tambem ficou no formato de string por estar dentro de aspas.

console.log("Olá", nome, ", você tem ", idade, " anos")


//2

let pais = prompt("Qual seu país?")
console.log("Resposta:" + pais)
let estado = prompt("Qual seu estado?")
let cidade = prompt("Qual sua cidade?")
let animalEstimacao = prompt("Tem animal de estimação?")
let cor = prompt("Qual sua cor preferida?")

console.log("Resposta:" + estado)
console.log("Resposta:" + cidade)
console.log("Resposta:" + animalEstimacao)
console.log("Resposta:" + cor)


//3

let comidasFavoritas = ['manga', 'arroz', 'feijao', 'carne', 'salada']

console.log(comidasFavoritas)

console.log("Essas são minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

let perguntaAoUsuario = prompt("Qual é a sua comida favorita?")

comidasFavoritas[1] = perguntaAoUsuario

console.log(comidasFavoritas)


//4

let arrayPerguntas = ['Gosta de rosa?', 'Gosta de azul?', 'Gosta de verde?']
let arrayRespostas = ['true', 'false', 'true']

console.log(arrayPerguntas[0], arrayRespostas[0])
console.log(arrayPerguntas[1], arrayRespostas[1])
console.log(arrayPerguntas[2], arrayRespostas[2])