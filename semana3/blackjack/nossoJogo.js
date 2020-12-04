/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/* CRIAR CONDIÇÃO PARA "A" */

/* VALORES DAS CARTAS */
let cartaValor = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
let valorAleatorio = Math.floor(Math.random() * 12 - 1)
let cartaValorAleatorio = cartaValor[valorAleatorio]
    //console.log(cartaValorAleatorio)

/* NIPE DAS CARTAS */

let cartaTipo = ["♠", "♣", "♥", "♦"]
let tipoAleatorio = Math.floor(Math.random() * 4 - 1)
let cartaTexto = cartaTipo[tipoAleatorio]


/* CARTAS COM VALOR 10 */
let cartaTextoS = ["J", "K", "Q", 10]
if (cartaValorAleatorio === 10) {

    let tipoValor10 = Math.floor(Math.random() * 4 - 1)
    let cartaValorAleatorioE = cartaTextoS[tipoValor10]
    console.log(cartaValorAleatorioE + cartaTexto)
} else {
    console.log(cartaValorAleatorio + cartaTexto)
}
const comprarCarta = cartaValorAleatorioE + cartaTexto





/* console.log("Bem vindo ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
    let comprarCarta
        //  Math.floor(Math.random() * 10)

    // console.log(carta.texto) 
    // imprime o texto da carta. Nesse caso: "K♦️"

    //  console.log(carta.valor) 
    // imprime o valor da carta (um número). Nesse caso: 10)

 */
/* 
}
else {
    console.log("O jogo acabou")
} */