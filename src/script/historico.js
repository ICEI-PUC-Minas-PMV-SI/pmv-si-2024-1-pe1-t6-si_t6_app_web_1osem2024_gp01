document.addEventListener("DOMContentLoaded", function () {
    updateTable();

    document.getElementById("selectLancamento").addEventListener("change", updateTable);
    document.getElementById("selectPeriodo").addEventListener("change", updateTable);
});

var iconUser = document.getElementById("iconUser");
var foto = document.getElementById("userpic");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
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

function updateTable() {
    let tipoSelecionado = document.getElementById("selectLancamento").value;
    let periodoSelecionado = document.getElementById("selectPeriodo").value;
    let data = JSON.parse(localStorage.getItem("lançamentos")) || [];

    let filteredData = data.filter((item) => {
        if (item.tipo === "button") {
            return false;
        }
        if (tipoSelecionado === "1") {
            return item.tipo === "Despesas";
        } else if (tipoSelecionado === "2") {
            return item.tipo === "Receitas";
        } else {
            return item.tipo === "Receitas" || item.tipo === "Despesas";
        }
    });

    let currentDate = new Date();
    let selectedDate = new Date();
    if (periodoSelecionado === "1") {
        selectedDate.setDate(currentDate.getDate() - 15);
    } else if (periodoSelecionado === "2") {
        selectedDate.setDate(currentDate.getDate() - 30);
    } else if (periodoSelecionado === "3") {
        selectedDate.setDate(currentDate.getDate() - 60);
    } else if (periodoSelecionado === "4") {
        selectedDate.setDate(currentDate.getDate() - 90);
    } else {
        selectedDate = new Date(0);
    }

    let tableBody = document.getElementById("tableBody");
    let html = "";
    filteredData.forEach((item, index) => {
        let itemDate = new Date(item.date);
        if (itemDate >= selectedDate) {
            html += '<tr>';
            html += `<td class="text-center ${item.tipo === "Receitas" ? "text-success" : "text-danger"}">${item.descricao}</td>`;
            html += `<td class="text-center ${item.tipo === "Receitas" ? "text-success" : "text-danger"}">${item.valor}</td>`;
            html += `<td class="text-center ${item.tipo === "Receitas" ? "text-success" : "text-danger"}">${item.date}</td>`;
            html += `<td class="text-center ${item.tipo === "Receitas" ? "text-success" : "text-danger"}">
                        <button type="button" class="btn btn-sm template-btn edit-btn" data-bs-toggle="modal" data-bs-target="#modalHistorico" data-id="${data.indexOf(
                            item
                        )}">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                    </td>`;
            html += '</tr>';
        }
    });
    tableBody.innerHTML = html;

    document.querySelectorAll('[data-bs-target="#modalHistorico"]').forEach((button) => {
        button.addEventListener("click", function () {
            let recordId = this.getAttribute("data-id");
            populateModal(recordId);
        });
    });

    document.querySelectorAll('.edit-btn').forEach((button) => {
        button.removeEventListener("click", showEditModal);
        button.addEventListener("click", showEditModal);
    });
}

function showEditModal() {
    let recordId = this.getAttribute("data-id");
    populateModal(recordId);
}
function populateModal(recordId) {
    let data = JSON.parse(localStorage.getItem("lançamentos")) || [];
    let record = data[recordId];

    if (record) {
        document.getElementById("modal-descricao").value = record.descricao;
        document.getElementById("modal-categoria").value = record.categoria;
        document.getElementById("modal-valor").value = record.valor;
        document.getElementById("modal-date").value = record.date;
    }

    document.getElementById("template-btn").onclick = function () {
        salvarEdicao(recordId);
    };

    document.getElementById("excluir_btn").onclick = function () {
        confirmarExclusao(recordId);
    };
}


function confirmarExclusao(recordId) {
    let confirmDeleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    let confirmDeleteButton = document.getElementById("confirmDeleteButton");

    confirmDeleteButton.removeEventListener("click", handleDeleteConfirmation);
    function handleDeleteConfirmation() {
        excluirLancamento(recordId);
        confirmDeleteModal.hide();
        removeModalBackdrop();
    }
    confirmDeleteButton.addEventListener("click", handleDeleteConfirmation);

    confirmDeleteModal.show();

    let cancelDeleteButton = document.getElementById("cancelDeleteButton");
    cancelDeleteButton.removeEventListener("click", hideConfirmDeleteModal);
    function hideConfirmDeleteModal() {
        confirmDeleteModal.hide();
        removeModalBackdrop();
    }
    cancelDeleteButton.addEventListener("click", hideConfirmDeleteModal);
}

function excluirLancamento(recordId) {
    let data = JSON.parse(localStorage.getItem("lançamentos")) || [];
    data.splice(recordId, 1);
    localStorage.setItem("lançamentos", JSON.stringify(data));
    updateTable();
    removeModalBackdrop();
}

function salvarEdicao(recordId) {
    let data = JSON.parse(localStorage.getItem("lançamentos")) || [];

    let descricao = document.getElementById("modal-descricao").value;
    let categoria = document.getElementById("modal-categoria").value;
    let valor = document.getElementById("modal-valor").value;
    let date = document.getElementById("modal-date").value;

    if (recordId !== null && data[recordId]) {
        data[recordId].descricao = descricao;
        data[recordId].categoria = categoria;
        data[recordId].valor = valor;
        data[recordId].date = date;

        localStorage.setItem("lançamentos", JSON.stringify(data));
        updateTable();

        let modal = bootstrap.Modal.getInstance(document.getElementById('modalHistorico'));
        modal.hide();
        removeModalBackdrop();
    }
}

function removeModalBackdrop() {
    let backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach((backdrop) => {
        backdrop.parentNode.removeChild(backdrop);
    });
}
