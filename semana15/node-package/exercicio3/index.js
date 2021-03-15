// Exercício 3
// const tarefas = ["Lavar a louça"]
// console.log("Tarefa adicionada com sucesso!")
// tarefas.push(process.argv[2]) 
// console.log(tarefas)

/* var fs = require('fs');
fs.write('./demofile.txt', 'utf8', function(err, data) {
  if (err) throw err
  console.log(data)
}); */


// const fs = require('fs'); 
  
// let data = "This is a file containing a collection of books."; 
  
// fs.writeFile("demofile.txt", data, (err) => { 
//   if (err) 
//     console.log(err); 
//   else { 
//     console.log("File written successfully\n"); 
//     console.log("The written has the following contents:"); 
//     console.log(fs.readFileSync(tarefas, "utf8")); 
//   } 
// }); 

//console.log("Fssssss", fs)

// const tarefas = ["Lavar a louça"]
// console.log("Tarefa adicionada com sucesso!")


var fs = require('fs');

const tarefas = ["Lavar a louça"]
tarefas.push(process.argv[2]) 

var data = JSON.stringify(tarefas);

fs.writeFile('./demofile.json', data, function (err) {
  if (err) {
    console.log('There has been an error saving your configuration data.');
    console.log(err.message);
    return;
  }
  console.log('Configuration saved successfully.')
});
console.log(tarefas)
// console.log(fs)
