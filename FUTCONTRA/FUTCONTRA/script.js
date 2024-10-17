document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const teamName = document.getElementById('team').value;
    const scoreA = parseInt(document.getElementById('scoreA').value);
    const scoreB = parseInt(document.getElementById('scoreB').value);

    // Atualiza a tabela
    updateTable(teamName, scoreA, scoreB);

    // Limpa os campos do formulário
    document.getElementById('form').reset();
});

const standings = {};

function updateTable(teamName, scoreA, scoreB) {
    if (!standings[teamName]) {
        standings[teamName] = { points: 0, games: 0 };
    }

    standings[teamName].games += 1;

    if (scoreA > scoreB) {
        standings[teamName].points += 3; // Vitória
    } else if (scoreA === scoreB) {
        standings[teamName].points += 1; // Empate
    }

    renderTable();
}

function renderTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const sortedTeams = Object.keys(standings).sort((a, b) => standings[b].points - standings[a].points);

    sortedTeams.forEach(team => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${team}</td><td>${standings[team].points}</td><td>${standings[team].games}</td>`;
        tableBody.appendChild(row);
    });
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------






document.getElementById('scheduleForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const teamA = document.getElementById('teamA').value;
    const teamB = document.getElementById('teamB').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;

    const data = { teamA, teamB, date, time, location };

    fetch('/schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
        document.getElementById('scheduleForm').reset();
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('message').innerText = 'Erro ao agendar a partida.';
    });
});