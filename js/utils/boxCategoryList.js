import getData, { apiUrl } from "../api/getData.js";
import { boxCategoryList } from "./elements.js";
import { viewCountProducts } from "./helpers.js";
import { viewRenderProducts } from "./viewRenderProducts.js";


// Запам'ятовуємо вибрану категорію
let categoryRemember = 0;

// Подія для виводу товарів по категорії
export default function evenCategory() {

    // Слідкуємо за кліком по категорії
    boxCategoryList.onclick = (e) => {

        // Забороняємо стандартний функціонал html
        e.preventDefault();

        // Видбираємо id категорії
        const id = e.target.getAttribute('href');

        // Дивимося чи це не вже отримана категорія
        if (categoryRemember !== id) {

            // Запам'ятовуємо id останньої категорії
            categoryRemember = id;

            // Формуємо посилання до сервера
            const setUrl = (id == null || id == 'reset') ? apiUrl.catalog : apiUrl.catalogByCategory + id;

            // Робимо запит на сервер
            getData(setUrl).then(data => {

                // Вивід кількості товарів
                viewCountProducts(data);

                // Вивід товарів на сторінку
                viewRenderProducts(data);
            })
        }

    };
}