function executarPrograma() {
    let porcentagem = 0.3;
    let idade = Number(prompt('Quantos anos você tem?'));
    let renda = Number(prompt('Qual é sua renda?'));
    let montante = Number(prompt('Qual o valor do empréstimo?'));

    if (idade < 24 || idade > 65) {
        alert('Reprovado pela idade');
    }
    else if (renda < 1500) {
        alert('Reprovado pela renda');
    }
    else if (montante < 1000 || montante > renda * 10) {
        alert('Reprovado pelo empréstimo');
    }
    else {
        alert('Aprovado');

        let valorTotal = montante * (1 + porcentagem);
        let quantidadeParcelas = Number(prompt('O valor total a ser pago é de R$' + valorTotal + '. Em quantas parcelas você gostaria de dividir?'));

        while (isNaN(quantidadeParcelas)) {
            quantidadeParcelas = Number(prompt(`Nós só aceitamos parcelamentos de 3 a 12 vezes. Em quantas parcelas você gostaria de dividir?`));
        }

        let valorParcela = valorTotal / quantidadeParcelas;

        alert(`O valor total a ser pago é de R$${valorTotal}, e será pago em ${quantidadeParcelas} de R$${valorParcela.toFixed(2)}`);
    }
}

executarPrograma();