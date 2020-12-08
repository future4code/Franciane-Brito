let semanaCompleta = document.getElementsByClassName("semana")

let botaoCriarTarefa = document.getElementById("button-criar-tarefa")

//2
let tarefaDigitada = ''

function funcao1() {
    let campoTarefa = document.getElementById("tarefa")
    tarefaDigitada = campoTarefa.value
        //  return tarefaDigitada

    let diasDeSemana = document.getElementById("dias-semana")

    console.log(diasDeSemana.value)
    if (diasDeSemana.value === domingo) {
        semanaCompleta[0].style = "background-color: red;"
        semanaCompleta[0].innerHTML = '<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Domingo</font></font></h3><div id="domingo"></div><div>OLA MUNDO</div>'

        console.log(semanaCompleta[0])
    } else if (diasDeSemana.value === segunda) {
        semanaCompleta[1].innerHTML += `<div>${tarefaDigitada}</div>`

    }
}

console.log(semanaCompleta[0])

console.log(semanaCompleta)
let diaDomingo = document.getElementById("domingo")
let diaSegunda = document.getElementById("segunda")
let diaTerca = document.getElementById("terca")
let diaQuarta = document.getElementById("quarta")
let diaQuinta = document.getElementById("quinta")
let diaSexta = document.getElementById("sexta")
let diaSabado = document.getElementById("sabado")

/* console.log(diaDomingo)
console.log(diaSegunda)
console.log(diaTerca)
console.log(diaQuarta)
console.log(diaQuinta)
console.log(diaSexta)
console.log(diaSabado) */



//botaoCriarTarefa.style = "background-color: red;"
//  botaoCriarTarefa.value =