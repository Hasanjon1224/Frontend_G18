// "use strict";
// // rest operations
// // function foo( a, b, ...rest) {
// //     console.log(rest);
// //     console.log(a, b, ...rest);
// // }

// // foo(3,4,5,6,53,32);

// //  spread operator
// // const arr = [1,2,3,4,5];
// // const arr2 = [6,7,8,9,0];

// // console.log(arr.concat(arr2));

// // console.log([...arr, ...arr2]);

// // arr destructions

// // const [value1, ...operations] = arr;

// // console.log(value1,operations);

// // const obj = { daxshat: "foo", age: 21 };
// // const obj2 = { udar: 21, kuchli: "bar" };
// // // let { daxshat, age } = obj2;
// // const obj3 = {...obj, ...obj2, age: false ? 23 : 22 };
// // console.log(obj3);
// // console.log(daxshat, age);
// // let ul = document.querySelector("ul");
// // let li = document.querySelectorAll("li");
// // console.log(li);
// // console.log(ul.prepend);
// // console.log(ul.previousElementSibling);
// // console.log(li);
// // const lagan = ul.children[1].style.color = "green";
// // const div = document.querySelector("div")
// // console.log(div.childNodes);
// // console.log(ul.nextSibling)
// // console.log(ul.firstChild);

// // const buttonTwo = document.querySelector(".btn-2");

// // function alertBtn() {
// //   alert("Please enter your email address");
// // }

// // buttonTwo.addEventListener("click", alertBtn);

// // const newBackgroundColor = document.querySelector(".btn-3");

// // function changeBgColor() {
// //   newBackgroundColor.style.backgroundColor = "red";
// // }

// // newBackgroundColor.addEventListener("mouseover", changeBgColor);

// // const revealBtn = document.querySelector(".reveal-btn");

// // const hiddenContent = document.querySelector(".hidden-content");

// // function revealContent() {
// //     if (hiddenContent.classList.contains('.reveal-btn')) {
// //         hiddenContent.classList.remove('.replace-btn');

// //     } else {
// //         hiddenContent.classList.add('.reveal-btn');
// //     }
// // }

// // revealBtn.addEventListener("click", revealContent);

// // event bubling and capturing

// window.addEventListener(
//   "click",
//   function () {
//     // console.log(this.window.screen.width, this.window.screen.height);
//     console.log("window.addEventListener");
//   },
//   true
// );

// document.addEventListener(
//   "click",
//   function () {
//     console.log("document");
//   },
//   true
// );

// document.querySelector(".div2").addEventListener(
//   "click",
//   function (e) {
//     e.stopPropagation();
//     console.log("div 2");
//   },
//   true
// );

// document.querySelector(".div1").addEventListener(
//   "click",
//   function () {
//     console.log("div 1");
//   },
//   true
// );

// document.querySelector("button").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     console.log((e.target.innerText = "clicked"));
//   },
//   true
// );

// document.querySelector("#football").addEventListener("click", function (e) {
//   console.log("football is  clicked");
//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgreen";
//   }
// });

// document.querySelector("#boxing").addEventListener("click", function (e) {
//   console.log("boxing is clicked");
//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgreen";
//   }
// });

// document.querySelector("#Golf").addEventListener("click", function (e) {
//   console.log("golf is clicked");
//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgreen";
//   }
// });

// document.querySelector("#tennis").addEventListener("click", function (e) {
//   console.log("tennis is clicked");
//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgreen";
//   }
// });

// document.querySelector("#Basketboll").addEventListener("click", function (e) {
//   console.log("football clicked");
//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgreen";
//   }
// });
// document.querySelector("#sports").addEventListener("click", function (e) {
//   console.log(e.target.getAttribute("id") + " is selected");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgreen";
//   }
// });

// const sports = document.querySelector("#sports");
// const newSport = document.createElement("li");

// newSport.innerText = "rugby";
// newSport.setAttribute("id", "rugby");

// sports.appendChild(newSport);





