"use strict";
window.addEventListener("DOMContentLoaded", () => {
  let products = document.querySelectorAll(".product"),
    buttons = document.querySelectorAll("button"),
    openBtn = document.querySelector(".open");

  function createCart() {
    let cart = document.createElement("div");
    let field = document.createElement("div");
    let heading = document.createElement("h2");
    let closeBtn = document.createElement("button");

    cart.classList.add("cart");
    field.classList.add("cart-field");
    closeBtn.classList.add("close");
    heading.textContent = "В нашей корзине"; // Correct Russian
    closeBtn.textContent = "Закрыть"; // Correct Russian

    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  }

  createCart();
  let cart = document.querySelector(".cart");
  let closeBtn = document.querySelector(".close");
  let field = document.querySelector(".cart-field");

  openBtn.addEventListener("click", () => {
    cart.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    cart.style.display = "none";
  });

  buttons.forEach((item, index) => {
    // console.log(item);

    item.addEventListener("click", () => {
      let cloneItem = products[index].cloneNode(true),
        btn = cloneItem.querySelector("button");
      btn.remove();
      field.appendChild(cloneItem);
      products[index].remove();
    });
  });
});
