var iconUser = document.getElementById("iconUser");
var foto = document.getElementById("userpic");

// Verificar se 'currentUser' existe no localStorage e se não é null
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let profileImage = currentUser ? currentUser.profileImage : null;

function mudarFoto() {
    if (profileImage) {
        foto.src = profileImage;
        foto.style.display = "inline";
        iconUser.style.display = "none";
    } else {
        iconUser.style.display = "inline";
        foto.style.display = "none";
    }
}

mudarFoto();

document.addEventListener("DOMContentLoaded", function () {
    // Chamar a função para atualizar a tabela ao carregar a página
    updateTable();

    document.getElementById("selectLancamento").addEventListener("change", function () {
        updateTable();
    });

    document.getElementById("selectPeriodo").addEventListener("change", function () {
        updateTable();
    });

    // Adicionar ouvintes de evento aos botões de edição
    document.addEventListener("click", function(event) {
        if (event.target.matches(".edit-button, .edit-button *")) {
            let button = event.target.closest(".edit-button");
            let index = button.getAttribute("data-index");
            let data = JSON.parse(localStorage.getItem("lançamentos")) || [];
            let item = data[index];
            document.getElementById("modal-descricao").value = item.descricao;
            document.getElementById("modal-valor").value = item.valor;
            document.getElementById("modal-date").value = item.date;
            document.getElementById("modal-categoria").value = item.categoria; // Assumindo que você tem uma categoria
            document.getElementById("modal-descricao").setAttribute("data-index", index);
        }
    });

    document.getElementById("template-btn").addEventListener("click", function() {
        saveEdit();
    });

    document.getElementById("confirmDeleteButton").addEventListener("click", function() {
        deleteItem();
    });
});


function updateTable() {
    // Obter o tipo selecionado
    let tipoSelecionado = document.getElementById("selectLancamento").value;
    // Obter o período selecionado
    let periodoSelecionado = document.getElementById("selectPeriodo").value;

    // Obter todos os dados da localStorage
    let data = JSON.parse(localStorage.getItem("lançamentos")) || [];

    // Filtrar os dados com base no tipo selecionado
    let filteredData;
    if (tipoSelecionado === "1") {
        filteredData = data.filter((item) => item.tipo === "Despesas");
    } else if (tipoSelecionado === "2") {
        filteredData = data.filter((item) => item.tipo === "Receitas");
    } else {
        filteredData = data;
    }

    // Filtrar os dados com base no período selecionado
    let currentDate = new Date(); // Data atual
    let selectedDate = new Date(); // Data selecionada pelo usuário
    if (periodoSelecionado === "1") {
        selectedDate.setDate(currentDate.getDate() - 15); // Últimos 15 dias
    } else if (periodoSelecionado === "2") {
        selectedDate.setDate(currentDate.getDate() - 30); // Últimos 30 dias
    } else if (periodoSelecionado === "3") {
        selectedDate.setDate(currentDate.getDate() - 60); // Últimos 60 dias
    } else if (periodoSelecionado === "4") {
        selectedDate.setDate(currentDate.getDate() - 90); // Últimos 90 dias
    }

    // Construir a tabela com os dados filtrados
    let tableBody = document.getElementById("tableBody");
    // let html = "";
    // filteredData.forEach((item, index) => {
    //     let itemDate = new Date(item.date);
    //     html += `<tr>`;
    //     if (item.tipo === "Receitas") {
    //         html += `<td class="text-center text-success">${item.descricao}</td>`;
    //         html += `<td class="text-center text-success">${item.valor}</td>`;
    //         html += `<td class="text-center text-success">${item.date}</td>`;
    //         html += `<td class="text-center text-success">
    //                 <button type="button" class="btn btn-sm template-btn edit-button" data-bs-toggle="modal" data-bs-target="#modalHistorico" data-index="${index}">
    //                     <i class="bi bi-pencil-square"></i>
    //                 </button>
    //             </td>`;
    //     } else if (item.tipo === "Despesas") {
    //         html += `<td class="text-center text-danger">${item.descricao}</td>`;
    //         html += `<td class="text-center text-danger">${item.valor}</td>`;
    //         html += `<td class="text-center text-danger">${item.date}</td>`;
    //         html += `<td class="text-center text-danger">
    //                 <button type="button" class="btn btn-sm template-btn edit-button" data-bs-toggle="modal" data-bs-target="#modalHistorico" data-index="${index}">
    //                     <i class="bi bi-pencil-square"></i>
    //                 </button>
    //             </td>`;
    //     }
    //     html += `</tr>`;
    // });
    let html = "";
    filteredData.forEach((item, index) => {
        let itemDate = new Date(item.date);
        html += `<tr>`;
        if (item.tipo === "Receitas") {
            html += `<td class="text-center text-success">${item.descricao}</td>`;
            html += `<td class="text-center text-success">${item.valor}</td>`;
            html += `<td class="text-center text-success">${item.date}</td>`;
            html += `<td class="text-center text-success">
                    <button type="button" class="btn btn-sm template-btn edit-button" data-bs-toggle="modal" data-bs-target="#modalHistorico" data-index="${index}">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                </td>`;
        } else if (item.tipo === "Despesas") {
            html += `<td class="text-center text-danger">${item.descricao}</td>`;
            html += `<td class="text-center text-danger">${item.valor}</td>`;
            html += `<td class="text-center text-danger">${item.date}</td>`;
            html += `<td class="text-center text-danger">
                    <button type="button" class="btn btn-sm template-btn edit-button" data-bs-toggle="modal" data-bs-target="#modalHistorico" data-index="${index}">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                </td>`;
        }
        html += `</tr>`;
    });

    // Atualizar o conteúdo da tabela na página
    tableBody.innerHTML = html;
}

function saveEdit() {
    let index = document.getElementById("modal-descricao").getAttribute("data-index");
    let data = JSON.parse(localStorage.getItem("lançamentos")) || [];
    data[index].descricao = document.getElementById("modal-descricao").value;
    data[index].valor = document.getElementById("modal-valor").value;
    data[index].date = document.getElementById("modal-date").value;
    data[index].categoria = document.getElementById("modal-categoria").value;
    localStorage.setItem("lançamentos", JSON.stringify(data));
    updateTable();
    let modal = bootstrap.Modal.getInstance(document.getElementById('modalHistorico'));
    modal.hide();
}

function deleteItem() {
    let index = document.getElementById("modal-descricao").getAttribute("data-index");
    let data = JSON.parse(localStorage.getItem("lançamentos")) || [];
    data.splice(index, 1);
    localStorage.setItem("lançamentos", JSON.stringify(data));
    updateTable();
    let deleteModal = bootstrap.Modal.getInstance(document.getElementById('confirmDeleteModal'));
    deleteModal.hide();
    let editModal = bootstrap.Modal.getInstance(document.getElementById('modalHistorico'));
    editModal.hide();
}

