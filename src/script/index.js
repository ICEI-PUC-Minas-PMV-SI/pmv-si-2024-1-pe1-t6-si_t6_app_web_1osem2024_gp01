$(document).ready(function () {
  $("#table").DataTable({
    language: {
      sEmptyTable: "Nenhum dado disponível na tabela",
      sInfo: "Mostrando de _START_ até _END_ de _TOTAL_ entradas",
      sInfoEmpty: "Mostrando 0 até 0 de 0 entradas",
      sInfoFiltered: "(filtrado de _MAX_ entradas totais)",
      sInfoPostFix: "",
      sInfoThousands: ".",
      sLengthMenu: "_MENU_ resultados por página",
      sLoadingRecords: "Carregando...",
      sProcessing: "Processando...",
      sSearch: "Buscar:",
      sZeroRecords: "Nenhum registro encontrado",
      oPaginate: {
        sFirst: "Primeiro",
        sLast: "Último",
        sNext: "Próximo",
        sPrevious: "Anterior",
      },
      oAria: {
        sSortAscending: ": Ordenar colunas de forma ascendente",
        sSortDescending: ": Ordenar colunas de forma descendente",
      },
      select: {
        rows: {
          _: "%d linhas selecionadas",
          0: "Nenhuma linha selecionada",
          1: "1 linha selecionada",
        },
      },
    },
  });
});
