const setCartCount = () => {
  const count = document.getElementById("count");
  if (count) {
    count.remove();
  }
  let cart = JSON.parse(localStorage.getItem("cart"));
  let cartCount = document.getElementById("cart");
  cartCount.onclick = () => {
    const header = document.querySelector("header");
    const cartContainer = header.querySelector(".cartContainer");
    cartContainer.classList.add("cartContainerOpen");
    const topbar = document.getElementById("topnavigation");
    if (topbar) {
      topbar.remove();
    }
    const sidebar = document.getElementById("sideNavigation");
    if (sidebar) {
      sidebar.classList.add("decreaseOpacity");
    }
  };
  const p = document.createElement("p");
  p.id = "count";
  if (cart) {
    p.innerHTML = `${cart.length} items`;
  } else {
    p.innerHTML = `0 items`;
  }
  cartCount.appendChild(p);
};

export default setCartCount;
