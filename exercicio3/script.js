// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas
//  (soma, subtração, multiplicação e divisão).
function retornarMultiplicacao(num1, num2) {
    return num1*num2
}

function retornarSubtracao(num1, num2) {
    return num1-num2
}

function retornarSoma(num1, num2) {
    return num1+num2
}

function retornarDivisao(num1, num2) {
    return num1/num2
}

console.log("Soma: "+ retornarSoma(2,3));
console.log("Subtracao: "+ retornarSubtracao(2,3));
console.log("Multiplicacao: "+ retornarMultiplicacao(2,3));
console.log("Divisao: "+ retornarDivisao(2,3));



// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, imprima no console o resultado das operações

let numero1 = +prompt("Escolha um numero")
let numero2 = +prompt("Escolha outro numero")

console.log("Soma: "+ retornarSoma(numero1, numero2));
console.log("Subtracao: "+ retornarSubtracao(numero1, numero2));
console.log("Multiplicacao: "+ retornarMultiplicacao(numero1, numero2));
console.log("Divisao: "+ retornarDivisao(numero1, numero2));