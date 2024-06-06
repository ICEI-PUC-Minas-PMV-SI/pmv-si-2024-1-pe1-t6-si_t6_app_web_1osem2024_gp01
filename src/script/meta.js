var iconUser = document.getElementById("iconUser");
var foto = document.getElementById("userpic");
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

function updateTable(type) {
  // Recupera os lançamentos do localStorage
  let data = JSON.parse(localStorage.getItem("lançamentos")) || [];
  // Filtra os dados para incluir apenas os lançamentos do tipo 'Metas'
  let filteredData = data.filter((item) => item.tipo === type);
  let tableBody = document.getElementById("tableBody");
  if (!tableBody) {
    console.error("Elemento tableBody não encontrado");
    return;
  }
  // Construir o HTML da tabela
  let html = "";
  filteredData.forEach((item, index) => {
    html += `<tr>`;
    html += `<td class="text-center">${item.descricao}</td>`;
    html += `<td class="text-center">${item.date}</td>`;
    html += `<td>
            <button type="button" class="btn btn-sm template-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="fillModal(${index})">
                <i class="bi bi-eye"></i>
                Visualizar meta
            </button>
        </td>`;
    html += `</tr>`;
  });

  tableBody.innerHTML = html;
}
updateTable("Metas");
let currentIndex = -1;

function fillModal(index) {
    currentIndex = index;
    let data = JSON.parse(localStorage.getItem("lançamentos")) || [];
    let filteredData = data.filter((item) => item.tipo === "Metas");
    let item = filteredData[index];

    document.getElementById("descricaoMeta").value = item.descricao || '';
    document.getElementById("categoriaEdit").value = item.categoria || '';
    document.getElementById("dataCriacaoMeta").value = item.date || '';
    document.getElementById("valorInicialMeta").value = item.valor || '';
    document.getElementById("dataRealizacaoMeta").value = item.dataRealizacao || '';
    document.getElementById("valorAtualMeta").value = item.valorAtual || '';
    let categoriaSelect = document.getElementById("categoriaEdit");
    categoriaSelect.value = item.categoria || '0';
}

function validateMeta() {
  let descricaoMeta = document.getElementById("descricaoMeta").value;
  let dataCriacaoMeta = document.getElementById("dataCriacaoMeta").value;
  let dataRealizacaoMeta = document.getElementById("dataRealizacaoMeta").value;
  let valorInicialMeta = document.getElementById("valorInicialMeta").value;
  let valorAtualMeta = document.getElementById("valorAtualMeta").value;

  let descricaoMetaError = document.getElementById("descricaoMetaError");
  let dataCriacaoMetaError = document.getElementById("dataCriacaoMetaError");
  let dataRealizacaoMetaError = document.getElementById(
    "dataRealizacaoMetaError"
  );
  let valorInicialMetaError = document.getElementById("valorInicialMetaError");
  let valorAtualMetaError = document.getElementById("valorAtualMetaError");

  descricaoMetaError.innerHTML = "";
  dataCriacaoMetaError.innerHTML = "";
  dataRealizacaoMetaError.innerHTML = "";
  valorInicialMetaError.innerHTML = "";
  valorAtualMetaError.innerHTML = "";
  let isValid = true;
  if (descricaoMeta.trim() === "") {
    descricaoMetaError.innerHTML = "Por favor, digite uma descrição";
    isValid = false;
  }
  if (dataCriacaoMeta.trim() === "") {
    dataCriacaoMetaError.innerHTML = "Por favor, digite a data de criação";
    isValid = false;
  }
  if (dataRealizacaoMeta.trim() === "") {
    dataRealizacaoMetaError.innerHTML =
      "Por favor, digite a data que deseja realizar a meta";
    isValid = false;
  }
  if (valorInicialMeta.trim() === "") {
    valorInicialMetaError.innerHTML = "Por favor, digite o valor inical";
    isValid = false;
  }
  if (valorAtualMeta.trim() === "") {
    valorAtualMetaError.innerHTML = "Por favor, digite o valor atual";
    isValid = false;
  }
  if (isValid) {
    window.location.replace("meta.html");
  }
  return isValid;
}

function salvarMeta() {
  if (!validateMeta()) return;

  let data = JSON.parse(localStorage.getItem("lançamentos")) || [];
  let filteredData = data.filter((item) => item.tipo === "Metas");

  let item = filteredData[currentIndex];
  item.descricao = document.getElementById("descricaoMeta").value;
  item.categoria = document.getElementById("categoriaEdit").value;
  item.date = document.getElementById("dataCriacaoMeta").value;
  item.valor = document.getElementById("valorInicialMeta").value;
  item.dataRealizacao = document.getElementById("dataRealizacaoMeta").value;
  item.valorAtual = document.getElementById("valorAtualMeta").value;

  // Update the original data array with the updated item
  data = data.map(d => (d.tipo === "Metas" && d.descricao === item.descricao ? item : d));
  localStorage.setItem("lançamentos", JSON.stringify(data));
  updateTable("Metas");
  document.getElementById("exampleModal").querySelector(".btn-close").click();
}

function confirmarExclusao(index) {
  currentIndex = index;
  var confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'), {
      keyboard: false
  });
  confirmModal.show();
}

document.getElementById('confirmDeleteButton').addEventListener('click', function() {
  excluirMeta();
  var confirmModal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
  confirmModal.hide();
});

function excluirMeta() {
  let data = JSON.parse(localStorage.getItem("lançamentos")) || [];
  let filteredData = data.filter((item) => item.tipo === "Metas");

  filteredData.splice(currentIndex, 1);
  data = data.filter(item => item.tipo !== "Metas").concat(filteredData);
  localStorage.setItem("lançamentos", JSON.stringify(data));
  updateTable("Metas");
  document.getElementById("exampleModal").querySelector(".btn-close").click();
}

document.querySelector(".btn-success").addEventListener("click", salvarMeta);
