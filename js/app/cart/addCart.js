import cart, { isProductInCart } from "./cart.js";
import viewCart from "./viewCart.js";


// Добавлення товару в корзину
export default function addCart(btnAdd) {

    // Збираємо дані про товар
    const product = btnAdd.dataset;

    // Шукаємо товар в корзині
    const productReverseKey = isProductInCart(product.id);

    // Добавляємо товар в корзину
    if (productReverseKey === false) {
        cart.push(product);
    } else {
        cart[productReverseKey].count++;
    }

    // Виводимо товари в html
    viewCart();
}