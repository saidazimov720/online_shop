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
        <h1 class="into_title">${title}</h1>
        <img src="${image}" alt="${title}" >
        </div>
            <div clas="information">
                <p class="info_price">
                    <span>${price}</span>
                    <span>${price + 100}</span>
                    <span>- $100</span>
                </p>
                <button onclick="addToCart(${id})">Add to cart</button>
                <hr/>
                <p>${description}</p>
            </div>
    </div>
    `;
}

getinfo();