// function somar(valor1, valor2) { //Assinatura da Função
//     //valor1 e valor2 são os parâmetros
//     return valor1 + valor2;
// }

// let resultado = somar(2, 3);
// console.log(resultado);

function promptNumerico(pergunta) {
    let texto = prompt(pergunta);
    let valor = Number(texto);

    // while(isNaN(valor) || texto == false) {
    while(isNaN(valor) || !texto) {
        valor = Number(prompt(`É necessário digitar um valor numérico. ${pergunta}`));
    }

    return valor;
}

let idade = promptNumerico('Qual a sua idade?');
let renda = promptNumerico('Qual a sua renda?');
let montante = promptNumerico('Qual o valor do empréstimo?');

console.log(idade);
console.log(renda);
console.log(montante);