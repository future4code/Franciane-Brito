// Exercício 1
//A) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Para acessar esses dados usamos a seguinte sintaxe progressa.arqv[posição do argumento]

// B)



if(process.argv[2] !== undefined && process.argv[3] !== undefined) {
    const aboutMe = `Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`
    // comando dado no terminal: npm run start franciane 21
    console.log('\x1b[36m%s\x1b[0m', aboutMe)
} else if(process.argv[2] === undefined || process.argv[3] === undefined){
    console.log("\x1b[31m", "Esperava 2 parâmetros só recebi um.")
}


// C)
if(process.argv[2] !== undefined && process.argv[3] !== undefined) {
    const idadeMaisSete = Number(process.argv[3]) + 7
    const aboutMeSeven = `Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${idadeMaisSete}`
    // comando dado no terminal: npm run start franciane 21
    console.log('\x1b[36m%s\x1b[0m', aboutMeSeven)
} else if(process.argv[2] === undefined || process.argv[3] === undefined){
   // console.log("Esperava 2 parâmetros só recebi um.")
    console.log("\x1b[31m", "Esperava 2 parâmetros só recebi um.")
}






 