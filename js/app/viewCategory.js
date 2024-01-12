import getData, { apiUrl } from "../api/getData.js";
import evenCategory from "../utils/boxCategoryList.js";
import { boxCategoryList } from "../utils/elements.js";

// Вивід категорій на сторінку
export default function viewCategory() {
    if (boxCategoryList) {

        // Отримуємо масив категорій
        getData(apiUrl.category).then(data => {

            // Перебираємо масив для виводу
            data.forEach(({ id, title }) => {

                // Виводимо категорії в html
                boxCategoryList.insertAdjacentHTML(
                    'beforeend',
                    `<a href="${id}" class="dropdown-item js-cat">${title}</a>`);
            });
        })

        // Робимо вивід по категоріям
        evenCategory();
    }
}
