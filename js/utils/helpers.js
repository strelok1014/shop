import cart from "../app/cart/cart.js";
import { boxCountProducts, cartAddedSumm } from "./elements.js";

// Зберігаємо масив в localstorage
export function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Отримуємо масив з localstorage по ключу
export function getStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}

// Вивід кількості товарів
export function viewCountProducts(summ = '') {

    // Виводиом в елемент цифру кількості товарів
    if (boxCountProducts) {
        boxCountProducts.innerHTML = (Array.isArray(summ)) ? summ.length : 0;
    }
}

// Підраховуємо кількість доданих товарів
export function setCartCount() {

    //Перебираємо елементи де потрібно вивести кількість товарів
    cartAddedSumm.forEach(element => {
        if (cart.length == 0) {
            element.classList.remove('show-num');
        } else {
            element.classList.add('show-num');
        }
        element.innerHTML = cart.length;
    });
}