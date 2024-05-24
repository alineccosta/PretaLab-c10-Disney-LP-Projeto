let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado ();

    if (!palpiteDigitado) {
        alert("Digite um valor válido!")
        return;
    }  

    if (palpiteDigitado === numeroAleatorio) {
        alert("É isso mesmo, você adivinhou!")
        reiniciarJogo();
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback("Número muito alto! Chute um número menor!.");
    } else if (palpiteDigitado < numeroAleatorio) {
        tentativas++;
        atualizarFeedback("Número muito baixo! Chute um número maior!.");
    }
    
    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);

    const palpitesFalhos= pegarPalpitesFalhos ();
    const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos);

    const pontuacaoAtual = pegarPontuacao();
    if (pontuacaoAtual === "Você tem 0 pontos") {
        alert("Perdeu! Você chegou no limbo, acabou para você!")
        alert ("Quer jogar de novo?")
    }

}

function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja reiniciar o jogo?");

    if (vaiReiniciar) {
        tentativas = 0;
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback("")
        limparPalpiteDigitado();


    }
}
