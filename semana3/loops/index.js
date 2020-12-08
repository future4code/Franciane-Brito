/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO */

/* EXERCÍCIO 1
Está somando os valores de 0 até o 4. O resultado que vai aparecer no console é 10.
 */

/* EXERCÍCIO 2
Leia o código abaixo:
Vai ser impresso no console os numeros maiores que 18 no caso 19, 21, 23, 25, 27, 30.
Sim talvex usando o metodo .findIndex()
```jsx
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30].findIndex()
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

b. Se eu quisesse acessar o **índice** de cada elemento dessa lista,
 o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?


 */

//DESAFIO 1

/* O for com o console.log(linha) = Retornará as iterações com a variável (linha) ou seja 0, 00, 000, 0000
ou seja de acordo com a "quantidadeTotal" vai ter mais ou menos  0s no caso quatro porque a variavel */
/* Já o while vai retornar 3 porque é o maior numero inteiro menor que 4 */

/* EXERCÍCIOS DE ESCRITA DE CÓDIGO */

// EXERCÍCIO 3

//a)

/* for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i])
} */

//b)
/* for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i] / 10)
} */

//c)

/* for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] % 2 === 0) {
        console.log(arrayOriginal[i])

    }
}
console.log(arrayOriginal)
*/

//d)
/*     let arrayStrings = []
    let item = ''
    for (let i = 0; i < arrayOriginal.length; i++) {
        item = "O elemento do índex " + i + " é: numero " + arrayOriginal[i]
        arrayStrings.push(item)
    }
    console.log(arrayStrings) */

//e)
//VALOR MÁXIMO
/* let valorMaximo = 0
for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > valorMaximo) {
        valorMaximo = arrayOriginal[i]

    }
}
console.log(valorMaximo) */

//VALOR MINIMO
/* let valorMinimo = arrayOriginal[0]
for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] < valorMinimo) {
        valorMinimo = arrayOriginal[i]

    }
}
console.log(valorMinimo) */


/* DESAFIO 2 */

/* let numeroPrimeiroJogador = prompt("Digite seu numero:")
console.log("Vamos jogar!")

let numeroPrimeiroJogador = prompt("Qual foi o numero escolhido?")
 */