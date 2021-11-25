import "./styles.scss";
import imgUrl from "../../utils/imgUrl";
import setCartCount from "../../utils/setCartCount";
import { updateCart } from "../cart";

const productCart = (product) => {
  const { name, imageURL, description, price, category, id } = product;
  const result = document.createElement("div");
  result.classList.add("productCart");
  result.innerHTML = `
      <h3 class="text-lg text-bold product-title">${product.name}</h3>
      <img class="productImg" src="${imgUrl(product.imageURL)}" border/>
      <div class="product-description-container"><div class="product-description">${
        product.description
      }</div></div>
      <div class="productFooter">
        <p class="text-lg">MRP Rs.${product.price}</p>
        <button href="#" class="addToCartButton">Add to cart</button>
      </div>
      `;
  const button = result.querySelector("button");
  button.onclick = () => {
    const cartItem = {
      name,
      imageURL,
      description,
      price,
      category,
      id,
      quantity: 1,
    };
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      const isItemPresent = cart.find((item) => item.id === id);
      !isItemPresent && cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("cart", JSON.stringify([cartItem]));
    }
    setCartCount();
    updateCart(JSON.parse(localStorage.getItem("cart")));
  };
  return result;
};
export default productCart;
