import "./styles.scss";
import sideNavigationBar from "../sideNavigation/index.js";
import productAllResult from "../productResult/index.js";
import API from "../../apiCalls/apiCalls";

const filterProduct = (id) => {
  product(id);
};
const product = (id) => {
  if (id === undefined) {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("mainContainer");
    const content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("id", "content");
    const sidebar = sideNavigationBar(filterProduct);
    const response = API.getData("/products");
    response.then((products) => {
      const result = productAllResult(products);
      content.appendChild(result);
    });
    content.appendChild(sidebar);
    const sildebar1 = document.createElement("div");
    sildebar1.classList.add("sildebar1");
    const sildebar2 = document.createElement("div");
    sildebar2.classList.add("sildebar2");
    mainContainer.appendChild(sildebar1);
    mainContainer.appendChild(content);
    mainContainer.appendChild(sildebar2);
    const body = document.querySelector("main");
    body.appendChild(mainContainer);
    console.log(body);
  } else {
    const elements = document.getElementById("productResult");
    elements.remove();
    const response = API.getData("/products");
    response.then((products) => {
      const filteredProducts = products.filter((p) => p.category === id);
      const result = productAllResult(filteredProducts);
      //content.appendChild(result);
      const content = document.getElementById("content");
      content.appendChild(result);
    });
  }
};
export default product;
