"use strict";

// const openBtn = document.querySelector("#openBtn");
// const modal = document.querySelector(".my-modal");
// const closeX = document.querySelector("#closeX");
// const closeBtn = document.querySelector("#closeBtn");
// const modalOverlay = document.querySelector(".overlay");

// uzunroq yozilgan code

// openBtn.addEventListener("click", () => {
//   modalOverlay.classList.remove("hide");
// });

// closeX.addEventListener("click", () => {
//   modalOverlay.classList.toggle("hide");
// });

// closeBtn.addEventListener("click", () => {
//   modalOverlay.classList.toggle("hide");
// });

// modalOverlay.addEventListener("click", (event) => {
//     if(event.target == modalOverlay)
//     modalOverlay.classList.toggle("hide");
//   });

// bu qisqa qilib yozilgan code

// modal logikasi
// function openCloseModal() {
//   modalOverlay.classList.toggle("hide");
// }

// openBtn.addEventListener("click", openCloseModal);

// closeX.addEventListener("click", openCloseModal);

// closeBtn.addEventListener("click", openCloseModal);

// modalOverlay.addEventListener("click", (e) => {
//   if (e.target == modalOverlay) openCloseModal();
// });

// const buttons = document.querySelectorAll(".tab-item");
// const tabs = document.querySelectorAll(".tab-content");

// changing tabs changes
// buttons.forEach((item, index) => {
//   item.addEventListener("click", (e) => {
//     buttons.forEach((btn, btnIndex) => {
//       btn.classList.remove("btn-primary");
// console.log(btnIndex);
//       tabs.forEach((tab) => {
//         tab.classList.add("hide");
//       });
//       tabs[index].classList.remove("hide");
//     });
//     e.target.classList.add("btn-primary");
//   });
// });

// const carouselItems = document.querySelectorAll(".carousel-item");
// const nextBtn = document.querySelector(".carousel-control-next");
// const prevBtn = document.querySelector(".carousel-control-prev");

// let current = 0;

// function slide(prev) {
//   current++;
// if (prev){
//   if (current > 2) current = 0;
// }else {
//   current--;
//   if (current < 0) current = 2;
    
  
// }

//   carouselItems.forEach((item) => {
//     item.classList.remove("active");
//   });

//   carouselItems[current].classList.add("active");
// }

// nextBtn.addEventListener("click", slide(true));
// prevBtn.addEventListener("click",  slide(false));
  
 

