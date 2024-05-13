var iconUser = document.getElementById("iconUser");
var foto = document.getElementById("userpic");
let profileImage = JSON.parse(localStorage.getItem('currentUser')).profileImage;
function mudarFoto(){
    if(profileImage){
        foto.src = profileImage;
        foto.style.display = "inline";
        iconUser.style.display = "none";
    }else{
        iconUser.style.display = "inline";
        foto.style.display = "none";
        return;
    }
}
mudarFoto()
function updateTable(type) {
    // Recupera os lançamentos do localStorage
    let data = JSON.parse(localStorage.getItem('lançamentos')) || [];
    // Filtra os dados para incluir apenas os lançamentos do tipo 'Metas'
    let filteredData = data.filter(item => item.tipo === type);

    // Construir o HTML da tabela
    let tableBody = $('#tableBody');
    let html = '';
    filteredData.forEach(item => {
        html += `<tr>`;
        html += `<td class="text-center">${item.descricao}</td>`;
        html += `<td class="text-center">${item.date}</td>`;
        html += `<td>
            <button type="button" class="btn btn-sm template-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="bi bi-eye"></i>
                Visualizar meta
            </button>
        </td>`;
        html += `</tr>`;
    });

    if (!$.fn.DataTable.isDataTable('#table')) {
       
        tableBody.html(html);
        $('#table').DataTable();
    } else {
       
        let table = $('#table').DataTable();
        table.clear().draw();
        table.rows.add($(html)).draw();
    }
}
// Chamar a função para atualizar a tabela ao carregar a página
window.onload = function () {
    updateTable('Metas');
};



function validateMeta() {
    let descricaoMeta = document.getElementById('descricaoMeta').value;
    let dataCriacaoMeta = document.getElementById('dataCriacaoMeta').value;
    let dataRealizacaoMeta = document.getElementById('dataRealizacaoMeta').value;
    let valorInicialMeta = document.getElementById('valorInicialMeta').value;
    let valorAtualMeta = document.getElementById('valorAtualMeta').value;

    let descricaoMetaError = document.getElementById('descricaoMetaError');
    let dataCriacaoMetaError = document.getElementById('dataCriacaoMetaError');
    let dataRealizacaoMetaError = document.getElementById('dataRealizacaoMetaError');
    let valorInicialMetaError = document.getElementById('valorInicialMetaError');
    let valorAtualMetaError = document.getElementById('valorAtualMetaError');

    descricaoMetaError.innerHTML = '';
    dataCriacaoMetaError.innerHTML = '';
    dataRealizacaoMetaError.innerHTML = '';
    valorInicialMetaError.innerHTML = '';
    valorAtualMetaError.innerHTML = '';
    let isValid = true;
    if (descricaoMeta.trim() === '') {
        descricaoMetaError.innerHTML = 'Por favor, digite uma descrição';
        isValid = false;
    }
    if (dataCriacaoMeta.trim() === '') {
        dataCriacaoMetaError.innerHTML = 'Por favor, digite a data de criação';
        isValid = false;
    }
    if (dataRealizacaoMeta.trim() === '') {
        dataRealizacaoMetaError.innerHTML = 'Por favor, digite a data que deseja realizar a meta';
        isValid = false;
    }
    if (valorInicialMeta.trim() === '') {
        valorInicialMetaError.innerHTML = 'Por favor, digite o valor inical';
        isValid = false;
    }
    if (valorAtualMeta.trim() === '') {
        valorAtualMetaError.innerHTML = 'Por favor, digite o valor atual';
        isValid = false;
    }
    if (isValid) {
        window.location.replace('meta.html');
    }
    return isValid;
}
