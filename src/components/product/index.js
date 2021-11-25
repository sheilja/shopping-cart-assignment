import "./styles.scss";
import sideNavigationBar from "../sideNavigation/index.js";
import toNavigationBar from "../topNavigation/index";
import productAllResult from "../productResult/index.js";
import API from "../../apiCalls/apiCalls";

const filterProduct = (ID) => {
  product(ID);
};

const product = (ID) => {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  if (ID !== undefined) {
    console.log("navigation click");
    const elements = document.getElementById("productResult");
    elements.remove();
    const response = API.getData("/products");
    response.then((products) => {
      const filteredProducts = products.filter((p) => p.category === ID);
      const result = productAllResult(filteredProducts);
      const content = document.getElementById("content");
      content.appendChild(result);
    });
  } else if ((id === undefined || id === null) && ID === undefined) {
    console.log("product.html click");
    const content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("ID", "content");
    const sidebar = sideNavigationBar(filterProduct);
    const topbar = toNavigationBar(filterProduct);
    const response = API.getData("/products");
    response.then((products) => {
      const result = productAllResult(products);
      content.appendChild(result);
    });
    content.appendChild(sidebar);
    content.appendChild(topbar);
    const sildebar1 = document.createElement("div");
    sildebar1.classList.add("sildebar1");
    const sildebar2 = document.createElement("div");
    sildebar2.classList.add("sildebar2");
    const main = document.querySelector("main");
    main.classList.add("mainContainer");
    main.appendChild(sildebar1);
    main.appendChild(content);
    main.appendChild(sildebar2);
  } else {
    console.log("explore");
    const content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("ID", "content");
    const sidebar = sideNavigationBar(filterProduct);
    const response = API.getData("/products");
    response.then((products) => {
      const filteredProducts = products.filter((p) => p.category === id);
      const result = productAllResult(filteredProducts);
      content.appendChild(result);
    });
    content.appendChild(sidebar);
    const sildebar1 = document.createElement("div");
    sildebar1.classList.add("sildebar1");
    const sildebar2 = document.createElement("div");
    sildebar2.classList.add("sildebar2");
    const main = document.querySelector("main");
    main.classList.add("mainContainer");
    main.appendChild(sildebar1);
    main.appendChild(content);
    main.appendChild(sildebar2);
  }
};
export default product;
