function playRockPaperScissor(player1, player2) {
    // Verificar empate
    if (player1 === player2) {
        return "Empate!";
    }

    // Verificar vencedor
    if (
        (player1 === "Pedra" && player2 === "Tesoura") ||
        (player1 === "Tesoura" && player2 === "Papel") ||
        (player1 === "Papel" && player2 === "Pedra")
    ) {
        return "Jogador 1 venceu!";
    } else {
        return "Jogador 2 venceu!";
    }
}

// Exemplo de chamada da função para testar
const resultado = playRockPaperScissor("Pedra", "Tesoura");
console.log(resultado); // Saída: "Jogador 1 venceu!"
