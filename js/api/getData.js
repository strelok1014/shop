// Посилання звертання до сервера
export const apiUrl = {
    category: 'https://65787d93f08799dc80456d41.mockapi.io/category',
    catalog: 'https://65787d93f08799dc80456d41.mockapi.io/catalog',
    catalogByCategory: 'https://65787d93f08799dc80456d41.mockapi.io/catalog?catId=',
    hotOffer: 'https://65787d93f08799dc80456d41.mockapi.io/catalog?hotOffer=yes',
}

// Наш варіант звернення до сервера, щоб отримати дані
export default function getData(url = '') {
    return fetch(url).then((res) => res.json());
}