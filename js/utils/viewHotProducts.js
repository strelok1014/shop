import getData, { apiUrl } from "../api/getData.js";
import { boxHotProducts } from "./elements.js";
import { viewRenderProducts } from "./viewRenderProducts.js";

// Вивести гарячі пропозиції
export default function viewHotProducts() {

    // Робимо запит на сервер
    getData(apiUrl.hotOffer).then(data => {

        // Виводимо гарячі пропозиції
        viewRenderProducts(data, boxHotProducts);
    })
}