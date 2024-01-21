const btn = document.getElementById("trustees");
const items = document.getElementById("trustee_items");

btn.addEventListener("click", function () {
  items.scrollIntoView(true);
});

const prices = document.getElementById("pricing");
const items2 = document.getElementById("item-prices");

prices.addEventListener("click", function () {
  items2.scrollIntoView(true);
});

const products = document.getElementById("products");
const productSwiper = document.getElementById("product-swiper");

products.addEventListener("click", function () {
  productSwiper.scrollIntoView(true);
});
