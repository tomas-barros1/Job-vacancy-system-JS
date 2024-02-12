let vagas = [];
let escolha;
let visualizarVaga;
let indiceVaga = 0;
let inscreverVaga;
let nomeCandidato;

do {
  escolha = prompt("1-Listar vagas \n2-Criar vaga \n3-Visualizar vaga \n4-Inscrever vaga\n5-Excluir vaga\n6-Sair");

  switch (escolha) {
    case "1":
      if (vagas.length !== 0) {
        for (let index = 0; index < vagas.length; index++) {
          const vaga = vagas[index];
          alert(`Vaga ${index}: Nome: ${vaga.nome} Descricao: ${vaga.descricao} Data Limite: ${vaga.dataLimite}`);
        }
      } else {
        alert("Nenhuma vaga cadastrada!");
      }
      break;

    case "2":
      let novaVaga = {};
      novaVaga.nome = prompt("Nome da vaga:");
      novaVaga.descricao = prompt("Descricao:");
      novaVaga.dataLimite = prompt("Data limite:");
      if (confirm(`Confirmar? Nome: ${novaVaga.nome} Descricao: ${novaVaga.descricao} Data limite: ${novaVaga.dataLimite} Indice da vaga ${indiceVaga}`)) {
        vagas.push({ ...novaVaga });
      }
      indiceVaga++;
      break;

    case "3":
      if (vagas.length !== 0) {
        visualizarVaga = prompt("Qual vaga deseja visualizar?");
        if (visualizarVaga >= 0 && visualizarVaga < vagas.length) {
          const vagaSelecionada = vagas[visualizarVaga];
          alert(`Nome: ${vagaSelecionada.nome}\nDescrição: ${vagaSelecionada.descricao}\nData Limite: ${vagaSelecionada.dataLimite}`);
        } else {
          alert("Índice de vaga inválido!");
        }
      } else {
        alert("Nenhuma vaga cadastrada!");
      }
      break;

    case "4":
      if (vagas.length !== 0) {
        inscreverVaga = prompt("Qual indice da vaga que voce deseja se inscrever?");
        if (inscreverVaga >= 0 && inscreverVaga < vagas.length) {
          nomeCandidato = prompt("Digite seu nome:");
          vagas[inscreverVaga].nomeCandidato = nomeCandidato;
        } else {
          alert("Índice de vaga inválido!");
        }
      } else {
        alert("Sem vagas disponíveis!");
      }
      break;

    case "5":
      excluirVaga = prompt("Indice da vaga para ser excluida:");
      if (excluirVaga >= 0 && excluirVaga < vagas.length) {
        vagas.splice(excluirVaga, 1);
      } else {
        alert("Índice de vaga inválido!");
      }
      break;

    case "6":
      break;

    default:
      alert("Escolha invalida!");
  }

} while (escolha !== "6");
