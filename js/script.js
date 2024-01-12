import viewCatalog from "./app/viewCatalog.js";
import viewCategory from "./app/viewCategory.js";
import searchProducts from "./utils/searchProducts.js";
import setCart from "./app/cart/setCart.js";
import { boxBody, btnBurger, btnCart, cartList, inputSearch, menuMobile, orderForm } from "./utils/elements.js";
import viewCart from "./app/cart/viewCart.js";
import sentOrderForm from "./app/sentOrderForm.js";
import viewOrder from "./app/viewOrder.js";
// import viewHotProducts from "./utils/viewHotProducts.js";

// Виводимо категорії на сторінку
viewCategory();

// Вивід товарів на сторінку
viewCatalog();

// Вивід гарячих пропозицій
// viewHotProducts();

// Подія для добавлення в корзину
setCart();

// Вивести при завантаженні додані до корзини товари
viewCart();

// Мобільне меню
btnBurger.onchange = () => menuMobile.classList.toggle('show');

// Викликати пошук при введенні тексту користувачем
if (inputSearch) {
    inputSearch.addEventListener('input', searchProducts);
}

// Показуєм (приховуємо) корзину
btnCart.onclick = () => cartList.classList.toggle('show');

// Відправляємо замовлення на пошту
if (orderForm) {
    orderForm.onsubmit = sentOrderForm;
}

// Якщо це сторінка замовлення, то відразу запускаємо код при завантажені
viewOrder();