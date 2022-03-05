//Escreva um programa JavaScript para obter a data atual.
//Saída esperada :mm-dd-aaaa, mm/dd/aaaa ou dd-mm-aaaa, dd/mm/aaaa

var data_atual = new Date();
var dia = String(data_atual.getDate()).padStart(2,'0');
var mes = String(data_atual.getMonth()+1).padStart(2,'0');
var ano = data_atual.getFullYear();
console.log(`${mes}-${dia}-${ano}`);
console.log(`${mes}/${dia}/${ano}`);
console.log(`${dia}-${mes}-${ano}`);
console.log(`${dia}/${mes}/${ano}`);
    

