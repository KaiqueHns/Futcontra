// Array de times
const times = [
    { nome: "FUTZEM", vitorias: 10, empates: 3, derrotas: 2 },
    { nome: "ARSENAL NC", vitorias: 12, empates: 3, derrotas: 0 },
    { nome: "INVICTUS", vitorias: 9, empates: 2, derrotas: 4 },
    { nome: "REAL NC", vitorias: 0, empates: 1, derrotas: 2 },
   
];

// Função para calcular os pontos
function calcularPontos(time) {
    return (time.vitorias * 3) + (time.empates);
}

// Adiciona os pontos a cada time
times.forEach(time => {
    time.pontos = calcularPontos(time);
});

// Função para classificar times por pontos
times.sort((a, b) => b.pontos - a.pontos);

// Função para exibir a tabela
function exibirTabela() {
    const tbody = document.querySelector("#rankingTable tbody");
    tbody.innerHTML = ""; // Limpar tabela antes de preencher

    times.forEach((time, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${time.nome}</td>
            <td>${time.vitorias}</td>
            <td>${time.empates}</td>
            <td>${time.derrotas}</td>
            <td>${time.pontos}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Chamar a função para exibir a tabela
exibirTabela();