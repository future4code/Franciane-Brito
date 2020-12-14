/* Exercícios de interpretação de código */


/* 1- A função converte o valor de dolares para outra moeda. Para isso ela recebe o valor 
da cotação e o valor em dolar e multiplica. */

/* 2- A função tem um loop que mostra quanto o usuario vai ter de lucros de acordo com 
o tipo de investimento que ele fizer. novoMontante vai retornar 165 e segundoMontante vai retornar
 "Tipo de investimento informado incorreto!" */

/* 3- O codigo usa como base o array numeros para formar outros dois arrays um de numeros pares e
outro de numeros impares. O Loop adiciona cada elemento ao seu respectivo array verificando se é par
ou impar. No final vai aoarecer no console o tamanho do array numeros, array e array2 */



/* Exercícios de lógica de Porgramação */

/*  1-
const array = [12, 25, 35, 48, 68]

    for(elemento of array) {
    console.log(elemento)
}
    for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}  
    let i = 0
    while(i < array.length) {
    console.log(array[i])
    i++
}  */


/* 2- 
a) FALSE
b) FALSE
c) TRUE
d) TRUE
e) TRUE
*/

/*  3- 
    const quantidadeDeNumerosPares = Number(prompt("Digite um numero: "))
    let i = 0
    while(i <= quantidadeDeNumerosPares) {
    console.log(i * 2)
    i++
    } */

/* 4- 
function tipoDeTriangulo(a, b, c) {
    if(a === b && b === c) {
        console.log("Esse triângulo é Equilátero.")
    } else if (a === b || b === c || a === c) {
        console.log("Esse triângulo é Isósceles.")
    } else if(a !== b && b !== c && a !== c) {
        console.log("Esse triângulo é Escaleno.")
    }
}
    tipoDeTriangulo(2, 2, 2)
    tipoDeTriangulo(2, 1, 2)
    tipoDeTriangulo(1, 2, 3) */

/* 5-

function diferenca(numeroA, numeroB) {
     let diferencaA = numeroA - numeroB
    let diferencaB = numeroB - numeroA
    if(diferencaA > 0) {
        console.log(`A diferença entre eles é ${diferencaA}`)
    } else if (diferencaB > 0){
        console.log(`A diferenca entre eles é ${diferencaB}`)
    }
}

function eDivisivel(numeroA, numeroB) {
     if(numeroA % numeroB === 0){
        console.log(`Numero ${numeroA} é divisivel por ${numeroB}`)
    } else {
        console.log(`Numero ${numeroA} não é divisivel por ${numeroB}`)
    } 
    if(numeroB % numeroA === 0){
        console.log(`Numero ${numeroB} é divisivel por ${numeroA}`)
    } else {
        console.log(`Numero ${numeroB} não é divisivel por ${numeroA}`)
    }
}

function eMaior(numeroA, numeroB) {
    if(numeroA > numeroB){
        console.log(`Numero maior é ${numeroA}`)
    } else {
        console.log(`Numero maior é ${numeroB}`)
    }
    
   diferenca(numeroA, numeroB)
   eDivisivel(numeroA, numeroB)
}
eMaior(15, 30) */




/* Exercícios de Funções */
/*  1-

const array = [10, 20, 30, 45, 55, 20, 10]

let oMaior = 0
let segundoMaior = 0

function segundoMaior(array) {
    for (i of array) {
        if (i > oMaior) {
            oMaior = i
        }
    }
    for (i of array) {
        if (i > numSegundoMaior && i < oMaior) {
            numSegundoMaior = i
                //  console.log(numSegundoMaior)
        }
    }
    return numSegundoMaior
}

segundoMaior(array)


const array = [110, 20, 30, 45, 55, 20, 5]
let oMenor = array[0]
let numSegundoMenor = array[0]

function segundoMenor(array) {


    for (i of array) {
        if (i < oMenor) {
            oMenor = i
        }
    }

    for (i of array) {
        if (i < numSegundoMenor && i > oMenor) {
            numSegundoMenor = i
        }
    }
    return numSegundoMenor
}

segundoMenor(array) */

/* 2- 
saudacao = () => {
    alert("Hello Labenu!")
}
saudacao()
 */

/* Exercícios de Objetos */

/* 1- O array é como se fosse uma lista de valores armazenados com um indentificador igual com um indice numerico para cada 
elemento
já os objetos são uma lista com mais de um identificador*/

/* 2- 
function criaRetangulo(lado1, lado2) {
    const retangulo = {
        largura : lado1,
        altura : lado2,
        perimetro: (lado1 + lado2) * 2,
        area: lado1 * lado2
    }

    return retangulo
}
criaRetangulo(80, 20)
*/

/* 3- 
const filmeFavorito = {
    titulo: "O preço do amanhã",
    ano: 2011,
    diretor: "Andrew Niccol",
    atores: ["Amanda Seyfried", "Justin Timberlake"]
}
let assistaOFilme =
    `Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ATOR ${filmeFavorito.atores}`
console.log(assistaOFilme)
*/

/* 4- 

const pessoa = {
    nome: "João",
    idade: 26,
    email: "joao2020@gmail.com",
    endereco: "Rua Jardim Estrelado, 25, Espaço Jardim, Belo Horizonte - MG "
}

function anonimizarPessoa() {
    const pessoa2 = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return pessoa2
}
anonimizarPessoa()*/

/* Exercícios de Funções de array */
    /* 1- 
const pessoas = [
        { nome: "Pedro", idade: 20 },
        { nome: "João", idade: 10 },
        { nome: "Paula", idade: 12 },
        { nome: "Artur", idade: 89 }
    ]
    
     
const adultos = pessoas.filter((pessoa) =>{
  return pessoa.idade >= 20
})

// resposta do b)
const criancas = pessoas.filter((pessoa) =>{
  return pessoa.idade < 20
})

*/


/* 2-
const array = [1, 2, 3, 4, 5, 6]

a)

function multiDois() {
    let multiplicacao = 0
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        multiplicacao = array[i] * 2
        array2.push(multiplicacao)
    }
    return array2
}
multiDois() */

/* b) 

function multiTresString() {
    let multiplicacao = 0
    let array3 = []
    for (let i = 0; i < array.length; i++) {
        multiplicacao = array[i] * 3
        array3.push(multiplicacao.toString())
    }
    return array3
}
multiTresString() */

/* c)

function eParOuImpar() {
    let parEImpar = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            parEImpar.push(`${array[i]} é par`)
        } else {
            parEImpar.push(`${array[i]} é impar`)
        }
    }
    return parEImpar
}
eParOuImpar() */

/* 3- */

/* const pessoas = [
        { nome: "Paula", idade: 12, altura: 1.8 },
        { nome: "João", idade: 20, altura: 1.3 },
        { nome: "Pedro", idade: 15, altura: 1.9 },
        { nome: "Luciano", idade: 22, altura: 1.8 },
        { nome: "Artur", idade: 10, altura: 1.2 },
        { nome: "Soter", idade: 70, altura: 1.9 }
    ]
 
// resposta do a)
const podemEntrar = pessoas.filter((p) => {
  return p.altura >= 1.5 && p.idade >= 14 && p.idade <= 60
})

// resposta do b)
const naoPodemEntrar = pessoas.filter((p) => {
  return p.altura < 1.5 || p.idade < 14 || p.idade > 60
})
 */

/* 4- 
const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]


const consultasNaoCanceladas = [Olá, $ { Sr. / Sra. }
    $ { nome da pessoa }.Estamos enviando esta mensagem para
    $ { lembrá - lo / lembrá - la }
    da sua consulta no dia $ { data da consulta }.Por favor, acuse
    o recebimento deste e - mail.
]



const consultasCanceladas = ["Olá", `${}`, `${nomedapessoa}`.Infelizmente, sua consulta marcada
        para o dia $ { datadaconsulta }
        foi cancelada.Se quiser, pode entrar em
        contato conosco para remarcá - la


const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emails = consultas.map((consulta) => {
  let emailFinal = "Olá, "

  if(consulta.cancelada) {
    if(consulta.genero === "feminino") {
      emailFinal += "Sra. "
    } else {
      emailFinal += "Sr. "
    }

    emailFinal += consulta.nome + ". "

    emailFinal += "Estamos enviando esta mensagem para "

    if(consulta.genero === "feminino") {
      emailFinal += "lembrá-la "
    } else {
      emailFinal += "lembrá-lo "
    }

    emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
    emailFinal += "Por favor, acuse o recebimento deste-email."
  } else {

    if(consulta.genero === "feminino") {
      emailFinal += "Sra. "
    } else {
      emailFinal += "Sr. "
    }

    emailFinal += consulta.nome + ". "

    emailFinal += "Infelizmente sua consulta marcada para o dia "

    emailFinal += consulta.dataDaConsulta + " foi cancelada. "
    emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
  }
  return emailFinal
})


*/

/* 5- */
  
/* const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((conta) => {

  let totalDeCompras = 0
  conta.compras.forEach((valor) => {
    totalDeCompras += valor
  })

  conta.saldoTotal -= totalDeCompras
})

 */

