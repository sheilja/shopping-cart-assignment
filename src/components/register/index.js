import "./styles.scss";

class register {
  render() {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("mainContainer");
    const main = document.createElement("main");
    main.classList.add("main");
    const info = document.createElement("div");
    info.classList.add("info");
    info.innerHTML = `        <h2 class="infoTtitle text-xl text-bold">Signup</h2>
    <p class="infoSubtitle text-sm">We do not share your personal details with anyone.</p>`;

    const form = document.createElement("form");
    form.classList.add("form");
    const inputElement1 = document.createElement("input");
    inputElement1.classList.add("formInput");
    inputElement1.setAttribute("type", "text");
    inputElement1.setAttribute("placeholder", "First name");
    form.appendChild(inputElement1);
    const inputElement2 = document.createElement("input");
    inputElement2.classList.add("formInput");
    inputElement2.setAttribute("type", "text");
    inputElement2.setAttribute("placeholder", "Last name");
    form.appendChild(inputElement2);
    const inputElement3 = document.createElement("input");
    inputElement3.classList.add("formInput");
    inputElement3.setAttribute("type", "email");
    inputElement3.setAttribute("placeholder", "Email");
    form.appendChild(inputElement3);
    const inputElement4 = document.createElement("input");
    inputElement4.classList.add("formInput");
    inputElement4.setAttribute("type", "password");
    inputElement4.setAttribute("placeholder", "Password");
    form.appendChild(inputElement4);
    const inputElement5 = document.createElement("input");
    inputElement5.classList.add("formInput");
    inputElement5.setAttribute("type", "password");
    inputElement5.setAttribute("placeholder", "Confirm Password");
    form.appendChild(inputElement5);
    const submitElement = document.createElement("button");
    submitElement.classList.add("formSubmit", "text-bold");
    submitElement.textContent = "Signup";
    form.appendChild(submitElement);

    main.appendChild(info);
    main.appendChild(form);
    const body = document.querySelector("main");
    const sildebar1 = document.createElement("div");
    sildebar1.classList.add("sildebar1");
    const sildebar2 = document.createElement("div");
    sildebar2.classList.add("sildebar2");
    mainContainer.appendChild(sildebar1);
    mainContainer.appendChild(main);
    mainContainer.appendChild(sildebar2);
    body.appendChild(mainContainer);
  }
}
export default register;
