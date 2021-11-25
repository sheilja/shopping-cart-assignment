import Category from "../components/category/index.js";
import "../styles/typography.scss";
import setCartCount from "../utils/setCartCount";
import { createCart, updateCart } from "../components/cart/index";

const category = new Category();
category.render();
setCartCount();
createCart();
const cartUpdatedCallback = () => {
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  if (cartItems) {
    updateCart(cartItems);
  }
};
cartUpdatedCallback();
const header = document.querySelector("header");
header.addEventListener("cart", cartUpdatedCallback, false);
