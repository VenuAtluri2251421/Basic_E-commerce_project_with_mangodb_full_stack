let home = document.getElementById("Homepage");
let Service = document.getElementById("Services");
let Product = document.getElementById("Products");
let Trend = document.getElementById("Trend");
let Offer = document.getElementById("Offer");
let Foot = document.getElementById("Foot");
let cartpage = document.getElementById("CartPage");



function zero() {
    home.classList.remove("d-none");
    Offer.classList.add("d-none");
    Service.classList.add("d-none");
    Trend.classList.add("d-none");
    Product.classList.add("d-none");
    Foot.classList.add("d-none");
}

function one() {
    home.classList.add("d-none");
    Offer.classList.add("d-none");
    Service.classList.remove("d-none");
    Trend.classList.add("d-none");
    Product.classList.add("d-none");
    Foot.classList.add("d-none");
}

function two() {
    home.classList.add("d-none");
    Offer.classList.add("d-none");
    Service.classList.add("d-none");
    Trend.classList.add("d-none");
    Product.classList.remove("d-none");
    Foot.classList.add("d-none");
}

function three() {
    home.classList.add("d-none");
    Offer.classList.add("d-none");
    Service.classList.add("d-none");
    Trend.classList.remove("d-none");
    Product.classList.add("d-none");
    Foot.classList.add("d-none");
}

function four() {
    home.classList.add("d-none");
    Offer.classList.remove("d-none");
    Service.classList.add("d-none");
    Trend.classList.add("d-none");
    Product.classList.add("d-none");
    Foot.classList.add("d-none");
}

function five() {
    home.classList.add("d-none");
    Offer.classList.add("d-none");
    Service.classList.add("d-none");
    Trend.classList.add("d-none");
    Product.classList.add("d-none");
    Foot.classList.remove("d-none");
}

function opens() {
    cartpage.classList.remove("d-none");
    home.classList.add("d-none");
    Offer.classList.add("d-none");
    Service.classList.add("d-none");
    Trend.classList.add("d-none");
    Product.classList.add("d-none");
    Foot.classList.add("d-none");
}
function toggleEmail() {
    let emailPara = document.getElementById("emailText");
    emailPara.classList.toggle("d-none");
}
let cartItems = [];

function addToCart(productName) {
    cartItems.push(productName);
    alert(`${productName} added to cart!`);
    updateCartUI();
}

function updateCartUI() {
    let cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = cartItems.length;
    }
}


