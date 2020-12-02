//Exercícios de interpretação de código

/*EXERCÍCIO - 1
 O código possui uma estrutura de condicional. Quando o numero for par ele vai imprimir a mensagem "Passou no teste."
E quando for digitado um numero impar vai retornar a mensagem "Não passou no teste."

 */


/* EXERCÍCIO - 2 
a) O código serve para falar o preço da fruta escolhida.
b) A mensagem impressa no console seria: "O preço da fruta Maça é R$ 2.25"
c) A mensagem impressa no console seria: "O preço da fruta Pêra é R$ 5"
*/

/* EXERCÍCIO - 3
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
a) A primeira linha está pedindo que o usuário digite um número e transformando o numero.
 Pois no prompt o numero vai sair em formato de string mas usando Number ele fica do tipo number.

b) Se o usúario digitar o número 10: A seguinte mensagem será impressa "Esse número passou no teste".
 Se o usúario digitar o número -10: Não iria retornar nenhuma mensagem.

c) Sim haverá um erro no console pois a váriavel mensagem foi declarada dentro do escopo if que é filho do escopo global
 e a variavel mensagem está sendo chamada dentro do escopo global que não tem acesso as variaveis que 
 foram declaradas dentro dos filhos no caso o if.

*/

//**Exercícios de escrita de código**

/* EXERCÍCIO 4 */
/* 
let idade = Number(prompt("Qual é a sua idade?"))
if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
} */

/* EXERCÍCIO 5 */

/* let turnoEscolar = prompt("Digite o turno que você estuda: M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()
if (turnoEscolar === "m") {
    console.log("Bom Dia!")
} else if (turnoEscolar === "v") {
    console.log("Boa Tarde!")
} else if (turnoEscolar === "n") {
    console.log("Boa Noite!")
} else {
    console.log("Digite um valor válido!")
} */

/* EXERCÍCIO 6 */
/* 
let turnoEscolar2 = prompt("Digite o turno que você estuda: M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()
switch (turnoEscolar2) {
    case "m":
        console.log("Bom Dia!")
        break
    case "v":
        console.log("Boa Tarde!")
        break
    case "n":
        console.log("Boa Noite!")
        break
    default:
        console.log("Digite um valor válido!")
} */

/* EXERCÍCIO 7 */

/* let generoDoFilme = prompt("Qual genero de filme você quer assistir?").toLowerCase()
let precoDoIngresso = Number(prompt("Qual é o preço do ingresso desse gênero de filme?"))

if (generoDoFilme === "fantasia" && precoDoIngresso <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
} */

/* DESAFIOS */

/* DESAFIO 1 */

/* let generoDoFilme = prompt("Qual genero de filme você quer assistir?").toLowerCase()
let precoDoIngresso = Number(prompt("Qual é o preço do ingresso desse gênero de filme?"))

if (generoDoFilme === "fantasia" && precoDoIngresso <= 15) {

    let snack = prompt("Qual snack você deseja comprar?").toLowerCase()
    console.log("Bom filme!")
    console.log("E", snack, "!")


} else {
    console.log("Escolha outro filme :(")
} */

/* DESAFIO 2 */


let nomeCompleto = prompt("Qual é o seu nome completo?").toLowerCase()
let tipoDeJogo = prompt("Digite o tipo de jogo IN ou DO: IN(internacional) e DO(doméstico)").toLowerCase()
let etapaDoJogo = prompt("Informe a etapa do Jogo: SF(semi-final), DT(decisão de terceiro lugar) ou FI(final)").toLowerCase()
let categoria = Number(prompt("Qual é a categoria 1, 2, 3 e 4:"))
let quantidadeDeIngressos = Number(prompt("Quantos ingressos vocễ deseja?"))

if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "sf" && categoria === 1) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "semi - final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 1320 / 4.1)
        console.log("Valor total:  U$", (1320 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "semi - final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 1320)
        console.log("Valor total:  R$", 1320 * quantidadeDeIngressos)
    }
} else if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "sf" && categoria === 2) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "semi - final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 880 / 4.1)
        console.log("Valor total:  U$", (880 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "semi - final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 880)
        console.log("Valor total:  R$", 880 * quantidadeDeIngressos)
    }
} else if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "sf" && categoria === 3) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "semi - final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 550 / 4.1)
        console.log("Valor total:  U$", (550 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "semi - final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 550)
        console.log("Valor total:  R$", 550 * quantidadeDeIngressos)
    }
} else if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "sf" && categoria === 4) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "semi - final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 220 / 4.1)
        console.log("Valor total:  U$", (220 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "semi - final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 220)
        console.log("Valor total:  R$", 220 * quantidadeDeIngressos)
    }
}

/* Decisão do 3 lugar */

if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "dt" && categoria === 1) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "Decisão do 3° lugar")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 1320 / 4.1)
        console.log("Valor total:  U$", (1320 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "Decisão do 3° lugar")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 1320)
        console.log("Valor total:  R$", 1320 * quantidadeDeIngressos)
    }
} else if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "dt" && categoria === 2) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "Decisão do 3° lugar")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 880 / 4.1)
        console.log("Valor total:  U$", (880 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "Decisão do 3° lugar")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 880)
        console.log("Valor total:  R$", 880 * quantidadeDeIngressos)
    }
} else if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "dt" && categoria === 3) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "Decisão do 3° lugar")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 550 / 4.1)
        console.log("Valor total:  U$", (550 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "Decisão do 3° lugar")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 550)
        console.log("Valor total:  R$", 550 * quantidadeDeIngressos)
    }
} else if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "dt" && categoria === 4) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "Decisão do 3° lugar")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 220 / 4.1)
        console.log("Valor total:  U$", (220 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "Decisão do 3° lugar")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 220)
        console.log("Valor total:  R$", 220 * quantidadeDeIngressos)
    }
}

/* FINAL */

if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "fi" && categoria === 1) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "Final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 1320 / 4.1)
        console.log("Valor total:  U$", (1320 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "Final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 1320)
        console.log("Valor total:  R$", 1320 * quantidadeDeIngressos)
    }
} else if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "fi" && categoria === 2) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "Final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 880 / 4.1)
        console.log("Valor total:  U$", (880 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "Final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 880)
        console.log("Valor total:  R$", 880 * quantidadeDeIngressos)
    }
} else if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "fi" && categoria === 3) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "Final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 550 / 4.1)
        console.log("Valor total:  U$", (550 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "Final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 550)
        console.log("Valor total:  R$", 550 * quantidadeDeIngressos)
    }
} else if ((tipoDeJogo === "in" || tipoDeJogo === "do") && etapaDoJogo === "fi" && categoria === 4) {
    if (tipoDeJogo === "in") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Internacional")
        console.log("Etapa do jogo:", "Final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$", 220 / 4.1)
        console.log("Valor total:  U$", (220 / 4.1) * quantidadeDeIngressos)

    } else if (tipoDeJogo === "do") {
        console.log("---Dados da compra---")
        console.log("Nome do cliente:", nomeCompleto)
        console.log("Tipo do jogo:", "Nacional")
        console.log("Etapa do jogo:", "Final")
        console.log("Categoria:  ", categoria)
        console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$", 220)
        console.log("Valor total:  R$", 220 * quantidadeDeIngressos)
    }
}