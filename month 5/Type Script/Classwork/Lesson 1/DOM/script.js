// Elementlarni tanlash
// const btn = document.getElementById("quoteBtn");
// const quote = document.getElementById("quoteText");
// const person = document.getElementById("quotePerson");
// // Iqtiboslar ro'yxati
// const quotes = [
//   {
//     quote:
//       "The only limit to our realization of tomorrow is our doubts of today.",
//     person: "Franklin D. Roosevelt",
//   },
//   {
//     quote: "Do not watch the clock. Do what it does. Keep going.",
//     person: "Sam Levenson",
//   },
//   {
//     quote:
//       "the best  way to find yourself is to lose yourself in the service of others.",
//     person: "Mahatma Gandi",
//   },
//   {
//     quote:
//       "if you want to live a happylife in the service of others you can use the following commands to connect to the service and to maneger yourself and your company name in the service ",
//     person: "Albert Enshteyn",
//   },
//   {
//     quote:
//       "if you want to live a happylife in the service of others you can use the following commands to connect to the service and to maneger yourself and your company name in the service ",
//     person: "Arestotel",
//   },
//   {
//     quote:
//       "if you want to live a happylife in the service of others you can you your time limited so dont waste is living someone else's life.",
//     person: "Stive Jobs",
//   },
//   {
//     quote:
//       "Telll me and I forget . Teacch me and I remember. Involve me and I learn.",
//     person: "Benjamen Franklin",
//   },
//   {
//     quote:
//       "our lives Begin to end the day we become silent about things that metter",
//     person: "MartinLyuter King.",
//   },
// ];
// Yana iqtiboslar qo'shishingiz mumkin
// Tugmani bosganda tasodifiy iqtibosni ko'rsatish
// btn.addEventListener("click", function () {
//   let random = Math.floor(Math.random() * quotes.length);
//   quote.innerText = quotes[random].quote;
//   person.innerText = quotes[random].person;
// });
// let openBtn = document.getElementById("open-btn");
// let modalContainer = document.getElementById("modal-container");
// let closeBtn = document.getElementById("close-btn");
// openBtn.addEventListener("click", function () {
//   modalContainer.style.display = "block";
// });
// closeBtn.addEventListener("click", function () {
//   modalContainer.style.display = "none";
// });
// window.addEventListener("resize", function (e) {
// if (e.target === modalContainer) {
//   modalContainer.style.display = "none";
// }
// });

// const accordion = document.querySelector(".content-container");

// for (let i = 0; i < accordion.length; i++) {
//   this.classList.toggle("active");

// }

const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.querySelector("resetBtn");

let minute = 0;
let secund = 0;
let houre = 0;

function stopWatch() {
  secund++;

  if (secund / 60 === 1) {
    secund = 0;
    minute++;
    if (minute /60 ===1) {
      minute = 0;
      houre++;
    }
  }

  let displayTimer = document.getElementById('timer').innerText = houre + ':' + secund;

}

// window.setInterval(stopWatch,1);





