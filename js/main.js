function addItem() {
    const input = document.getElementById('newItem');
    const itemText = input.value.trim();
    if (itemText === '') return;

    const itemList = document.getElementById('itemList');

    // Create list item
    const li = document.createElement('li');
    li.classList.add('tarefas')
    li.textContent = itemText;

    // Create edit button
    const editButton = botaoEditar();

    // Create delete button
    const deleteButton = botaoExcluir();

    // Add buttons to list item
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Add list item to list
    itemList.appendChild(li);

    // Clear input
    input.value = '';
}


function botaoExcluir() {
    const botao = document.createElement('button');
    botao.classList.add('botao-excluir');
    botao.textContent = 'Excluir';
    botao.onclick = () => deleteItem(); // ao clicar chama função excluir
    return botao;
}

function botaoEditar() {
    const botao = document.createElement('button');
    botao.classList.add('botao-editar');
    botao.textContent = 'Editar';
    botao.onclick = () => editItem(li); // ao clicar chama função editar
    return botao;
}

function deleteItem() {
    
}

function editItem(item) {

}
