const btn = document.querySelector("#click");
// btn.addEventListener("click", () => {
//   alert("btn bosildi");
// });

const ul = document.querySelector("ul");
const btn3 = document.querySelectorAll("button");

// console.log(btn2);
// console.log(btn3);

// console.log(btn.parentNode);
// console.log(btn.parentElement);
// console.log(btn.lastElementChild);
// console.log(btn.lastChild);
// console.log(btn.firstChild);
// console.log(btn.firstElementChild);
// console.log(btn.nextElementSibling);
// console.log(btn.nextSibling);

//  node ko`rinishida`
// console.log(btn.previousSibling);

// element ko`rinishida`
// console.log(btn.previousElementSibling);

//  HTMLAllCollection qaytaradi
// console.log(btn.children);

// element yaratish va qo`shish otasiga

// const element = document.createElement("section");
// document.body.append(element);

// text nomini o`zgartirish`
// btn.textContent = "aytgan edimku";

// innerText = xatosiz chiqaradi
// console.log(btn.innerText);

// textContent = xato chiqaradi
// console.log(btn.textContent)

// btndan keyin text qo`shadi
// console.log(btn.after("text"));

//  u btndan oldin qo`shadi
// console.log(btn.before("text"));

// console.log(btn.append("btn3"));
// elementni boshidan qo`yish`
// document.body.prepend(element);
// console.log(btn.insertAdjacentElement(position, value));

// elementni nushalab olish
// const newBtns = btn.cloneNode();
// console.log(newBtns);
//  elementni atribbutini olish ichiga attribute nomini yozib olamiz
// console.log(btn.getAttribute("class"));

// bunga attribute qo`shish `
// console.log(btn.setAttribute("title", "title"));

// bormi yo`qligini tekshirish`
// console.log(btn.hasAttribute("class"));
//  atributeni o`chirish`
// console.log(btn.removeAttribute("id"));;

// console.log(btn.classList = "abc");
// const btns = btn.classList.add("abc");
// console.log(btns.classList.remove("box","add"));

// btn elementi bosilganda consolega element va textini  chiqarish`
// btn.addEventListener("click", (event) => {
// console.log(event.target);
// })

// ul.addEventListener("click", (event) => {
//   if (event.target.nodeName == "UL") return;
//   console.log(event.target.textContent);
// });

