# 🛒 Carrinho da Shopee (Node.js)

Projeto em **Node.js** que simula, via **terminal**, a lógica de um carrinho de compras inspirado na Shopee: adicionar itens, remover quantidade/itens e calcular subtotal/total. O código é **modularizado** para facilitar manutenção e evolução.

---

## ✅ Funcionalidades

- Adicionar itens ao carrinho
- Remover **1 unidade** de um item
  - Se a quantidade chegar a **1** e você remover mais 1, o item é **excluído do carrinho**
- Remover um item do carrinho (deletar)
- Exibir os itens do carrinho
- Calcular e exibir:
  - **Subtotal** por item (`valor unitário × quantidade`)
  - **Total** do carrinho (soma dos subtotais)

---

## 📦 Estrutura de Dados

O carrinho é uma **lista de itens** (array).  
Cada item possui:

- `name` → nome do produto  
- `price` → valor unitário  
- `quantity` → quantidade  
- `subtotal()` → retorna `price * quantity`
