
//Escreva um programa JavaScript para exibir o dia e a hora atuais no formato a seguir.
//Hoje é Segunda-feira.
//A hora atual é: hh: mm: ss

const hoje = new Date()
const dia_Semana = hoje.getDay();
dia_Mes = hoje.getDate()
listaDia = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado']
const mes = String(hoje.getMonth()+1).padStart(2,'0');
const ano = hoje.getFullYear();
const hora = hoje.getHours()
const minutos = hoje.getMinutes()
const segundos = hoje.getSeconds()
console.log(`Hoje é ${listaDia[dia_Semana]}`)
console.log(`${dia_Mes}/${mes}/${ano}`)
console.log(`${hora}:${minutos}:${segundos}`)