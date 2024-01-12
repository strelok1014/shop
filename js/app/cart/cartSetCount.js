import { setStorage } from "../../utils/helpers.js";
import cart, { isProductInCart } from "./cart.js";

// export function setCountPlus(el) {

//     // Отримуємо id з елементу 
//     const id = el.dataset.id;

//     // Шукаємо товар в масиві
//     const foundProduct = isProductInCart(id);

//     // Добавлення товару за вказаним індексом
//     cart[foundProduct].count++;

//     // Запам'ятовуємо масив корзини
//     setStorage('cart', cart);

//     // Отримаємо input з кількістю відносно товару
//     const productInputCount = document.getElementById('input-count-' + id);

//     // Змінюємо значення в input який відповідає за кількість
//     productInputCount.value = cart[foundProduct].count;
// }

// export function setCountMinus(el) {

//     // Отримуємо id з елементу 
//     const id = el.dataset.id;

//     // Шукаємо товар в масиві
//     const foundProduct = isProductInCart(id);

//     // Добавлення товару за вказаним індексом
//     if (cart[foundProduct].count > 1) {
//         cart[foundProduct].count--;
//     }

//     // Запам'ятовуємо масив корзини
//     setStorage('cart', cart);

//     // Отримаємо input з кількістю відносно товару
//     const productInputCount = document.getElementById('input-count-' + id);

//     // Змінюємо значення в input який відповідає за кількість
//     productInputCount.value = cart[foundProduct].count;

// }

// Задачаємо кількість товару
export function setCountProduct(el) {

    // Отримуємо id з елементу 
    const id = el.dataset.id;

    // Відбираємо тип кнопки
    const action = el.dataset.action;

    // Шукаємо товар в масиві
    const foundProduct = isProductInCart(id);

    // Визначаємо дію - збільшення чи зменшення кількості
    if (action === 'plus') {
        cart[foundProduct].count++;
    } else if (action === 'minus' && cart[foundProduct].count > 1) {
        cart[foundProduct].count--;
    }

    // Запам'ятовуємо масив корзини
    setStorage('cart', cart);

    // Отримаємо input з кількістю відносно товару
    const productInputCount = document.getElementById('input-count-' + id);

    // Змінюємо значення в input який відповідає за кількість
    productInputCount.value = cart[foundProduct].count;

}
