const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail2');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() { 
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');        
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
    aside.classList.add('inactive'); 
    }

    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

function openProductDetailAside() {
    aside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
        name: 'Detective Pikachu Doll',
        price: 120.00,
        image: './img/pexels-carolina-castilla-arias-1716861.jpg'
    });
productList.push({
        name: 'Pokeball life-size',
        price: 80.00,
        image: './img/pexels-vincent-ma-janssen-1310847.jpg'
    });
productList.push({
        name: 'Detective Pikachu Doll',
        price: 120.00,
        image: './img/pexels-carolina-castilla-arias-1716861.jpg'
    });
productList.push({
        name: 'Pokeball life-size',
        price: 80.00,
        image: './img/pexels-vincent-ma-janssen-1310847.jpg'
    });
productList.push({
    name: 'Detective Pikachu Doll',
    price: 120.00,
    image: './img/pexels-carolina-castilla-arias-1716861.jpg'
});
productList.push({
        name: 'Pokeball life-size',
        price: 80.00,
        image: './img/pexels-vincent-ma-janssen-1310847.jpg'
    });
productList.push({
        name: 'Detective Pikachu Doll',
        price: 120.00,
        image: './img/pexels-carolina-castilla-arias-1716861.jpg'
    });
productList.push({
        name: 'Pokeball life-size',
        price: 80.00,
        image: './img/pexels-vincent-ma-janssen-1310847.jpg'
    });
    productList.push({
        name: 'Detective Pikachu Doll',
        price: 120.00,
        image: './img/pexels-carolina-castilla-arias-1716861.jpg'
    });
productList.push({
        name: 'Pokeball life-size',
        price: 80.00,
        image: './img/pexels-vincent-ma-janssen-1310847.jpg'
    });
productList.push({
        name: 'Detective Pikachu Doll',
        price: 120.00,
        image: './img/pexels-carolina-castilla-arias-1716861.jpg'
    });
productList.push({
        name: 'Pokeball life-size',
        price: 80.00,
        image: './img/pexels-vincent-ma-janssen-1310847.jpg'
    });
productList.push({
    name: 'Detective Pikachu Doll',
    price: 120.00,
    image: './img/pexels-carolina-castilla-arias-1716861.jpg'
});
productList.push({
        name: 'Pokeball life-size',
        price: 80.00,
        image: './img/pexels-vincent-ma-janssen-1310847.jpg'
    });
productList.push({
        name: 'Detective Pikachu Doll',
        price: 120.00,
        image: './img/pexels-carolina-castilla-arias-1716861.jpg'
    });
productList.push({
        name: 'Pokeball life-size',
        price: 80.00,
        image: './img/pexels-vincent-ma-janssen-1310847.jpg'
    });

function renderProducts(arr) {
    for(product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;        

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './Icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList)