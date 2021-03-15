// Exercício 3
const tarefas = ["Lavar a louça"]
tarefas.push(process.argv[2])
console.log(tarefas)
console.log("Tarefa adicionada com sucesso!")

var fs = require('fs');
fs.write('demofile.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

console.log("Fssssss", fs)