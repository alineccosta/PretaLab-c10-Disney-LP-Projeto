let numeroAleatorio = 13;
let tentativas = 0;

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado ();

    if (!palpiteDigitado) {
        alert("Digite um valor válido!")
        return;
    }  

    if (palpiteDigitado === numeroAleatorio) {
        alert("É isso mesmo, você adivinhou!")
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


}

function reiniciarJogo() {
    // to-do
}
