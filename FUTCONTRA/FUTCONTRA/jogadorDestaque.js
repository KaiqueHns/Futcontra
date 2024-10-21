// Inicializa um objeto para armazenar os gols dos jogadores
const jogadoresGols = {
    kaique: 5,
    gil: 4,
    felipe: 3,
};

// Função para registrar gols e atualizar o jogador em destaque
document.getElementById('golsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const jogadorSelecionado = document.getElementById('jogador').value;
    const quantidadeGols = parseInt(document.getElementById('quantidade_gols').value, 10);

    if (jogadorSelecionado && quantidadeGols > 0) {
        // Atualiza o número de gols do jogador selecionado
        jogadoresGols[jogadorSelecionado] += quantidadeGols;

        // Atualiza a mensagem de resultado
        document.getElementById('resultado').innerHTML = `${jogadorSelecionado} registrou ${quantidadeGols} gol(s).`;

        // Calcula o jogador em destaque
        let destaqueJogador = '';
        let maxGols = 0;

        for (const jogador in jogadoresGols) {
            if (jogadoresGols[jogador] > maxGols) {
                maxGols = jogadoresGols[jogador];
                destaqueJogador = jogador;
            }
        }

        // Atualiza a div de destaque
        document.getElementById('destaqueNome').textContent = destaqueJogador || 'Ninguém';
                document.getElementById('destaqueGols').textContent = maxGols || 0;
    } else {
        alert('Por favor, selecione um jogador e insira uma quantidade válida de gols.');
    }
});
