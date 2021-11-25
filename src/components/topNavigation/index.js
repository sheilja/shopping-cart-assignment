import "./styles.scss";
import API from "../../apiCalls/apiCalls";
import downArrow from "../../../static/down-arrow.png";

const toNavigationBar = (filterProduct) => {
  const topBar = document.createElement("div");
  topBar.classList.add("topnavigation");
  topBar.id = "topnavigation";
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");
  const dropbtn = document.createElement("button");
  dropbtn.classList.add("dropbtn");
  dropbtn.innerHTML = `Select category<div class="downArrow"><img class="img" src="${downArrow}"></img></div>`;
  dropdown.appendChild(dropbtn);
  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");
  const categoriesResponse = API.getData("/categories");
  categoriesResponse.then((categories) => {
    categories.sort((a, b) =>
      a.order > b.order ? 1 : b.order > a.order ? -1 : 0
    );
    categories.map((c) => {
      if (c.enabled == true) {
        const option = document.createElement("a");
        option.onclick = () => filterProduct(c.id);
        option.classList.add("option");
        option.innerHTML = c.name;
        dropdownContent.appendChild(option);
      }
    });
  });
  dropdown.appendChild(dropdownContent);
  topBar.appendChild(dropdown);
  return topBar;
};

export default toNavigationBar;
