import { boxCartAddedList, boxCatalogProducts } from "../../utils/elements.js";
import addCart from "./addCart.js";
import { setCountProduct } from "./cartSetCount.js";
import delProductCart from "./delProductCart.js";


export default function setCart() {

    // Добавлення товару в корзину
    if (boxCatalogProducts) {
        boxCatalogProducts.onclick = (event) => {

            // Забороняємо стандартний функціонал html
            event.preventDefault();

            // Отримуємо елемент по якому був клік
            let el = event.target;

            // Якщо це svg піднімаємося на рівень вище по батьківському елементу
            if (el.nodeName == 'svg' || el.nodeName == 'use') {

                // Беремо батькіський елементи
                el = (el.nodeName == 'use') ? el.parentNode.parentNode : el.parentNode;
            }

            // Перевіряємо чи це кнопка добавлення в корзину
            if (el.classList.contains('js-cart-add')) {

                // Добавляємо товар в корзину
                addCart(el);
            }

        };
    }


    // Події в корзині
    boxCartAddedList.onclick = (event) => {

        // Забороняємо стандартний функціонал html
        event.preventDefault();

        // Отримуємо елемент по якому був клік
        let el = event.target;

        // Якщо це svg піднімаємося на рівень вище по батьківському елементу
        if (el.nodeName == 'svg' || el.nodeName == 'use') {

            // Беремо батькіський елементи
            el = (el.nodeName == 'use') ? el.parentNode.parentNode : el.parentNode;
        }

        // Перевіряємо чи це кнопка видалення з корзини
        if (el.classList.contains('js-cart-del')) {
            delProductCart(el);
        }

        // Перехоплюємо кнопку плюс мінус кількості товару
        if (el.classList.contains('js-product-count')) {
            setCountProduct(el);
        }

    };
}