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
/* Exercícios de Funções de array */