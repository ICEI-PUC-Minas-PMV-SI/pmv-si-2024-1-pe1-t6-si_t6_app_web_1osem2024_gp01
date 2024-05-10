document.getElementById("download-btn").addEventListener("click", function () {
  var relatorioContent = document.getElementById("relatorio").innerText;

  var blob = new Blob([relatorioContent], { type: "text/plain" });

  var url = URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "relatorio.txt";
  a.click();

  // limpando o URL do objeto após o download
  URL.revokeObjectURL(url);
});

function validateAndSaveModal(type) {
  // validação dos campos do modal
  let descricao = document.getElementById("descricao").value;
  let valorString = document.getElementById("valor").value;
  // Substituir vírgula por ponto
  let valor = parseFloat(valorString.replace(",", "."));
  let date = document.getElementById("date").value;
  let categoria = document.getElementById("categoria").value;
  let descricaoError = document.getElementById("descricaoError");
  let valorError = document.getElementById("valorError");
  let dataError = document.getElementById("dataError");
  let categoriaError = document.getElementById("categoriaError");
  descricaoError.innerHTML = "";
  valorError.innerHTML = "";
  dataError.innerHTML = "";
  categoriaError.innerHTML = "";
  let isValid = true;
  if (descricao.trim() === "") {
    descricaoError.innerHTML = "Por favor, digite uma descrição";
    isValid = false;
  }
  if (isNaN(valor) || valorString.trim() === "") {
    valorError.innerHTML = "Por favor, digite um valor numérico";
    isValid = false;
  }
  if (date.trim() === "") {
    dataError.innerHTML = "Por favor, digite uma data";
    isValid = false;
  }
  if (categoria.trim() === "") {
    categoriaError.innerHTML = "Por favor, selecione uma categoria";
    isValid = false;
  }
  // se todos os campos forem válidos, salva os dados e fecha o modal
  if (isValid) {
    // recuperar dados antigos ou inicializar array vazio
    let existingData = JSON.parse(localStorage.getItem("lançamentos")) || [];
    // salvamento dos dados
    const newData = {
      descricao: descricao,
      valor: valor,
      date: date,
      categoria: categoria,
      tipo: type,
    };
    existingData.push(newData);
    // salvar dados atualizados
    localStorage.setItem("lançamentos", JSON.stringify(existingData));
    // atualizar tabela na outra página
    updateTable(type);
    // Atualizar saldo
    saldo();
    receita();
    // Atualizar despesas
    despesa();
    // Atualizar metas
    meta();
    console.log(existingData);
    $("#adicionarLançamento").modal("hide");
  }
  $("#adicionarLançamento").on("hidden.bs.modal", function () {
    // Limpar os campos do modal
    $("#descricao").val("");
    $("#valor").val("");
    $("#date").val("");
    $("#categoria").val("");
    validateAndSaveModal(modalType);
  });
  $("#adicionarLançamento").on("show.bs.modal", function () {
    $("#descricaoError").html("");
    $("#valorError").html("");
    $("#dataError").html("");
    $("#categoriaError").html("");
  });
}

function updateTable(type) {}

let modalType;

function saveModal(type) {
  modalType = type;
  var modalTitle = document.getElementById("modalTitle");
  var casoMeta = document.getElementById("casoMeta");

  if (type === "Receitas") {
    modalTitle.innerHTML = "Adicionar Receita";
    casoMeta.innerHTML = "Valor R$";
    if (valorInput.parentNode.classList.contains("col-md-6")) {
      valorInput.parentNode.classList.remove("col-md-6");
    }
    dataInput.parentNode.style.display = "none";
    categoriaError.textContent = "";
  } else if (type === "Despesas") {
    modalTitle.innerHTML = "Adicionar Despesa";
    casoMeta.innerHTML = "Valor R$";
    if (valorInput.parentNode.classList.contains("col-md-6")) {
      valorInput.parentNode.classList.remove("col-md-6");
    }
    dataInput.parentNode.style.display = "none";
    categoriaError.textContent = "";
  } else if (type === "Metas") {
    modalTitle.innerHTML = "Adicionar Meta";
    casoMeta.innerHTML = "Valor a reservar R$";
    if (!valorInput.parentNode.classList.contains("col-md-6")) {
      valorInput.parentNode.classList.add("col-md-6");
    }
    dataInput.parentNode.style.display = "block";
    categoriaDiv.classList.add("col-md-6");
    categoriaError.textContent = "";
  }
}

$("#adicionarLançamento").on("hidden.bs.modal", function () {
  validateAndSaveModal(modalType);
});

//card de saldo
function saldo() {
  let lancamentos = JSON.parse(localStorage.getItem("lançamentos")) || [];
  let totalReceitas = 0;
  let totalDespesas = 0;
  let totalMetas = 0;

  lancamentos.forEach(function (lancamento) {
    if (lancamento.tipo === "Receitas") {
      totalReceitas += parseFloat(lancamento.valor);
    } else if (lancamento.tipo === "Despesas") {
      totalDespesas += parseFloat(lancamento.valor);
    } else if (lancamento.tipo === "Metas") {
      totalMetas += parseFloat(lancamento.valor);
    }
  });
  // calcular saldo
  let saldo = totalReceitas - totalDespesas - totalMetas;

  let saldoFormatado = saldo.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  // Atualizar o elemento HTML que exibe o saldo
  document.getElementById("saldo").innerHTML = saldoFormatado;
}
window.addEventListener("load", function () {
  saldo();
});

function receita() {
  let lancamentos = JSON.parse(localStorage.getItem("lançamentos")) || [];
  let totalReceitas = 0;

  lancamentos.forEach(function (lancamento) {
    if (lancamento.tipo === "Receitas") {
      totalReceitas += parseFloat(lancamento.valor);
    }
  });

  let receitaFormatada = totalReceitas.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  document.getElementById("totalReceitas").innerHTML = receitaFormatada;

  return totalReceitas;
}

window.addEventListener("load", function () {
  receita();
});

//card de despesa
function despesa() {
  let lancamentos = JSON.parse(localStorage.getItem("lançamentos")) || [];
  let totalDespesas = 0;

  lancamentos.forEach(function (lancamento) {
    if (lancamento.tipo === "Despesas") {
      totalDespesas += parseFloat(lancamento.valor);
    }
  });

  let despesaFormatada = totalDespesas.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  document.getElementById("totalDespesas").innerHTML = despesaFormatada;

  return totalDespesas;
}
window.addEventListener("load", function () {
  despesa();
  return totalDespesa;
});

//card de meta
function meta() {
  let lancamentos = JSON.parse(localStorage.getItem("lançamentos")) || [];
  let totalMetas = 0;

  lancamentos.forEach(function (lancamento) {
    if (lancamento.tipo === "Metas") {
      totalMetas += parseFloat(lancamento.valor);
    }
  });

  let metaFormatada = totalMetas.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  document.getElementById("totalMetas").innerHTML = metaFormatada;

  return totalMetas;
}
window.addEventListener("load", function () {
  meta();
});

//script do relatorio
document.querySelectorAll(".lancamento").forEach(function (button) {
  button.addEventListener("click", function () {
    if (document.getElementById("periodoRelatorio").value === "") {
      document.getElementById("periodoMensagem").classList.remove("hide");
    } else {
      document.getElementById("periodoMensagem").classList.add("hide");
    }
    limparEstiloBotoes();
    exibirDadosCardBody();
  });
});
function limparEstiloBotoes() {
  document.getElementById("lancamento1").classList.remove("text-primary");
}
function exibirDadosCardBody() {
  let periodoRelatorio = document.getElementById("periodoRelatorio").value;
  if (periodoRelatorio !== "") {
    document.getElementById("relatorio").classList.remove("hide");
    document.getElementById("relatorio_limpo").classList.add("hide");
  } else {
    document.getElementById("relatorio").classList.add("hide");
    document.getElementById("relatorio_limpo").classList.remove("hide");
  }
}

function escolhaLancamento(lancamento) {
  document.getElementById("lancamentoEscolhido").innerHTML =
    "Resumo Financeiro: " + lancamento;
}
function relatorio() {
  let receitaMovimentacao = receita();
  let despesaMovimentacao = despesa();
  let metaMovimentacao = meta();

  // Chamada para exibir o estado inicial
  exibirDadosCardBody();
  // Select de periodo
  let periodoRelatorio = document.getElementById("periodoRelatorio").value;
  let relatorioTitle = document.getElementById("relatorioTitle");
  let avisoPeriodo = document.getElementById("avisoPeriodo");
  let relatorioPeriodo = document.getElementById("relatorioPeriodo");
  let diaRelatorio = document.getElementById("diaRelatorio");
  let saldoInicialElemential = document.getElementById("saldoInicial");
  let saldoAtual = document.getElementById("saldoAtual");
  document.getElementById("receitaRelatorio").classList.remove("text-primary");
  document.getElementById("despesaRelatorio").classList.remove("text-primary");
  document.getElementById("metaRelatorio").classList.remove("text-primary");
  let positivoNegativo = document.getElementById("positivoNegativo");
  let semNao = document.getElementById("semNao");
  let frasePositivo = document.getElementById("frasePositivo");
  let conclusaoPositiva = document.getElementById("conclusaoPositiva");

  // calcular o saldo
  let saldo = calcularSaldoAtual(periodoRelatorio);

  let saldoFormatado;
  let saldoTexto;
  if (saldo >= 0) {
    saldoFormatado = saldo.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    saldoTexto = "positivo";
    semNao.innerHTML = "";
    frasePositivo.innerHTML =
      "Continue desta forma, em busca de um custo de vida positivo.";
    conclusaoPositiva.innerHTML =
      "Mantenha uma gestão financeira responsável e sempre explore oportunidades.";
  } else {
    saldoFormatado = (-saldo).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    saldoTexto = "negativo";
  }
  document.getElementById("positivoNegativo").innerText = saldoTexto;

  // Formatando data
  function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    //adicionando 0 em data com um digito
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    return `${day}/${month}/${year}`;
  }

  // calcula a data atual e a de periodo
  function calculateDateBefore(days) {
    let today = new Date();
    let pastDate = new Date(today);
    pastDate.setDate(today.getDate() - days);
    return pastDate;
  }

  switch (parseInt(periodoRelatorio)) {
    case 1:
      relatorioTitle.innerHTML = "Relatório Financeiro: Últimos 7 dias";
      var dataInicio = formatDate(calculateDateBefore(7));
      var dataFim = formatDate(new Date());
      relatorioPeriodo.innerHTML = `Período: ${dataInicio} - ${dataFim}`;
      diaRelatorio.innerHTML = "7";
      saldoInicial.innerHTML = calcularSaldoInicial(7);
      saldoAtual.innerHTML = calcularSaldoAtual(7).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      receitaRelatorio.innerHTML = receitaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      despesaRelatorio.innerHTML = despesaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      metaRelatorio.innerHTML = metaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      break;
    case 2:
      relatorioTitle.innerHTML = "Relatório Financeiro: Últimos 15 dias";
      var dataInicio = formatDate(calculateDateBefore(15));
      var dataFim = formatDate(new Date());
      relatorioPeriodo.innerHTML = `Período: ${dataInicio} - ${dataFim}`;
      diaRelatorio.innerHTML = "15";
      saldoInicial.innerHTML = calcularSaldoInicial(15);
      saldoAtual.innerHTML = calcularSaldoAtual(15).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      receitaRelatorio.innerHTML = receitaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      despesaRelatorio.innerHTML = despesaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      metaRelatorio.innerHTML = metaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      break;
    case 3:
      relatorioTitle.innerHTML = "Relatório Financeiro: Últimos 30 dias";
      var dataInicio = formatDate(calculateDateBefore(30));
      var dataFim = formatDate(new Date());
      relatorioPeriodo.innerHTML = `Período: ${dataInicio} - ${dataFim}`;
      diaRelatorio.innerHTML = "30";
      saldoInicial.innerHTML = calcularSaldoInicial(30);
      saldoAtual.innerHTML = calcularSaldoAtual(30).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      receitaRelatorio.innerHTML = receitaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      despesaRelatorio.innerHTML = despesaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      metaRelatorio.innerHTML = metaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      break;
    case 4:
      relatorioTitle.innerHTML = "Relatório Financeiro: Últimos 60 dias";
      var dataInicio = formatDate(calculateDateBefore(60));
      var dataFim = formatDate(new Date());
      relatorioPeriodo.innerHTML = `Período: ${dataInicio} - ${dataFim}`;
      diaRelatorio.innerHTML = "60";
      saldoInicial.innerHTML = calcularSaldoInicial(60);
      saldoAtual.innerHTML = calcularSaldoAtual(60).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      receitaRelatorio.innerHTML = receitaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      despesaRelatorio.innerHTML = despesaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      metaRelatorio.innerHTML = metaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      break;
    case 5:
      relatorioTitle.innerHTML = "Relatório Financeiro: Últimos 90 dias";
      var dataInicio = formatDate(calculateDateBefore(90));
      var dataFim = formatDate(new Date());
      relatorioPeriodo.innerHTML = `Período: ${dataInicio} - ${dataFim}`;
      diaRelatorio.innerHTML = "90";
      saldoInicial.innerHTML = calcularSaldoInicial(90).toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      );
      saldoAtual.innerHTML = calcularSaldoAtual(90).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      receitaRelatorio.innerHTML = receitaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      despesaRelatorio.innerHTML = despesaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      metaRelatorio.innerHTML = metaMovimentacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      break;
    default:
  }
  function calcularSaldoInicial() {
    let lancamentos = JSON.parse(localStorage.getItem("lançamentos")) || [];
    let saldoInicial = 0;

    // Verifica se há lançamentos
    if (lancamentos.length > 0) {
      // Ordena os lançamentos por data
      lancamentos.sort((a, b) => new Date(a.data) - new Date(b.data));

      // Encontra o primeiro registro de receitas
      const primeiroReceita = lancamentos.find(
        (lancamento) => lancamento.tipo === "Receitas"
      );
      const valorReceita = primeiroReceita
        ? parseFloat(primeiroReceita.valor)
        : 0;

      // Encontra o primeiro registro de despesas
      const primeiroDespesa = lancamentos.find(
        (lancamento) => lancamento.tipo === "Despesas"
      );
      const valorDespesa = primeiroDespesa
        ? parseFloat(primeiroDespesa.valor)
        : 0;

      // Encontra o primeiro registro de metas
      const primeiroMeta = lancamentos.find(
        (lancamento) => lancamento.tipo === "Metas"
      );
      const valorMeta = primeiroMeta ? parseFloat(primeiroMeta.valor) : 0;

      // Calcula o saldo inicial
      saldoInicial = valorReceita - valorDespesa - valorMeta;
    }

    return saldoInicial.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function calcularSaldoAtual(days) {
    let lancamentos = JSON.parse(localStorage.getItem("lançamentos")) || [];
    let totalReceitas = 0;
    let totalDespesas = 0;
    let totalMetas = 0;

    lancamentos.forEach(function (lancamento) {
      if (lancamento.tipo === "Receitas") {
        totalReceitas += parseFloat(lancamento.valor);
      } else if (lancamento.tipo === "Despesas") {
        totalDespesas += parseFloat(lancamento.valor);
      } else if (lancamento.tipo === "Metas") {
        totalMetas += parseFloat(lancamento.valor);
      }
    });

    let saldo = totalReceitas - totalDespesas - totalMetas;
    return saldo;
  }
}
saldoInicialElemential = calcularSaldoInicial(periodoRelatorio);
saldoInicialElement.innerHTML = saldoInicial;
