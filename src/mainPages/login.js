import setCartCount from "../utils/setCartCount";
import "../styles/typography.scss";
import Login from "../components/login/index.js";
import { createCart, updateCart } from "../components/cart/index";

const login = new Login();
login.render();
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
