const readline = require('readline');
const {
    adicionarTarefa,
    listarTarefas,
    removerTarefa,
    marcarConcluida
} = require('./tarefas');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log('\n📋 Menu de Tarefas');
    console.log('1. Adicionar Tarefa');
    console.log('2. Listar Tarefas');
    console.log('3. Remover Tarefa');
    console.log('4. Marcar como Concluída');
    console.log('5. Filtrar por Palavra-chave');
    console.log('0. Sair');
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                rl.question('Digite a descrição: ', (desc) => {
                    adicionarTarefa(desc);
                    menu();
                });
                break;
            case '2':
                listarTarefas();
                menu();
                break;
            case '3':
                rl.question('ID da tarefa a remover: ', (id) => {
                    removerTarefa(id);
                    menu();
                });
                break;
            case '4':
                rl.question('ID da tarefa a concluir: ', (id) => {
                    marcarConcluida(id);
                    menu();
                });
                break;
            case '5':
                rl.question('Palavra-chave: ', (chave) => {
                    listarTarefas(chave);
                    menu();
                });
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log('Opção inválida.');
                menu();
        }
    });
}

menu();
