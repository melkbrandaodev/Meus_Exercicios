// Escreva um programa JavaScript para encontrar a área de um triângulo onde 
//os comprimentos dos três lados são 5, 6, 7.

const side01 = 5;
const side02 = 6;
const side03 = 7;
const perimeter = (side01+side02+side03)/2;
const area = Math.sqrt(perimeter*((perimeter - side01)*(perimeter - side02)*(perimeter - side03)));
console.log(area.toFixed(2));