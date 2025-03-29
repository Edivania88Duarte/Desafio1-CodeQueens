const num1 = 10;
const num2 = 2;

const soma = num1 + num2;
console.log("Soma:", soma)

const subtracao = num1 - num2;
console.log("Subtração:", subtracao)

const multiplicacao = num1 * num2;
console.log("Multiplicação", multiplicacao)

const divisao = num1 / num2;
console.log("Divisão", divisao) 


document.getElementById("soma").textContent = `Soma: ${soma}`;
document.getElementById("subtracao").textContent = `Subtração: ${subtracao}`;
document.getElementById("multiplicacao").textContent = `Multiplicação: ${multiplicacao}`;   
document.getElementById("divisao").textContent = `Divisão: ${divisao}`;