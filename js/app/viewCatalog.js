import getData, { apiUrl } from "../api/getData.js";
import { viewCountProducts } from "../utils/helpers.js";
import { viewRenderProducts } from "../utils/viewRenderProducts.js";

// Вивести товари на сторінку
export default function viewCatalog() {

    // Робимо запит на сервер
    getData(apiUrl.catalog).then(data => {

        // Вивід кількості товарів
        viewCountProducts(data);

        // Вивід товарів на сторінку
        viewRenderProducts(data);
    })
}