let cardMain = document.querySelector(".card-main");
let loading = document.querySelector(".loadingPara");
console.log(loading);
let url = "https://ecommerce-api-8ga2.onrender.com/api/product";
let priceUrl = "https://api.frankfurter.dev/v1/latest?base=USD&symbols=INR";

async function fetchProducts() {
  try {
    let priceResponse = await fetch(priceUrl);
    let priceResult = await priceResponse.json();
    console.log(priceResult);

    let usdToInr = priceResult.rates.INR;
    console.log("1 USD = " + usdToInr + " INR");

    let response = await fetch(url);
    let result = await response.json();
    if (result.length > 0) {
      loading.classList.remove("loadingPara");
      loading.classList.add("show");
    }
    console.log(result);
    showProducts(result, usdToInr);
  } catch {
    console.log("error");
  }
}
fetchProducts();

function showProducts(r, usdToInr) {
  let n = r.length;
  console.log(n);
  for (let i = 1; i <= n; i++) {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("p");
    let price = document.createElement("p");
    img.src = r[i].url;
    title.innerText = r[i].name;
    price.innerText = "₹" + (r[i].price * usdToInr).toFixed(2);
    card.append(img, title, price);
    cardMain.append(card);
  }
}
