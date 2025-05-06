# 📝 Gerenciador de Tarefas via Terminal com Node.js

Este projeto é uma aplicação simples de **terminal**, desenvolvida em **Node.js**, que permite ao usuário cadastrar, listar, remover, filtrar e concluir tarefas, armazenando tudo em um arquivo local.

---

## ✅ O que essa aplicação faz?

Com esta aplicação, você pode:

- Adicionar tarefas com descrição e data/hora de criação 🕓
- Listar todas as tarefas salvas 📋
- Remover tarefas por ID 🗑️
- Marcar tarefas como concluídas ✔️
- Filtrar tarefas por palavra-chave 🔍

---

## 🧠 Como o código funciona

O projeto é dividido em partes principais:

### 📂 Arquivo `app.js`

- É o **ponto de entrada da aplicação**.
- Usa o módulo `readline` do Node.js para mostrar um **menu interativo** no terminal.
- Lê a escolha do usuário (ex: adicionar tarefa) e **chama funções específicas** do módulo `tarefas.js`.

### 📂 Arquivo `tarefas.js`

Contém as **funções principais**:

- `carregarTarefas()` → Lê o arquivo `tarefas.json` e transforma em uma lista.
- `salvarTarefas(tarefas)` → Grava a lista atualizada no arquivo.
- `adicionarTarefa(descricao)` → Cria nova tarefa e salva no JSON.
- `listarTarefas(filtro)` → Lista todas ou filtra por palavra.
- `removerTarefa(id)` → Exclui uma tarefa com base no seu ID.
- `marcarConcluida(id)` → Atualiza o status de uma tarefa como concluída.

Cada tarefa é um **objeto JavaScript** com os seguintes campos:

```json
{
  "id": 1234567890,
  "descricao": "Estudar Node.js",
  "concluida": false,
  "criadaEm": "29/04/2025 20:45:12"
}
```
