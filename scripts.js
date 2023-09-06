// Simulação de dados dos alunos
var alunosData = [
  { nome: "João Silva", pontos: 1500, nivel: "Intermediário" },
  { nome: "Maria Oliveira", pontos: 1200, nivel: "Intermediário" },
  { nome: "Pedro Alves", pontos: 900, nivel: "Iniciante" },
  { nome: "Ana Pereira", pontos: 2000, nivel: "Avançado" },
  { nome: "Lucas Costa", pontos: 1850, nivel: "Avançado" },
  { nome: "Luiza Lima", pontos: 1000, nivel: "Iniciante" },
  { nome: "Gustavo Santos", pontos: 1650, nivel: "Intermediário" },
  { nome: "Fernanda Teixeira", pontos: 1400, nivel: "Intermediário" },
  { nome: "Rafael Barros", pontos: 2100, nivel: "Avançado" },
  { nome: "Isabela Soares", pontos: 950, nivel: "Iniciante" },
  { nome: "Gabriel Rocha", pontos: 1900, nivel: "Avançado" },
  { nome: "Juliana Freitas", pontos: 1350, nivel: "Intermediário" },
  { nome: "Marcelo Menezes", pontos: 800, nivel: "Iniciante" },
  { nome: "Bruna Cardoso", pontos: 1550, nivel: "Intermediário" },
];

// Função para atualizar a tabela
function atualizarTabela() {
  var tabelaBody = document.querySelector(".rankings tbody");
  tabelaBody.innerHTML = ""; // Limpar a tabela

  // Ordenar alunos por pontos (do maior para o menor)
  alunosData.sort((a, b) => b.pontos - a.pontos);

  // Adicionar cada aluno à tabela
  alunosData.forEach((aluno, index) => {
    var tr = document.createElement("tr");

    // Coluna da posição (ranking)
    var tdPosicao = document.createElement("td");
    tdPosicao.innerText = index + 1; // Posição começa em 1, não 0
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
