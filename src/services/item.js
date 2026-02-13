// Casos que o item pode possuir:

// - Ao adicionar um item ou remover, calcular o subtotal corretamente

async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        // subtotal: () => price * quantity, // Aqui, price e quantity são variáveis dos parâmetros da createItem.
        subtotal() {
            return this.price * this.quantity; // usa os valores atuais do próprio objeto
        }
    };
}

export default createItem