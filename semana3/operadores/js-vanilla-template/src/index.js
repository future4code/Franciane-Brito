/* 1-

const bool1 = true
const bool2 = false
const bool3 = !bool2 // true


// Vai ser falso 
let resultado = bool1 && bool2 // false
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 //false
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1) // true
console.log("c. ", resultado)

console.log("e. ", typeof resultado) // bolean
*/


/* 
2- let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // Retorna o item na posição 0 do array no caso 3

array[i+1] = 19
console.log('e. ', array) // retorna todo o array no caso [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // Vai retornar o item no indice 6 do array no caso o 9
 */

//EXERCICIOS DE ESCRITA DE CÓDIGO

//1

/* let idadeUsuario = prompt("Qual é a sua idade?")
let idadeAmigo = prompt("Qual é a idade do seu melhor amigo(a)?")

let idadeMaior = idadeUsuario > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)
console.log("Diferença de idade:", Number(idadeUsuario) - Number(idadeAmigo), "anos")
 */
//2

/* let numeroPar = prompt("Insira um numero par:")
console.log(Number(numeroPar) % 2) */

// Todos os numeros pares o resto da divisão é 0

// Quando o usuario insere um numero impar o resto divisão é sempre 1

// 3

/* let array = []
let listaDeTarefas = array

let primeiraTarefa = prompt("Digite aqui a primeira tarefa que você tem que fazer no dia?")
let segundaTarefa = prompt("Digite aqui a segunda tarefa que você tem que fazer no dia?")
let terceiraTarefa = prompt("Digite aqui a terceira tarefa que você tem que fazer no dia?")

listaDeTarefas = array.push(primeiraTarefa)
listaDeTarefas = array.push(segundaTarefa)
listaDeTarefas = array.push(terceiraTarefa)

console.log(array)

let indiceTarefaRealizada = prompt("Digite o indice da tarefa realizada 0, 1 ou 2:")

listaDeTarefas = array.splice(indiceTarefaRealizada, 1)

console.log(array) */

//4
/* let nomeDoUsuario = prompt("Qual é o seu nome?")
let emailDoUsuario = prompt("Qual é o seu email?")
console.log("O e-mail ", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o),", nomeDoUsuario, "!")
 */

//Desafios Extras 

//1

let kelvin = (77 - 32) * 5 / 9 + 273.15
console.log(kelvin + "K")

let grausFahrenheit = (80) * 9 / 5 + 32
console.log(grausFahrenheit + "°F")

let grausFahrenheitC = (30) * 9 / 5 + 32
let kelvinC = (grausFahrenheitC - 32) * 5 / 9 + 273.15
console.log(grausFahrenheitC + "°F " + kelvinC + "K")

let valorDoUsuario = prompt("Digite o valor em graus Celsius:")

let grausFahrenheitC2 = (valorDoUsuario) * 9 / 5 + 32
let kelvinC2 = (grausFahrenheitC2 - 32) * 5 / 9 + 273.15
console.log(grausFahrenheitC2 + "°F " + kelvinC2 + "K")

//2

let quilowattHora = 280 * 0.05 / 100
console.log("R$" + quilowattHora + ",00 reais")

let quilowattHora2 = 280 * 0.05 / 100 * 85
console.log("R$" + quilowattHora2 + ",00 reais")

//3


let libraParaKg = 20 * 0.453592
console.log("20lb equivalem a " + libraParaKg + "kg")

let incaParaKg = 10.5 * 0.02834952
console.log("10.5z equivalem a " + incaParaKg + "kg")

let milhaParaMetro = 100 * 1609.34
console.log("100m equivalem a " + milhaParaMetro + "m")

let pesParaMetro = 50 * 0.3048
console.log("50ft equivalem a " + pesParaMetro + "m")

let galaoParaLitro = 103.56 * 14.3293424
console.log("103.56gal equivalem a " + galaoParaLitro + "l")

let xicaraParaLitro = 450 * 0.24
console.log("450 xic equivalem a " + xicaraParaLitro + "l")

let xicaraValorUsuario = prompt("Digite a quantidade em xicaras para ser convertido em Litro:")
let xicaraParaLitro2 = xicaraValorUsuario * 0.24
console.log(xicaraValorUsuario + " xicaras equivalem a " + xicaraParaLitro2 + "l")