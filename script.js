const productsURL = "https://fakestoreapi.com/products?limit=12";
const sartsURL = "https://fakestoreapi.com/carts";
const usersURL = "https://fakestoreapi.com/users";
const result = document.getElementById("res");
const loding = document.getElementById("loding");


function getProducts() {
    fetch(productsURL)
        .then((res) => res.json())
        .then((data) => showProducts(data));
}

function showProducts(arr) {
    console.log(arr);
    result.innerHTML = "";
    result.innerHTML = arr.map((item) => {
        const { id, title, price, image } = item;
        return `
        <div class="card">
        <img src="${image}" alt="${title}">
        <h2>${title}</h2>
        <span>${price}$</span><br>
        <button onclick="infohandler(${id})">More Info</button>
        </div>
        `
    }).join(" ");
}

function infohandler(id) {
    window.location.replace(`http://127.0.0.1:5500/info/index.html?${id}`);
}

getProducts();

