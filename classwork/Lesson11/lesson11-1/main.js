// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => {
//         for (const user of users) {
//             let p = document.createElement('p');
//             p.innerText = `${user.name} ${user.username} ${user.email} `;
//             document.body.appendChild(p);
//         }
//         });

fetch("https://dummyjson.com/products?limit=100")
    .then(value => value.json())
    .then(({products}) => {
        console.log(products);
        let div = document.createElement("div");
        for(const product of products) {
            let h2 = document.createElement("h2");
            h2.innerText = `${product.id}_${product.title}`;

            let p = document.createElement("p");
            p.innerText = product.price;

            let img = document.createElement("img");
            img.src = product.thumbnail;

            div.append(h2, p, img);
        }

            document.body.appendChild(div);
    });

fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'BMW Pencil'
    })
})
    .then(res => res.json())
    .then(console.log);
