let productsDiv = document.getElementsByClassName('products')[0];


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    let productBlock = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerText = `${product.title} ${product.price} UAN`;

    let img = document.createElement('img');
    img.src = product.image;

    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'add to cart';

    buttonElement.onclick = function () {
        // if(!localStorage.getItem('cart')) {
        //     localStorage.setItem('cart', JSON.stringify([]));
        // } але краще зробити так -->
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    productBlock.append(h2, img, buttonElement);
    productsDiv.appendChild(productBlock);
}




