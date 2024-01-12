import { getStorage } from "../../utils/helpers.js";

// Масив добавлених товарів в корзину
let cart = getStorage('cart');

// Функція для перевірки наявності товару в корзині за його ідентифікатором
export function isProductInCart(productId) {

    // Шукаємо ключ товару в масиві
    const key = cart.findIndex(cartProduct => cartProduct.id == productId);

    // Якщо твоару не знайдено (-1) то повератємо false в іншому випадку повертаємо цифру ключа
    return (key === -1) ? false : key;
}

export default cart;