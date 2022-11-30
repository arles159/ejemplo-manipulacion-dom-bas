const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail2');
const isAsideClosed = aside.classList.contains('inactive');
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() { 
    if(isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');        
}
function toggleMobileMenu() {
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');        
}
function toggleCarritoAside() {
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push(
    {
        name: 'Detective Pikachu Doll',
        price: 120.00,
        image: 'img\pexels-carolina-castilla-arias-1716861.jpg'
    });
productList.push(
    {
        name: 'Pokeball life-size',
        price: 80.00,
        image: 'img\pexels-vincent-ma-janssen-1310847.jpg'
    },
    {
        name: 'Detective Pikachu Doll',
        price: 120.00,
        image: 'img\pexels-carolina-castilla-arias-1716861.jpg'
    });
productList.push(
    {
        name: 'Pokeball life-size',
        price: 80.00,
        image: 'img\pexels-vincent-ma-janssen-1310847.jpg'
    }
);

{/* <div class="product-card">
                <img src="img\pexels-carolina-castilla-arias-1716861.jpg" alt="" class="product-img">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Detective Pikachu Doll</p>
                    </div>
                    <figure>
                        <img src="./Icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>
            <div class="product-card">
                <img src="img\pexels-vincent-ma-janssen-1310847.jpg" alt="" class="product-img">
                <div class="product-info">
                    <div>
                        <p>$80,00</p>
                        <p>Pokeball life-size</p>
                    </div>
                    <figure>
                        <img src="./Icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>
        </div> */}

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', 'productList.image');

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


console.log(productList)