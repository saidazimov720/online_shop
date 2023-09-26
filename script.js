const spinner = document.getElementById("spinner");
const productsURL = "https://fakestoreapi.com/products?limit=12";
const sartsURL = "https://fakestoreapi.com/carts";
const usersURL = "https://fakestoreapi.com/users";
const result = document.getElementById("res");

function getProducts() {
    fetch(productsURL)
    .then((res) => res.json())
    .then((data) => showProducts(data));
}

function showProducts(arr) {
    spinner.classList.remove("loading");
    spinner.classList.add("loaded");
    console.log(arr);
    result.innerHTML = "";
    result.innerHTML = arr.map((item) => {
        const {id, title, price,  image} = item;
        return `
        <div class="card">
        <img src="${image}" alt="${title}">
        <h2>${title}</h2>
        <span>${price}$</span><br>
        <button onlick="updateProduct(${id})">Update</button>
        <button onlick="updateProduct(${id})">Delete</button>
        </div>
        `
    }).join(" ");
}

getProducts();