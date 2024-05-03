// Função de adicionar item (Principal)
function addItem() {
    const body = document.body;
    const input = document.getElementById('newItem');
    const itemText = input.value.trim();
    if (itemText === '') {
        return (
            input.classList.remove('input'),
            input.classList.add('input-incorreto')
        );
    }
    // Retornando o estilo do input normal
    if (input.className === 'input-incorreto') {
        input.classList.remove('input-incorreto');
        input.classList.add('input');
    }
    const itemList = document.getElementById('itemList');

    // Create list item
    const li = document.createElement('li');
    // Se for adicionado no modo escuro 
    if (body.className === 'dark-mode') {
        li.classList.add('tarefas-dark-mode');
        li.textContent = itemText;
    } else {
        li.classList.add('tarefas');
        li.textContent = itemText;
    }
    // Create div to button
    const divButton = document.createElement('div');
    divButton.classList.add('div-button');
    

    // Create conclusion button
    const conclusionButton = botaoConcluido(li);
    conclusionButton.onclick = () => conclusionItem(li);

    // Create delete button
    const deleteButton = botaoExcluir(li);
    deleteButton.onclick = () => deleteItem(li);

    // Add buttons to list item
    li.appendChild(divButton);
    divButton.appendChild(conclusionButton);
    divButton.appendChild(deleteButton);

    // Add list item to list
    itemList.appendChild(li);

    // Clear input
    input.value = '';
}

// Função para criar botão de excluir
function botaoExcluir(item) {
    const botao = document.createElement('button');
    botao.classList.add('botao-excluir');
    botao.textContent = 'Excluir';
    botao.onclick = () => deleteItem(item); // Pass item to delete
    return botao;
}

// Função para criar botão de concluido
function botaoConcluido(item) {
    const botao = document.createElement('button');
    botao.classList.add('botao-concluido');
    botao.textContent = 'Concluido';
    botao.onclick = () => conclusionItem(item); // Pass item to conclusion
    return botao;
}

// Função para excluir item
function deleteItem(item) {
    if (confirm('Tem certeza que deseja excluir este item?')) {
        item.parentNode.removeChild(item);
    }
}

// Função para quando o item for concluido
function conclusionItem(item) {
    if (item.style.opacity !== '0.5') {
            return (
                item.style.opacity = '0.5',
                item.style.background = 'lightgreen'
            );
    }
    if (item.style.opacity === '0.5') {
        if (confirm('Deseja Desconcluir este item?')) {
            return (  
                item.style.opacity = '1',
                item.style.background = 'white'
            );   
        }
    }
}

// Função add item ao clicar no enter
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}

// Função para alternar entre os modos escuro e claro
function darkMode() {
    const body = document.body;
    const themeSwitch = document.querySelector('.theme-switch__checkbox');
    const tarefas = document.querySelectorAll('.tarefas');
    const tarefasDark = document.querySelectorAll('.tarefas-dark-mode');

    // Verifica se o switch está marcado (modo escuro ativado)
    if (themeSwitch.checked) {
        // Aplica classe ao body para ativar modo escuro
        body.classList.add('dark-mode');

        // Para cada elemento com a classe 'tarefas', aplica classe de modo escuro
        tarefas.forEach(tarefa => {
            tarefa.classList.remove('tarefas');
            tarefa.classList.add('tarefas-dark-mode');
        });
    } else {
        // Remove classe do body para desativar modo escuro
        body.style.transition = '0.250';
        body.classList.remove('dark-mode');
        // Para cada elemento com a classe 'tarefas', remove classe de modo escuro
        tarefas.forEach(tarefa => {
            tarefa.classList.remove('tarefas-dark-mode');
            tarefa.classList.add('tarefas');
        });
        tarefasDark.forEach(tarefa => {
            tarefa.classList.remove('tarefas-dark-mode');
            tarefa.classList.add('tarefas');
        });
    }
}
