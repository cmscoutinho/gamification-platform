function determinarNivel(nota) {
  if (nota <= 1000) {
    return "Novato";
  } else if (nota > 1000 && nota <= 1800) {
    return "Mestre";
  } else {
    return "Lorde";
  }
}

function atualizarNiveisDosAlunos(alunos) {
  for (let aluno of alunos) {
    aluno.nivel = determinarNivel(aluno.pontos);
  }
}

// Simulação de dados dos alunos
var alunosData = [
  { nome: "João Silva", pontos: 1500 },
  { nome: "Maria Oliveira", pontos: 1200 },
  { nome: "Pedro Alves", pontos: 900 },
  { nome: "Ana Pereira", pontos: 2000 },
  { nome: "Lucas Costa", pontos: 1850 },
  { nome: "Luiza Lima", pontos: 1000 },
  { nome: "Gustavo Santos", pontos: 1650 },
  { nome: "Fernanda Teixeira", pontos: 1400 },
  { nome: "Rafael Barros", pontos: 2100 },
  { nome: "Isabela Soares", pontos: 950 },
  { nome: "Gabriel Rocha", pontos: 1900 },
  { nome: "Juliana Freitas", pontos: 1350 },
  { nome: "Marcelo Menezes", pontos: 800 },
  { nome: "Bruna Cardoso", pontos: 1550 },
];

atualizarNiveisDosAlunos(alunosData);

// Supondo que você tenha um array 'alunosData' como mencionado anteriormente

// Função para atualizar a tabela
function atualizarTabela() {
  var tabelaBody = document.querySelector(".rankings tbody");
  tabelaBody.innerHTML = ""; // Limpar a tabela

  // Ordenar alunos por pontos (do maior para o menor)
  alunosData.sort((a, b) => b.pontos - a.pontos);

  // Adicionar cada aluno à tabela
  alunosData.forEach((aluno, index) => {
    var tr = document.createElement("tr");

    // Adicionar classes com base no status
    if (aluno.nivel === "Lorde") {
      tr.className = "avancado";
    } else if (aluno.nivel === "Mestre") {
      tr.className = "intermediario";
    } else if (aluno.nivel === "Novato") {
      tr.className = "iniciante";
    }

    // Coluna da posição (ranking)
    var tdPosicao = document.createElement("td");
    tdPosicao.innerText = index + 1; // Posição começa em 1, não 0
    tdPosicao.className = "posicao-coluna";
    tr.appendChild(tdPosicao);

    // Coluna do nome
    var tdNome = document.createElement("td");
    tdNome.innerText = aluno.nome;
    tr.appendChild(tdNome);

    // Coluna dos pontos
    var tdPontos = document.createElement("td");
    tdPontos.innerText = aluno.pontos;
    tr.appendChild(tdPontos);

    // Coluna do nível
    var tdNivel = document.createElement("td");
    tdNivel.innerText = aluno.nivel;
    tr.appendChild(tdNivel);

    tabelaBody.appendChild(tr);
  });
}

// Chama a função quando a página é carregada
window.onload = atualizarTabela;
