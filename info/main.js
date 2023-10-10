const infodiv = document.getElementById("info");
const id = location.search.slice(1);
console.log(id);

async function getinfo() {
    const data = fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => showinfo(data));
}

function showinfo(data) {
    const {id, title, price, description, image} = data;
    infodiv.innerHTML = `

    <div class="info">
        <div class="info_img">
        <h1 class="into_title">${title}</h1><br/>
        <img src="${image}" alt="${title}" >
        </div>
            <div class="information">
                <p class="info_price">
                    <span class="total">${price}$</span>
                    <span class="old">${price + 100}$</span>
                    <span class="minus">- $100</span>
                </p>
                <button onclick="addCart(${id})">Buy</button>
                <hr>
                <p>${description}</p>
            </div>
    </div>
    `;
}

getinfo();


function addCart(id) {
    console.log(id, "id");
    window.open(`http://127.0.0.1:5500/basket/index.html?${id}`);
}