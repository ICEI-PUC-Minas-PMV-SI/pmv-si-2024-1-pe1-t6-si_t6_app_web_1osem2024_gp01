
document.addEventListener("DOMContentLoaded", function () {
    // Chamar a função para atualizar a tabela ao carregar a página
    updateTable();

    document.getElementById('selectLancamento').addEventListener('change', function () {
        updateTable(); 
    });

    // Adicionar um ouvinte de evento para o select de período
    document.getElementById('selectPeriodo').addEventListener('change', function () {
        updateTable();
    });
});

function updateTable() {
    // Obter o tipo selecionado
    let tipoSelecionado = document.getElementById('selectLancamento').value;
    // Obter o período selecionado
    let periodoSelecionado = document.getElementById('selectPeriodo').value;

    // Obter todos os dados da localStorage
    let data = JSON.parse(localStorage.getItem('lançamentos')) || [];

    // Filtrar os dados com base no tipo selecionado
    let filteredData;
    if (tipoSelecionado === '1') {
        filteredData = data.filter(item => item.tipo === 'Despesas');
    } else if (tipoSelecionado === '2') {
        filteredData = data.filter(item => item.tipo === 'Receitas');
    } else {
        filteredData = data;
    }

    // Filtrar os dados com base no período selecionado
    let currentDate = new Date(); // Data atual
    let selectedDate = new Date(); // Data selecionada pelo usuário
    if (periodoSelecionado === '1') {
        selectedDate.setDate(currentDate.getDate() - 15); // Últimos 15 dias
    } else if (periodoSelecionado === '2') {
        selectedDate.setDate(currentDate.getDate() - 30); // Últimos 30 dias
    } else if (periodoSelecionado === '3') {
        selectedDate.setDate(currentDate.getDate() - 60); // Últimos 60 dias
    } else if (periodoSelecionado === '4') {
        selectedDate.setDate(currentDate.getDate() - 90); // Últimos 90 dias
    }

    // Construir a tabela com os dados filtrados
    let tableBody = document.getElementById('tableBody');
    let html = '';
    filteredData.forEach(item => {
        let itemDate = new Date(item.date);
        if (item.tipo === 'Receitas') {
            html += `<td class="text-center text-success">${item.descricao}</td>`;
            html += `<td class="text-center text-success">${item.valor}</td>`;
            html += `<td class="text-center text-success">${item.date}</td>`;
            html += `<td class="text-center text-success">
                <button type="button" class="btn btn-sm template-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="bi bi-pencil-square"></i>
                </button>
            </td>`;
        } else if (item.tipo === 'Despesas') {
            html += `<td class="text-center text-danger">${item.descricao}</td>`;
            html += `<td class="text-center text-danger">${item.valor}</td>`;
            html += `<td class="text-center text-danger">${item.date}</td>`;
            html += `<td class="text-center text-danger">
                <button type="button" class="btn btn-sm template-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="bi bi-pencil-square"></i>
                </button>
            </td>`;
        }
        html += `</tr>`;
    });
    // Atualizar o conteúdo da tabela na página
    tableBody.innerHTML = html;
}

