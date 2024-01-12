import getEmailTemplate from "../utils/getEmailTemplate.js";
import cart from "./cart/cart.js";
import viewCart from "./cart/viewCart.js";

export default function sentOrderForm(event) {
    event.preventDefault(); // зупиняє стандартну поведінку форми

    // Відбираємо дані з форми
    const data = new FormData(event.target);

    // Формуємо email-лист 
    getEmailTemplate(data).then((message) => {

        // Добавляємо до даних форми необхідні поля
        data.append('to', 'i.s.valchuk@gmail.com');
        data.append('subject', 'Замовлення сайту');
        data.append('message', message);

        // Відправляємо листа на пошту
        fetch('https://api.inderio.com/send-email', {
            method: 'POST', // Метод запиту
            body: data, // Дані для відправлення
        })
            .then(response => response.json())
            .then(result => {
                // Обробка результату від сервера (якщо потрібно)
                console.log(result);

                // Очищуємо корзину
                cart.length = 0;

                // Виводимо товари в html
                viewCart();

                // Показати текст успішої відправки
                document.querySelector('.form-success').classList.remove('hidden');

                // Ховаємо форму
                document.querySelector('.form-empty').classList.add('hidden');
            });

    })
}