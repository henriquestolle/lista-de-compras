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

    // Create edit button
    const editButton = botaoEditar(li);
    editButton.onclick = () => editItem(li.textContent);

    // Create delete button
    const deleteButton = botaoExcluir(li);
    deleteButton.onclick = () => deleteItem(li);

    // Add buttons to list item
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Add list item to list
    itemList.appendChild(li);

    // Clear input
    input.value = '';
}

function botaoExcluir(item) {
    const botao = document.createElement('button');
    botao.classList.add('botao-excluir');
    botao.textContent = 'Excluir';
    botao.onclick = () => deleteItem(item); // Pass item to delete
    return botao;
}

function botaoEditar(item) {
    const botao = document.createElement('button');
    botao.classList.add('botao-editar');
    botao.textContent = 'Editar';
    botao.onclick = () => editItem(item); // Pass item to edit
    return botao;
}

function deleteItem(item) {
    if (confirm('Tem certeza que deseja excluir este item?')) {
        item.parentNode.removeChild(item);
    }
}

function editItem(item) {
    let newText = prompt('Editar Item', item.textContent);
    
    // Handle cancel or empty input
    if (newText === null || newText.trim() === '') {
        return; // Do nothing if canceled or input is empty
    }
    
    newText = newText.trim();

    // Validate input
    if (newText.length > 50) {
        alert('O texto não pode ter mais de 50 caracteres.');
        return; // Exit if input is too long
    }

    // Update item text
    const textNode = document.createTextNode(newText);
    const currentTextNode = item.firstChild; // Get the existing text node
    item.replaceChild(textNode, currentTextNode);

    // Restore edit and delete buttons
    const editButton = document.createElement('button');
    editButton.classList.add('botao-editar');
    editButton.textContent = 'Editar';
    editButton.onclick = () => editItem(item);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('botao-excluir');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = () => deleteItem(item);

    item.appendChild(editButton);
    item.appendChild(deleteButton);
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}

