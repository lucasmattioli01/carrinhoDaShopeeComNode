// Quais ações o carrinho de compras pode fazer? 

/* (Casos de uso)

- Adicionar um item
- Remover um item 
- Excluir item
- Calcular o total da compra

*/

// Adicionar um item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// Exibir o valor do total de todos os itens do carrinho
async function showTotalAmount(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0); // Total (Valor geral), valor atual (item.subtotal()), valor inicial (0)
}

async function displayCart(userCart) {
    console.log("\n** Lista de itens do carrinho da Shopee: **")
    console.log("\n");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} | ${item.price} | x${item.quantity} \nSubtotal: ${item.subtotal()} 
        `);
    });
}

// Remover uma quantidade de um item do carrinho (qtd - 1)
async function removeItemQuantity(userCart, item) {
    const itemIndex = userCart.findIndex((i) => i.name === item.name);

    if (itemIndex === -1) { // findIndex retorna -1 se não encontra nenhum índice com a condição definida nos parâmetros dela
        console.log("Item não encontrado ao tentar remover...");
        return;
    }

    // Se achou um item
    if (item.quantity > 1) item.quantity -= 1;
    else await deleteItem(userCart, item.name);
}


// Deletar o item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name); // findIndex retorna -1 se não encontra nenhum índice com a condição definida no parâmetro

    if (index !== -1) {
        userCart.splice(index, 1); // Deleta o índice, e especifica que só queremos remover 1 item
    }
}


export {
    addItem,
    showTotalAmount,
    removeItemQuantity,
    deleteItem,
    displayCart,
}