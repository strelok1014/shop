import { boxCatalogProducts } from "./elements.js";

// Функція виводу товарів на сторінку
export function viewRenderProducts(data = [], boxViewProducts = boxCatalogProducts) {

    // Вивід товарів на сторінку
    if (boxViewProducts) {
        if (typeof data == 'string') {

            // Виводимо повідомлення про пустий результат
            boxViewProducts.innerHTML = 'Товарів не знайдено...';

        } else {

            // Чистимо перед виводом
            boxViewProducts.innerHTML = '';

            // Виводимо товари на сторінку
            data.forEach((product) => {

                const { title, img, price, oldPrice, id } = product;

                boxViewProducts.insertAdjacentHTML(
                    'beforeend',
                    `<div class="card-product">
                        <div class="card-product__img-hold">
                            <img src="img/catalog/${img}" alt="" class="card-product__img">
                        </div>
                        <div class="card-product__text-hold">
                            <a href="#" class="card-product__title-link">${title}</a>
                            <span class="card-product__price">${price} грн. <small>${oldPrice} грн.</small></span>
                            <a href="#" class="card-product__btn-add js-cart-add"
                                data-id="${id}"
                                data-title="${title}"
                                data-img="${img}"
                                data-price="${price}"
                                data-count="1">
                                <svg class="icon icon-cart">
                                    <use href="#icon-cart-add"></use>
                                </svg>
                            </a>
                        </div>
                    </div>`
                )
            })
        }
    }
}