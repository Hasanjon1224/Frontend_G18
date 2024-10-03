const openBtn = document.querySelector("#openBtn");
const modal = document.querySelector(".my-modal");
const closeX = document.querySelector("#closeX");
const closeBtn = document.querySelector("#closeBtn");
const modalOverlay = document.querySelector(".overlay");

// modal logic
function openCloseModal() {
  modalOverlay.classList.toggle("hide");
}
openBtn.addEventListener("click", openCloseModal);

closeX.addEventListener("click", openCloseModal);

closeBtn.addEventListener("click", openCloseModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target == modalOverlay) openCloseModal();
});

///////////////////////////////// TAB

const buttons = document.querySelectorAll(".tab-item");
const tabs = document.querySelectorAll(".tab-content");

buttons.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    // changing btn
    buttons.forEach((btn) => {
      btn.classList.remove("btn-primary");
    });
    e.target.classList.add("btn-primary");

    // changing tabs
    tabs.forEach((tab) => {
      tab.classList.add("hide");
    });
    tabs[index].classList.remove("hide");
  });
});

/////////////////////////////////////// SLIDER

const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-control-prev");
const nextBtn = document.querySelector(".carousel-control-next");
const indicators = document.querySelectorAll("li");

let current = 0;

function slide(prev) {
  console.log(prev); 
  if (prev) {
    current++;
    if (current > 2) current = 0;
  } else {
    current--;
    if (current < 0) current = 2;
  }
  // current result
  carouselItems.forEach((item) => {
    item.classList.remove("active");
  });
  indicators.forEach((item) => {
    item.classList.remove("active");
  });
  carouselItems[current].classList.add("active");
  indicators[current].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  slide(true);
});
prevBtn.addEventListener("click", () => {
  slide(false);
});
