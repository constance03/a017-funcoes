// a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.
// function imprimaNome(nome) {
//     console.log(`Olá, ${nome}!`);
// }

// imprimaNome("Maria")

// // // b) Declare uma função que imprima a tabuada do 6. Chame esta função.
// function imprimaTabuada(num) {
//     //const numeros = [1,2,3,4,5,6,7,8,9,10]
//     for (let i = 0; i < 10; i++) {
//         console.log(`${i+1} x ${num} = ${i*num}`);
//     }
// }

// imprimaTabuada(6)

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou arrow functions
const imprimaNome = (nome) => {
    console.log(`Olá, ${nome}!`);
}

imprimaNome("Maria")


const imprimaTabuada = (num) => {
    const numeros = [1,2,3,4,5,6,7,8,9,10]
     for (let i = 0; i < numeros.length; i++) {
        console.log(`${numeros[i]} x ${num} = ${numeros[i]*num}`);
     }
}

imprimaTabuada(6)