// Desktop Menu
const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

navEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    shoppingCart.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

// Mobile Menu 

const burgerMenu = document.querySelector('.icon-mobile')
const mobileMenu = document.querySelector('.mobile-menu')

burgerMenu.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu(){
    shoppingCart.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

// Shopping Cart

const iconCarrito = document.querySelector('.navbar-shopping-cart')
const shoppingCart = document.querySelector('.shopping-container')

iconCarrito.addEventListener('click', toggleShoppingCart)

function toggleShoppingCart(){
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    shoppingCart.classList.toggle('inactive')
}

// Products

const productList = []

productList.push({
    name: "Computador",
    price: 1299.99,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__340.jpg'
})
productList.push({
    name: "Bicicleta",
    price: 99.99,
    image: 'https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648__340.jpg'
})
productList.push({
    name: "Mesa",
    price: 39.99,
    image: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960__340.jpg'
})
productList.push({
    name: "Silla",
    price: 29.99,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011__340.jpg'
})
productList.push({
    name: "Televisor",
    price: 349.99,
    image: 'https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876__340.jpg'
})
productList.push({
    name: "Computador",
    price: 1299.99,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__340.jpg'
})
productList.push({
    name: "Bicicleta",
    price: 99.99,
    image: 'https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648__340.jpg'
})
productList.push({
    name: "Mesa",
    price: 39.99,
    image: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960__340.jpg'
})
productList.push({
    name: "Silla",
    price: 29.99,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011__340.jpg'
})
productList.push({
    name: "Televisor",
    price: 349.99,
    image: 'https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876__340.jpg'
})
productList.push({
    name: "Computador",
    price: 1299.99,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__340.jpg'
})
productList.push({
    name: "Bicicleta",
    price: 99.99,
    image: 'https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648__340.jpg'
})
productList.push({
    name: "Mesa",
    price: 39.99,
    image: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960__340.jpg'
})
productList.push({
    name: "Silla",
    price: 29.99,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011__340.jpg'
})
productList.push({
    name: "Televisor",
    price: 349.99,
    image: 'https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876__340.jpg'
})

const cardsContainer = document.querySelector('.cards-container')

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const infoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$ ' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        infoDiv.append(productPrice, productName)
    
        const productFigure = document.createElement('figure')
    
        const addToCartImg = document.createElement('img')
        addToCartImg.setAttribute('src', '../icons/bt_add_to_cart.svg') 
    
        productFigure.appendChild(addToCartImg)
    
        productInfo.append(infoDiv, productFigure)
    
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)