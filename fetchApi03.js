let cardMain = document.querySelector(".card-main");
let loading = document.querySelector(".loadingPara");
console.log(loading);
let url = "https://ecommerce-api-8ga2.onrender.com/api/product";

async function fetchProducts() {
  let response = await fetch(url);
  let result = await response.json();
  if (result.length > 0) {
    loading.classList.remove("loadingPara");
    loading.classList.add("show");
  }
  console.log(result);
  showProducts(result);
}
fetchProducts();

function showProducts(r) {
  let n = r.length;
  console.log(n);
  for (let i = 1; i <= n; i++) {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("p");
    let price = document.createElement("p");
    img.src = r[i].url;
    title.innerText = r[i].name;
    price.innerText = r[i].price;
    card.append(img, title, price);
    cardMain.append(card);
  }
}
