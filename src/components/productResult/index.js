import "./styles.scss";
import productCart from "../productCart/index";

const productAllResult = (products) => {
  const productResult = document.createElement("div");
  productResult.classList.add("productResult");
  productResult.setAttribute("id", "productResult");

  products.map((product) => {
    const cart = productCart(product);
    productResult.appendChild(cart);
  });
  return productResult;
};

export default productAllResult;
