// Importando funções dos módulos
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("\nBem vindo ao carrinho de compras da Shopee!");


const item1 = await createItem("Teclado logitech", 579.99, 3);
const item2 = await createItem("Mouse Corsair", 329.99, 2);
const item3 = await createItem("Headset Mchoose", 279.99, 5);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myWishList, item3);

// console.log(item2.subtotal());

await cartService.removeItemQuantity(myCart, item1);
// await cartService.removeItemQuantity(myCart, item3); // Item não encontrado, pois ele não está no myCart

// await cartService.removeItemQuantity(myCart, 1); 
// await cartService.removeItemQuantity(myCart, 1); // Aqui o teclado já não existe mais
// await cartService.removeItemQuantity(myCart, 1); // Agora, o próximo item vai começar a ser removido (O mouse)


await cartService.displayCart(myCart);

// await cartService.deleteItem(myWishList, item3.name);
// await cartService.deleteItem(myCart, item1.name);

const totalCart = await cartService.showTotalAmount(myCart);
const totalWishList = await cartService.showTotalAmount(myWishList);

console.log(`Valor TOTAL do carrinho de compras: ${totalCart}`);
console.log(`Valor TOTAL da lista de desejos: ${totalWishList}`);
console.log("\n");