import "./styles.scss";
import API from "../../apiCalls/apiCalls";
import imgUrl from "../../utils/imgUrl";

class category {
  render() {
    const categoriesResponse = API.getData("/categories");
    categoriesResponse.then((categories) => {
      categories.sort((a, b) =>
        a.order > b.order ? 1 : b.order > a.order ? -1 : 0
      );
      const main = document.querySelector("main");
      main.classList.add("mainContainer");
      const sildebar1 = document.createElement("div");
      sildebar1.classList.add("sildebar1");
      const sildebar2 = document.createElement("div");
      sildebar2.classList.add("sildebar2");
      const content = document.createElement("div");
      content.classList.add("content");
      let i = false;
      categories.map((c) => {
        const id = c.id;
        if (c.enabled === true) {
          i = !i;
          const category = document.createElement("div");
          category.classList.add("category");
          if (i) {
            category.classList.add("direction1");
            category.innerHTML = `
            <img class="categroryImg" src="${imgUrl(c.imageUrl)}"/>
            <div class="categoryDescription">
                <h3 class="content-center text-xl text-bold">${c.name}</h3>
                <p class="content-center text-md text-medium description">${
                  c.description
                }</p>
                <a class="categoryButton" href="/product.html?id=${id}"">Explore ${
              c.name
            }</a>
            </div>  
        `;
          } else {
            category.classList.add("direction2");
            category.innerHTML = `
            <div class="categoryDescription">
                <h3 class="content-center text-xl text-bold">${c.name}</h3>
                <p class="content-center text-md text-medium description">${
                  c.description
                }</p>
                <a class="categoryButton" href="/product.html?id=${id}"">Explore ${
              c.name
            }</a>
            </div>  
            <img class="categroryImg" src="${imgUrl(c.imageUrl)}"/>
        `;
          }
          content.appendChild(category);
        }
      });
      main.appendChild(sildebar1);
      main.appendChild(content);
      main.appendChild(sildebar2);
    });
  }
}
export default category;
