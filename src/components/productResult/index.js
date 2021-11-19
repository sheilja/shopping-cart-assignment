import "./styles.scss";
import imgUrl from "../../utils/imgUrl";

const productAllResult = (products) => {
  const productResult = document.createElement("div");
  productResult.classList.add("productResult");
  productResult.setAttribute("id", "productResult");

  //response.then((products) => {
  products.map((product) => {
    const result = document.createElement("div");
    result.classList.add("productCart");
    result.innerHTML = `
      <h3 class="text-lg text-bold product-title">${product.name}</h3>
      <img class="productImg" src="${imgUrl(product.imageURL)}"/>
      <p class="text-sm product-description">${product.description}</p>
      <div class="product-card_footer">
        <p class="text-lg">MRP Rs.${product.price}</p>
      </div>
      `;

    productResult.appendChild(result);
  });
  //});
  return productResult;
};

export default productAllResult;
