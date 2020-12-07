/* **Exercícios de interpretação de código** */
//EXERCÍCIO 1

/* A) Os valores que serão impressos no console será 10 e 50 */
/* B) Vai imprimir somente o valor referente a minhaFuncao(10) que é a ultima declaração 
referente ao parametro */

//EXERCÍCIO 2
/* A) Essa função imprime até as posições menores que dois de um array no caso 0 e 1.
Então o que será impresso no console saõ os valores Darvas e Caio */
/* B) Vai imprimir os dois nomes no caso Amanda e Caio */

//EXERCÍCIO 3

/*A função verifica se um numero é par e multiplica o numero par por ele mesmo  
SUGESTÃO: multiNumPar*/


/* **Exercícios de escrita de código** */
//EXERCÍCIO 4
//A)
function mensagemQuemSou() {
    console.log("Eu sou Franciane, tenho 21 anos, moro em Minas Gerais e sou estudante.")
}
mensagemQuemSou()

//B)
function mensagemQuemSou(nome, idade, cidade, eEstudante) {
    if (eEstudante === true) {
        console.log("Eu sou , " + nome + " tenho " + idade + " anos, moro em " + cidade + " e sou estudante.")
    } else if (eEstudante === false) {
        console.log("Eu sou , " + nome + " tenho " + idade + " anos, moro em " + cidade + " não sou estudante.")
    }
}
mensagemQuemSou("Franciane", 21, "Minas Gerais", true)

//EXERCÍCIO 5
//A) 
function somaDoisNumeros(numA, numB) {
    let soma = numA + numB
    console.log(soma)
        //   return soma
}
somaDoisNumeros(20, 25)

//B)
function eMaior(numA, numB) {
    if (numA >= numB) {
        return true
    } else {
        return false
    }
}
eMaior(20, 15)

//C)
function mensagemDezVezes(mensagem) {
    for (let i = 0; i < 10; i++) {
        console.log(mensagem)
    }
    // return mensagem
}
mensagemDezVezes("Olá mundo!")


//EXERCÍCIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    //A)
function numElementosNoArray(array) {
    let tamanhoArray = array.length
    return tamanhoArray
}
numElementosNoArray(array)


//B)
function ePar(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}
ePar(10)

//C)


function eParErray(array) {
    let quantNumPar = 0
    for (i of array) {
        if (i % 2 === 0) {
            quantNumPar++
        }
    }
    return quantNumPar
}
eParErray(array)

//D) VEr se as variaveis iguais

function eParArray2(array) {
    let quantNumPar = 0
    for (i of array) {
        if (ePar(i) === true) {
            quantNumPar++
        }

    }
    return quantNumPar
}
eParArray2(array)


/* DESAFIOS */

//EXERCÍCIO 1
//1)
hello = (mensagem) => {
    console.log(mensagem)
}
hello("Olá Mundo!")

//2)
let soma = 0
hello2 = (valor1, valor2) => {
    soma = valor1 + valor2
    console.log(soma)
}
hello2(25, 35)



//EXERCÍCIO 2
//A)

function eParErray(array) {
    const arrayPar = []
    for (i of array) {
        if (i % 2 === 0) {
            arrayPar.push(i * 2)
        }
    }
    return arrayPar
}
eParErray(array)

//B)

let maior = 0

function numeroMaior(array) {
    for (let i = 0; i < array.length; i++) {
        if (maior < array[i]) {
            maior = array[i]
        }
    }
    return maior
}
numeroMaior(array)

//C)
/* let maior = 0

function numeroMaior2(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = i
            console.log(maior)
        }
    }
    //  return maior
}
numeroMaior2(array) */

//D)

function arrayInvertido(array) {
    let novoArray = []
    for (let i = array.length; i > 0; i--) {
        novoArray.push(array[i])
    }
    return novoArray
}
arrayInvertido(array)