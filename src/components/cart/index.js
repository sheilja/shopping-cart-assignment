import "./styles.scss";
import CloseIcon from "../../../static/close.svg";
import imgUrl from "../../utils/imgUrl";
import cartUpdatedEvent from "../../utils/cartUpdatedEvent";

const changeItemQuantity = (itemId, quantity) => () => {
  let cartList = JSON.parse(localStorage.getItem("cart"));
  const item = cartList.find((product) => product.id === itemId);
  const updatedQuantity = item.quantity + quantity;
  item.quantity =
    updatedQuantity > 0 && updatedQuantity < 10
      ? updatedQuantity
      : item.quantity;
  localStorage.setItem("cart", JSON.stringify(cartList));
  cartUpdatedEvent();
};

export const updateCart = (products) => {
  const cart = document.querySelector(".cart");
  const oldItems = cart.querySelectorAll(".card");
  oldItems.forEach((item) => {
    cart.removeChild(item);
  });

  if (products.length === 0) {
    if (!cart.querySelector(".noItems")) {
      const noItemsHeading = document.createElement("h4");
      noItemsHeading.classList.add("noItems", "text-lg", "text-medium");
      noItemsHeading.textContent = "No Items in the cart";
      cart.appendChild(noItemsHeading);
    }
    let checkoutButton = document.querySelector(".cartCheckout");
    checkoutButton && cart.removeChild(checkoutButton);
  } else {
    const noItemsHeading = cart.querySelector(".noItems");
    if (noItemsHeading) cart.removeChild(noItemsHeading);
    let total = 0;
    products.map((product) => {
      const cartCard = document.createElement("div");
      cartCard.setAttribute("class", "card");
      cartCard.innerHTML = `
                    <img class="cardImage" src="${imgUrl(
                      product.imageURL
                    )}" alt="${product.name}" />
                    <div>
                        <h6 class="text-lg text-bold">${product.name}</h6>
                        <div class="cardQuantity">
                            <button type="button" class="minusBbutton ${
                              product.quantity === 1 && "buttonDisabled"
                            } text-xl">-</button>
                            <span class="cardQuantityText">${
                              product.quantity
                            }</span>
                            <button type="button" class="plusBbutton ${
                              product.quantity === 9 && "buttonDisabled"
                            } text-xl">+</button>
                            <span class="cardMrp">x Rs.${product.price}</span>
                        </div>
                    </div>
                    </div>
                    <p class="text-lg cardPrice">Rs.${
                      product.price * product.quantity
                    }</p>
            `;

      const plusButton = cartCard.querySelector(".plusBbutton");
      plusButton.onclick = changeItemQuantity(product.id, 1);

      const minusButton = cartCard.querySelector(".minusBbutton");
      minusButton.onclick = changeItemQuantity(product.id, -1);

      cart.appendChild(cartCard);
      total += product.price * product.quantity;
    });

    let checkoutButton = document.querySelector(".cartCheckout");
    checkoutButton && cart.removeChild(checkoutButton);

    checkoutButton = document.createElement("div");
    checkoutButton.classList.add("cartCheckout");
    checkoutButton.innerHTML = `
            <span class="text-lg text-bold">Checkout</span>
            <span class="text-lg text-bold">Total: Rs.${total}</span>
        `;
    cart.appendChild(checkoutButton);
  }
};

export const createCart = () => {
  const cartContainer = document.createElement("div");
  cartContainer.setAttribute("class", "cartContainer");
  const cart = document.createElement("div");
  cart.setAttribute("class", "cart");
  cart.innerHTML = `
        <div class="cartHeader">
            <h3 class="text-xl text-bold cartTitle">My Cart</h3>
            <img class="cartCloseIcon" />
        </div>
    `;

  const closeIcon = cart.querySelector(".cartCloseIcon");
  closeIcon.setAttribute("src", CloseIcon);
  closeIcon.onclick = () => {
    const cartContainer = header.querySelector(".cartContainer");
    cartContainer.classList.remove("cartContainerOpen");

    const sidebar = document.getElementById("sideNavigation");
    sidebar.classList.remove("decreaseOpacity");
  };

  cartContainer.appendChild(cart);
  const header = document.querySelector("header");
  header.appendChild(cartContainer);
};
