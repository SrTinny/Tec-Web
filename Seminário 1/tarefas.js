const fs = require('fs');
const path = require('path');
const { formatarData } = require('./utils');

const caminhoArquivo = path.join(__dirname, 'tarefas.json');

// Carrega as tarefas do arquivo
function carregarTarefas() {
    if (!fs.existsSync(caminhoArquivo)) return [];
    const dados = fs.readFileSync(caminhoArquivo);
    return JSON.parse(dados);
}

// Salva tarefas no arquivo
function salvarTarefas(tarefas) {
    fs.writeFileSync(caminhoArquivo, JSON.stringify(tarefas, null, 2));
}

function adicionarTarefa(descricao) {
    const tarefas = carregarTarefas();
    tarefas.push({
        id: Date.now(),
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
    tarefas = tarefas.filter(t => t.id != id);
    salvarTarefas(tarefas);
    console.log("🗑️ Tarefa removida!");
}

function marcarConcluida(id) {
    const tarefas = carregarTarefas();
    const index = tarefas.findIndex(t => t.id == id);
    if (index !== -1) {
        tarefas[index].concluida = true;
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
