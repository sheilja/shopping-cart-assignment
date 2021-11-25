import "./styles.scss";

class login {
  render() {
    const content = document.createElement("div");
    content.classList.add("content");
    const info = document.createElement("div");
    info.classList.add("info");
    info.innerHTML = `<h2 class="infoTtitle text-xl text-bold">Login</h2>
    <p class="infoSubtitle text-sm">Get access to your Orders, Wishlist and Recommendations.</p>`;

    const form = document.createElement("form");
    form.classList.add("form");
    const inputElement = document.createElement("input");
    inputElement.classList.add("formInput");
    inputElement.setAttribute("type", "email");
    inputElement.setAttribute("placeholder", "Email");
    form.appendChild(inputElement);
    const inputElement2 = document.createElement("input");
    inputElement2.classList.add("formInput");
    inputElement2.setAttribute("type", "password");
    inputElement2.setAttribute("placeholder", "Password");
    form.appendChild(inputElement2);

    const submitElement = document.createElement("button");
    submitElement.classList.add("formSubmit", "text-bold");
    submitElement.textContent = "Login";
    form.appendChild(submitElement);

    content.appendChild(info);
    content.appendChild(form);
    const main = document.querySelector("main");
    main.classList.add("mainContainer");
    const sildebar1 = document.createElement("div");
    sildebar1.classList.add("sildebar1");
    const sildebar2 = document.createElement("div");
    sildebar2.classList.add("sildebar2");
    main.appendChild(sildebar1);
    main.appendChild(content);
    main.appendChild(sildebar2);
  }
}
export default login;
