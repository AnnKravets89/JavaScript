fetch('https://dummyjson.com/carts?limit=50')
    .then(res => res.json())
    .then(cartsObjects => {
        console.log(cartsObjects);
        let {carts} = cartsObjects;

        for(const cart of carts){
            let divCart = document.createElement('div');
            divCart.classList.add('cart-container');

            let h2Cart = document.createElement('h2');
            h2Cart.classList.add('cart-title');
            h2Cart.innerText = `Shopping Cart User ${cart.userId}`;

            let divSummary = document.createElement('div');
            divSummary.classList.add('cart-summary');

            let totalProd = document.createElement('p');
            totalProd.innerText = `Total Products: ${cart.totalProducts}`;

            let totalQuant = document.createElement('p');
            totalQuant.innerText = `Total Quantity: ${cart.totalQuantity}`;

            let totalCart = document.createElement('p');
            totalCart.innerText = `Total price:  ${cart.total} USD`;

            let totalCartDisc = document.createElement('p');
            totalCartDisc.innerText = `Total price with discount:  ${cart.discountedTotal} USD`;

            let hr = document.createElement('hr');

              for(const product of cart['products']){
                   let divProduct = document.createElement('div');
                   divProduct.classList.add('product');

                   let h4 = document.createElement('h4');
                   h4.innerText =`${product.id}.    ${product.title}  -  ${product.price} USD`;

                   let img = document.createElement('img');
                   img.src = product.thumbnail;

                   let divInfo = document.createElement('div');
                   divInfo.classList.add('product-info');

                   let quantityProduct = document.createElement('p');
                   quantityProduct.innerText = `Quantity: ${product.quantity}`;

                   let discPercent = document.createElement('p');
                   discPercent.innerText = `Your discount percentage - ${product.discountPercentage} USD`;

                   let totalPrice = document.createElement('p');
                   totalPrice.innerText = `Price: ${product.total} USD`;

                   let totalDiscPrice = document.createElement('p');
                   totalDiscPrice.innerText = `Price with discount: ${product.discountedTotal} USD`;


                divInfo.append(quantityProduct, discPercent, totalPrice,  totalDiscPrice);
                divProduct.append(h4, img, divInfo);
                divSummary.append(totalProd, totalQuant, totalCart, totalCartDisc);
                divCart.appendChild(divProduct);
            }
            document.body.append(h2Cart, divCart, divSummary, hr);
        }
    });
