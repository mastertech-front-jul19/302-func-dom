/*
Jogo de Adivinhação
- O sistema sorteia um número aleatório de 0 a 50;
- O sistema pede um palpite para o usuário;
    - Se o usuário acertar, ele venceu;
    - Se não:
        - O sistema avisa se o palpite do usuário é maior ou menor que o número sorteado;
- A cada erro, o usuário perde 1 vida. Ele tem dez vidas para acertar o número;
*/

let numeroSorteado = 0;

function rodarJogo() {
    let palpite = Number(prompt('Adivinhe o número sorteado entre 0 e 50.'));

    if (palpite === numeroSorteado) {
        alert('Parabéns, você ganhou o jogo');
    }
    else {
        if (palpite > numeroSorteado) {
            alert('Seu palpite foi maior que o número sorteado. Tente um número mais baixo.');
        }
        else {
            alert('Seu palpite foi menor que o número sorteado. Tente um número mais alto.');
        }
        
        rodarJogo();
    }

}

function iniciarJogo() {
    numeroSorteado = aleatorio(0, 50);
    console.log(numeroSorteado);

    rodarJogo();
}

iniciarJogo();