// Exercício 2

let valor = 0
if(process.argv[2] === "add"){
   valor = Number(process.argv[3]) + Number(process.argv[4])
} else if(process.argv[2] === "sub"){
   valor = Number(process.argv[3]) - Number(process.argv[4])
} else if(process.argv[2] === "mult"){
   valor = Number(process.argv[3]) * Number(process.argv[4])
} else if(process.argv[2] === "div"){
   valor = Number(process.argv[3]) / Number(process.argv[4])
}
console.log(valor)