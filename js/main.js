// Função de adicionar item (Principal)
function addItem() {
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
    li.classList.add('tarefas')
    li.textContent = itemText;

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
        if (confirm('Tem certeza que concluiu?')) {
            return (
                item.style.opacity = '0.5',
                item.style.background = 'lightgreen'
            );
        }
    }
    return alert('Este item já foi concluido');
    
}

// Função add item ao clicar no enter
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}

