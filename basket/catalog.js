// function addTask() {
//     const taskInput = document.getElementById('newTask');
//     const taskText = taskInput.value.trim();

//     if (taskText !== '') {
//         const tasksList = document.getElementById('tasks');
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             ${taskText}
//             <button onclick="deleteTask(this)">Delete</button>
//         `;
//         tasksList.appendChild(listItem);
//         taskInput.value = '';
//     }
// }

// function deleteTask(button) {
//     const listItem = button.parentElement;
//     const tasksList = document.getElementById('tasks');
//     tasksList.removeChild(listItem);
// }

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
    window.location.replace(`../Login/index.html`);
  }
}

product_request_send();