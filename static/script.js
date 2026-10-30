const products = [
  {name:"Ballı Granola", category:"Kahvaltı & atıştırmalık", price:"₺129,90", icon:"🥣"},
  {name:"Soğuk Sıkım Zeytinyağı", category:"Mutfak keyfi", price:"₺289,90", icon:"🫒"},
  {name:"Botanik El Kremi", category:"Ev & bakım", price:"₺89,90", icon:"🌿"},
  {name:"Seramik Kahve Kupası", category:"Günlük yaşam", price:"₺149,90", icon:"☕"}
];
let cartCount = 0;
const productGrid = document.querySelector("#productGrid");
const toast = document.querySelector("#toast");
function renderProducts() {
  productGrid.innerHTML = products.map((product) => `<article class="product-card"><div class="product-image">${product.icon}</div><div class="product-info"><small>${product.category}</small><h3>${product.name}</h3><div class="product-bottom"><span class="product-price">${product.price}</span><button class="add-product" aria-label="${product.name} sepete ekle" data-product="${product.name}">+</button></div></div></article>`).join("");
  document.querySelectorAll(".add-product").forEach((button) => button.addEventListener("click", () => {
    cartCount += 1;
    document.querySelector("#cartCount").textContent = cartCount;
    showToast(`${button.dataset.product} sepete eklendi.`);
  }));
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}
document.querySelector("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#formMessage").textContent = "Harika! Nova dünyasına hoş geldiniz.";
  event.target.reset();
});
document.querySelector("#searchButton").addEventListener("click", () => {
  const term = window.prompt("Nova Market'te ne arıyorsunuz?");
  if (term) showToast(`“${term}” için arama yakında aktif olacak.`);
});
document.querySelector("#cartButton").addEventListener("click", () => showToast(cartCount ? `${cartCount} ürün sepetinizde.` : "Sepetiniz henüz boş."));
document.querySelector("#nextProduct").addEventListener("click", () => productGrid.append(productGrid.firstElementChild));
document.querySelector("#prevProduct").addEventListener("click", () => productGrid.prepend(productGrid.lastElementChild));
renderProducts();
