import "../styles/typography.scss";
import Register from "../components/register/index.js";
import setCartCount from "../utils/setCartCount";
import { createCart, updateCart } from "../components/cart/index";

const register = new Register();
register.render();
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
