const productList = document.querySelector('#productsList');

async function getProducts() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        console.log(data);

        data.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('productCard');

            const cardTitle = document.createElement('h4');
            cardTitle.textContent = product.title;

            const separator = document.createElement('hr'); // Добавляем разделительную линию

            const cardImage = document.createElement('img');
            cardImage.src = product.images[0];
            cardImage.classList.add('cardImage');

            productCard.append(cardTitle);
            productCard.append(separator); // Вставляем линию после названия
            productCard.append(cardImage);

            product.images.forEach(el => {
                console.log(el);
                const newImage = document.createElement('img');
                newImage.src = el;
                productCard.append(newImage);
            });

            productList.append(productCard);
        });
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
}

getProducts();
