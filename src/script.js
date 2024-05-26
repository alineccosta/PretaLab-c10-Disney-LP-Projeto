let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpitesJaDigitados = [];
let jogoAtivo = true;

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado ();

    if (!jogoAtivo) {
        alert("O jogo acabou. Para jogar novamente, reinicie o jogo.")
        return;
    }

    if (!palpiteDigitado) {
        alert("Digite um valor válido!")
        return;
    }  

    if (palpiteDigitado === numeroAleatorio) {
        alert("É isso mesmo, você adivinhou!")
        jogoAtivo = false;
        reiniciarJogo();
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback("Número muito alto! Chute um número menor!.");
    } else if (palpiteDigitado < numeroAleatorio) {
        tentativas++;
        atualizarFeedback("Número muito baixo! Chute um número maior!.");
    }
    
    if (palpiteDigitado > 100) {
        alert("Digite um número inteiro menor do que 100!")
        atualizarFeedback("Digite valores inteiros entre 1 e 100.")
        return;
    }

    if (palpitesJaDigitados.includes(palpiteDigitado)) {
        alert("Você já chutou este número! Digite outro número diferente.")
        return;
    }

    palpitesJaDigitados.push(palpiteDigitado);
    
    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);

    const palpitesFalhos = pegarPalpitesFalhos ();
    const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos);

    const pontuacaoAtual = pegarPontuacao();
    if (pontuacaoAtual === "Você tem 0 pontos") {
        alert("Perdeu! Você chegou no limbo, acabou para você!")
        jogoAtivo = false;
        reiniciarJogo();
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
