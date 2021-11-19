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
      const main1 = document.createElement("div");
      main1.classList.add("mainContainer");
      const body = document.querySelector("main");
      const sildebar1 = document.createElement("div");
      sildebar1.classList.add("sildebar1");
      const sildebar2 = document.createElement("div");
      sildebar2.classList.add("sildebar2");
      const content = document.createElement("div");
      content.classList.add("content");
      let i = false;
      categories.map((c) => {
        if (c.enabled === true) {
          i = !i;
          const category = document.createElement("div");
          category.classList.add("category");
          if (i) {
            category.classList.add("direction1");
            category.innerHTML = `
            <img class="categroryImg" src="${imgUrl(c.imageUrl)}"/>
            <div>
                <h3 class="content-center text-xl text-bold">${c.name}</h3>
                <p class="content-center text-md text-medium">${
                  c.description
                }</p>
            </div>  
        `;
          } else {
            category.classList.add("direction2");
            category.innerHTML = `
            <div>
                <h3 class="content-center">${c.name}</h3>
                <p class="content-center">${c.description}</p>
            </div>  
            <img class="categroryImg" src="${imgUrl(c.imageUrl)}"/>
        `;
          }
          content.appendChild(category);
        }
      });
      main1.appendChild(sildebar1);
      main1.appendChild(content);
      main1.appendChild(sildebar2);
      body.appendChild(main1);
    });
  }
}
export default category;
