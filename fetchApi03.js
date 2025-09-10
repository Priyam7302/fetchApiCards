let container = document.querySelector(".container");
let url = "https://ecommerce-api-8ga2.onrender.com/api/product";

async function fetchProducts() {
  let response = await fetch(url);
  let result = await response.json();
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
    container.append(card);
  }
}
