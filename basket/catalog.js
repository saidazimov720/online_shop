const spinner = document.getElementById("spinner");
const Basket_res = document.getElementById("Basket_res");
const phone_num = document.getElementById('phone_num');
// const num = localStorage.getItem("number_click");
// const id = localStorage.getItem("product_id");
const id = location.search.slice(1);


function product_send() {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => show_product(json))
    .catch((error) => {
      console.error("Error fetching product:", error);
    });
  console.log(Number(minus), Number(id));
}

function show_product(data) {
  const { id, price, category, image } = data;
  Basket_res.innerHTML += `
    <div class="product">
      <div class="deleteProd" onclick="deleteProduct(${id})">
        <i class="fa-solid fa-x"></i>
      </div>
      <div class="prodImg">
        <img src="${image}" alt="..." />
      </div>
      <div class="updateProd">
        <div class="title">
          <p>${category}</p>
        </div>
        <div class="quantity_res quantity">
          <button class="decreaseBtn"><i class="fa-solid fa-minus"></i></button>
          <button><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <div class="prodPrice">
        <h3>${price}$</h3>
        <del>100 $</del>
      </div>
    </div>

  `;
}

function mainBuy() {
  if (phone_num.value.trim() !== "") {
    alert("so'rovingiz adminga yuborildi");
  } else {
    window.location.replace("../login/index.html");
  }
}

product_send();


function deleteProduct(id) {
  
}