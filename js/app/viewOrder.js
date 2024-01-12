import { boxBody } from "../utils/elements.js";
import cart from "./cart/cart.js";

export default function viewOrder() {

    // Перевіряємо чи це розділ оформлення замовлення
    if (boxBody.classList.contains('page-order')) {

        // Отримуємо елементи сторінки
        const form = document.querySelector('#order-form');
        const textEmpty = document.querySelector('.form-empty');

        // Якщо корзина пуста, ховаємо форму і показуємо текст
        if (cart.length === 0) {

            // Показуємо форму замовлення
            form.classList.add('hidden');

            // Показуємо текст пустої корзини
            textEmpty.classList.remove('hidden');

        } else {

            // Показуємо форму замовлення
            form.classList.remove('hidden');

            // Показуємо текст пустої корзини
            textEmpty.classList.add('hidden');

        }
    }

}