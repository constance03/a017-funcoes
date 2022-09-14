// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. 
//Invoque a função e imprima no console o resultado.
function somaNumeros (num1,num2) {
    return [num1+num2]
}

//console.log(somaNumeros((+prompt("insira um numero")), (+prompt("insira outro numero"))));

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.
function imprimeBooleano(num1, num2) {
    if (num1 >= num2) {
        console.log(true);
    }
}

imprimeBooleano(3,2)

// c) Uma função que receba um número e imprima se ele é par ou não
function eParOuNao(num1) {
    if (num1 % 2 === 0 ) {
        console.log("É par");
    } else {
        console.log("Não é par");
    }
}

eParOuNao(4)

// d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela contendo apenas letras maiúsculas.
function tamanhoMensagem(frase) {
    return [frase.length, frase.toUpperCase()]
}

console.log(tamanhoMensagem("oi, tudo bem"));
