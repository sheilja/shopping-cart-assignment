import "./styles.scss";
import API from "../../apiCalls/apiCalls";

const sideNavigationBar = (filterProduct) => {
  const sidebarElement = document.createElement("aside");
  sidebarElement.classList.add("sideNavigation");
  const categoriesResponse = API.getData("/categories");
  categoriesResponse.then((categories) => {
    categories.sort((a, b) =>
      a.order > b.order ? 1 : b.order > a.order ? -1 : 0
    );
    categories.map((c) => {
      if (c.enabled == true) {
        const option = document.createElement("div");
        option.onclick = () => filterProduct(c.id);
        option.classList.add("option");
        option.innerHTML = c.name;
        sidebarElement.appendChild(option);
      }
    });
  });
  return sidebarElement;
};

export default sideNavigationBar;
