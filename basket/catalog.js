const spinner = document.getElementById("spinner");
const Basket_res = document.getElementById("Basket_res");
const quantity_res = document.getElementById("quantity_res");
const phone_num = document.getElementById('phone_num');
const num = localStorage.getItem("number_click");
const id = localStorage.getItem("product_id");

var minus = num - 1;

function product_request_send() {
  spinner.classList.remove("loading");
  spinner.classList.add("loaded");
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => show_product(json));
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
      <img
        src="${image}"
        alt="..."
      />
    </div>
    <div class="updateProd">
      <div class="title">
        <p>${category}</p>
      </div>
      <div id="quantity_res" class="quantity">
      <button class="decreaseBtn"><i class="fa-solid fa-minus"></i></button>
      <p>${minus}</p>
      <button><i class="fa-solid fa-plus"></i></button>
      </div>
      </div>
      <div class="prodPrice">
      <h3>${price}$</h3>
      <del>100 $</del>
      </div>
      </div>
      <hr>
      `;
}

// function deleteProduct(id) {}

function mainBuy() {
  if (phone_num.value.trim() != "") {
    alert("so'rovingiz adminga yuborildi")
  }
  else {
    window.location.replace(`../login/index.html`);
  }
}

product_request_send();


// function addCart(id) {
//   if (id) {
//     var products = JSON.parse(localStorage.getItem("products")) ?? [];
//     products.push(id);
//     console.log(products);
//     localStorage.setItem("products", JSON.stringify(products));
//     addCartFetch(id);
//   }
// }

// function addCartFetch(id) {
//   fetch(`https://fakestoreapi.com/products/${id}`)
//     .then((res) => res.json())
//     .then((product) => {
//       const image = product.image;
//       const title = product.title;
//       const price = product.price;
//       const discountPrice = price;
//       const increasPrice = price + price * 0.05;
//       const buyProduct = document.getElementById("buyProduct");
//       if (buyProduct.innerHTML === "") {
//         buyProduct.innerHTML = <h1>You haven't bought a product yet</h1>;
//       } else {
//         buyProduct.innerHTML += `
//           <div class="product">
//             <div class="deleteProd" onclick="deleteProd(${id})">
//               <i class="fa-solid fa-x"></i>
//             </div>
//             <div class="prodImg">
//               <img src="${image}" alt="..." />
//             </div>
//             <div class="updateProd">
//               <div class="title">
//                 <p>${title}</p>
//               </div>
//               <div class="quantity">
//                 <button class="updateBtn" onclick="decreaseItem(${id})">
//                   <i class="fa-solid fa-minus"></i>
//                 </button>
//                 <p class="prodNum" id="prodNum${id}">13</p>
//                 <button onclick="increaseItem(${id})">
//                   <i class="fa-solid fa-plus"></i>
//                 </button>
//               </div>
//             </div>
//             <div class="prodPrice">
//               <h3>${discountPrice} $</h3>
//               <del>${increasPrice} $</del>
//             </div>
//           </div>`;
//       }

//       const products = JSON.parse(localStorage.getItem("products")) || [];
//       const productInfo = {
//         id: id,
//         image: image,
//         title: title,
//         price: price,
//       };
//       products.push(productInfo);
//       localStorage.setItem("products", JSON.stringify(products));
//     })
//     .catch((error) => {
//       console.error("Xatolik:", error);
//     });
// }