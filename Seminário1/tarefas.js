const fs = require('fs'); //manipula arquivos
const path = require('path'); //lida com caminhos de arquivos
const { formatarData } = require('./utils'); // Importa a função de formatação de formatarData

const caminhoArquivo = path.join(__dirname, 'tarefas.json'); // Define o caminho do arquivo json

// Carrega as tarefas do arquivo
function carregarTarefas() {
    if (!fs.existsSync(caminhoArquivo)) return []; // Verifica se o arquivo existe
    const dados = fs.readFileSync(caminhoArquivo); // Lê o arquivo
    return JSON.parse(dados); // Converte os dados para um objeto JavaScript
}

// Salva tarefas no arquivo
function salvarTarefas(tarefas) {
    fs.writeFileSync(caminhoArquivo, JSON.stringify(tarefas, null, 2));
}

function adicionarTarefa(descricao) {
    const tarefas = carregarTarefas();
    tarefas.push({
        id: Date.now(), //  Gera um ID único baseado no timestamp
        descricao,
        concluida: false,
        criadaEm: formatarData(new Date())
    });
    salvarTarefas(tarefas);
    console.log("✅ Tarefa adicionada!");
}

function listarTarefas(filtro = '') {
    const tarefas = carregarTarefas();
    const filtradas = filtro
        ? tarefas.filter(t => t.descricao.toLowerCase().includes(filtro.toLowerCase()))
        : tarefas;

    filtradas.forEach((t, i) => {
        console.log(`${i + 1}. [${t.concluida ? '✔' : ' '}] ${t.descricao} (${t.criadaEm})`);
    });
}

function removerTarefa(id) {
    let tarefas = carregarTarefas();
    tarefas = tarefas.filter(t => t.id != id); // Filtra as tarefas, removendo a com o ID fornecido
    salvarTarefas(tarefas);
    console.log("🗑️ Tarefa removida!");
}

function marcarConcluida(id) {
    const tarefas = carregarTarefas();
    const index = tarefas.findIndex(t => t.id == id);
    if (index !== -1) {
        tarefas[index].concluida = true; // Marca a tarefa como concluída
        tarefas[index].concluidaEm = formatarData(new Date()); // Adiciona a data de conclusão 
        salvarTarefas(tarefas);
        console.log("✅ Tarefa marcada como concluída!");
    } else {
        console.log("⚠️ Tarefa não encontrada.");
    }
}

module.exports = {
    adicionarTarefa,
    listarTarefas,
    removerTarefa,
    marcarConcluida
};
