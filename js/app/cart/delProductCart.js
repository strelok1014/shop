import cart, { isProductInCart } from "./cart.js";
import viewCart from "./viewCart.js";

// Функція видалення товару з корзини
export default function delProductCart(el) {

    // Отримуємо id з елементу 
    const id = el.dataset.id;

    // Шукаємо товар в масиві
    const foundProduct = isProductInCart(id);

    // Видалення товару за вказаним індексом
    cart.splice(foundProduct, 1);

    // Виводимо товари в html
    viewCart();

}