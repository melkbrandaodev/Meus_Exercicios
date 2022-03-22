//Escreva um programa JavaScript para obter a data atual.  Vá para o editor
//Saída esperada :
//mm-dd-aaaa, mm/dd/aaaa ou dd-mm-aaaa, dd/mm/aaaa

const today = new Date();
const dia_Mes = today.getDate()
const mes = String(today.getMonth()+1).padStart(2,'0')
const ano = today.getFullYear()

console.log(`${dia_Mes}/${mes}/${ano}`)