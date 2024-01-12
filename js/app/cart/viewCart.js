import { boxCartAddedList } from "../../utils/elements.js";
import { setCartCount, setStorage } from "../../utils/helpers.js";
import viewOrder from "../viewOrder.js";
import cart from "./cart.js";

// Виводимо товари в корзину
export default function viewCart() {

    // Запам'ятовуємо масив корзини
    setStorage('cart', cart);

    // Викликаємо функцію підрахунку товарів
    setCartCount();

    // Показуємло або ховаємо форму
    viewOrder();

    // Перевіряєємо масив на пустоту
    if (cart.length === 0) {

        // Очищуємо перед виводом
        boxCartAddedList.innerHTML = 'Корзина пуста!';

        // Через 2 секунди ховаємо це повідомлення
        setTimeout(function () {

            // Після тайм-ауту сховати весь блочок корзини
            boxCartAddedList.classList.remove('show');

        }, 2000);

    } else {

        // Очищуємо перед виводом
        boxCartAddedList.innerHTML = '';

        // Перебираємо масив для виводу
        cart.forEach(({ id, title, img, price, count }) => {

            // Виводимо категорії в html
            boxCartAddedList.insertAdjacentHTML(
                'beforeend',
                `<div class="cart-added-list__item">
                    <button class="cart-added-list__item-btn-delete btn-light js-cart-del" data-id="${id}">
                        <svg class="icon icon-close"><use href="#icon-close"></use></svg>
                    </button>
                    <img src="img/catalog/${img}" alt="" class="cart-added-list__item-img">
                    <p class="cart-added-list__item-text-hold">
                        <a href="#" class="cart-added-list__item-title-link">${title}</a>
                        <span class="cart-added-list__item-meta-list">
                            <span class="cart-added-list__item-meta">Ціна: ${price} грн</span>
                        </span>
                    </p>
                    <input type="text" class="cart-added-list__item-count" placeholder="0" value="${count}" id="input-count-${id}">
                    <button class="cart-added-list__item-btn-plus btn-light js-product-count" data-id="${id}" data-action="plus"></button>
                    <button class="cart-added-list__item-btn-minus btn-light js-product-count" data-id="${id}" data-action="minus"></button>
                </div>`);
        });
    }

}