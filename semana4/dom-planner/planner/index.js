let semanaCompleta = document.getElementsByClassName("semana")
let botaoCriarTarefa = document.getElementById("button-criar-tarefa")

/* IDs DIAS DA SEMANA */
let diaDomingo = document.getElementById("domingo")
let diaSegunda = document.getElementById("segunda")
let diaTerca = document.getElementById("terca")
let diaQuarta = document.getElementById("quarta")
let diaQuinta = document.getElementById("quinta")
let diaSexta = document.getElementById("sexta")
let diaSabado = document.getElementById("sabado")


function funcao1() {
    let campoTarefa = document.getElementById("tarefa")
    let tarefaDigitada = campoTarefa.value
    if (tarefaDigitada === '') {
        alert("Digite uma tarefa para continuar")
    }


    let diasDeSemana = document.getElementById("dias-semana")
    let lugarLegal = diasDeSemana.value
    if (lugarLegal === "domingo") {
        diaDomingo.innerHTML += `<p>${tarefaDigitada}</p>`
    } else if (lugarLegal === "segunda") {
        diaSegunda.innerHTML += `<p>${tarefaDigitada}</p>`
    } else if (lugarLegal === "terca") {
        diaTerca.innerHTML += `<p>${tarefaDigitada}</p>`
    } else if (lugarLegal === "quarta") {
        diaQuarta.innerHTML += `<p>${tarefaDigitada}</p>`
    } else if (lugarLegal === "quinta") {
        diaQuinta.innerHTML += `<p>${tarefaDigitada}</p>`
    } else if (lugarLegal === "sexta") {
        diaSexta.innerHTML += `<p>${tarefaDigitada}</p>`
    } else if (lugarLegal === "sabado") {
        diaSabado.innerHTML += `<p>${tarefaDigitada}</p>`
    }
    campoTarefa.value = null
}

function stiloLinha() {
    diaDomingo.style = "text-decoration: line-through;"
    diaSegunda.style = "text-decoration: line-through;"
    diaTerca.style = "text-decoration: line-through;"
    diaQuarta.style = "text-decoration: line-through;"
    diaQuinta.style = "text-decoration: line-through;"
    diaSexta.style = "text-decoration: line-through;"
    diaSabado.style = "text-decoration: line-through;"


    console.log("lugar")

}

const lugar = document.getElementById("dia-da-semana")

function limparTarefas() {
    diaDomingo.innerHTML = ""
    diaSegunda.innerHTML = ""
    diaTerca.innerHTML = ""
    diaQuarta.innerHTML = ""
    diaQuinta.innerHTML = ""
    diaSexta.innerHTML = ""
    diaSabado.innerHTML = ""
}







//botaoCriarTarefa.style = "background-color: red;"
//  botaoCriarTarefa.value =


/* mobile */