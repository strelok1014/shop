import cart from "../app/cart/cart.js";

function replaceTemplate(text, variables) {
    // Використовуємо регулярні вирази для пошуку та заміни шаблонних змінних
    // У цьому випадку, ми використовуємо фігурні дужки для обгортання імен змінних
    return text.replace(/\{([^}]+)\}/g, (match, variable) => {
        // Перевірка, чи існує змінна у переданих данних
        return variables.hasOwnProperty(variable) ? variables[variable] : match;
    });
}


function setEmailCartLi() {

    // Формуємо html який будемо повертати
    let cartLi = '';

    // Перебираємо корзину товарів
    cart.forEach(product => {
        cartLi += `<li>${product.title} ( кількість: ${product.count} )</li>`
    });

    // Портаємо значення
    return cartLi;
}


export default async function getEmailTemplate(data) {

    // Використовуйте fetch для отримання HTML-коду з файлу
    const response = await fetch('email/emailTemplate.html');

    // Отримання текстового вмісту (HTML) з відповіді
    const htmlContent = await response.text();

    // Дані які використовуютьсяв email шаблоні, тому що в даному випадку в нас є дані
    const emailData = {
        name: data.get('name'),
        numCartAdded: cart.length,
        phone: data.get('phone'),
        cartOrder: setEmailCartLi()
    };

    // Заміняти шаблонний текст на наші змінні
    return replaceTemplate(htmlContent, emailData);

}
