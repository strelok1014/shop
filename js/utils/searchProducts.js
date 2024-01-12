import getData, { apiUrl } from "../api/getData.js";
import { inputSearch } from "./elements.js";
import { viewCountProducts } from "./helpers.js";
import { viewRenderProducts } from "./viewRenderProducts.js";

// Запамятовуємо setTimeout
let searchProductTimeId = 0;

// Додаємо функцію для виклику пошуку
export default function searchProducts() {

    // Видаляємо попередній setTimeout
    clearTimeout(searchProductTimeId);

    // Формуємо id поточного setTimeout
    searchProductTimeId = setTimeout(() => {

        // Присвоюємо пошукову фразу
        const searchTerm = inputSearch.value.trim();

        // Робимо запит на сервер з ключовим словом для пошуку
        getData(apiUrl.catalog + `?search=${searchTerm}`).then(data => {

            // Вивід кількості знайдених товарів
            viewCountProducts(data);

            // Вивід знайдених товарів на сторінку
            viewRenderProducts(data);
        });
    }, 1800);
}