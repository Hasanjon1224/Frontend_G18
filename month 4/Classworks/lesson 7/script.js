"use strict";
// const  res =  fetch("https://jsonplaceholder.typicode.com/users");
// res.then((res) => res.json()).then((data) => console.log(data)).catch(error => console.log(error)).finally(() => console.log("done"));
// console.log(res);

// console.log(1);

// setTimeout(function () {
//   console.log(2);
// }, 0);

// Promise.resolve()
//   .then(function (res) {
//     console.log(3);
//   })

//   .then(function (res) {
//     console.log(4);
//   });

// res.then((res) => res.json());
// res.catch((err) => res  = err   ? err.json() :  null);  //
// this.setState({ res }); //

// console.log("begin");

// setTimeout(() => {
// console.log("settimwoout 1");
// Promise.resolve().then(() => {

// });
// })

// function add(a, b, callback) {
//     console.log(`${a} va  ${b}larning yig'indisi ${a+b}...`);
//     callback();
// }

// function display() {
// console.log("bu qator yig'indidan keyin chiqadi.");
// }

// add(1, 2, display);

// function add(a, b, callback) {
//     console.log(`${a} va  ${b} larning yig'indisi ${a+b}.`);
//     callback();
// }

// add(1, 2, function display() {
//     console.log("bu qator yig'indidan keyin chiqadi.");
// });

// const myFunction = (callbackFunction) => {
//   let number = 52;
//   callbackFunction(number);
// };
// myFunction((value) => {
//   console.log(value);
// });

// let isBookShopOpen =false;
// let wellGetBook = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (isBookShopOpen) {
//       let book = {
//         title: "the big book of the knowledge",
//         author: "Brown Watson",
//       };

//       resolve(book);
//     } else {
//       let reason = new Error("Kitob do`koni yopiq");
//       reject(reason);
//     }
//   }, 1500);
// });

// wellGetBook
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error.message));

// const names = ["husan", "sohib", "yusuf", "abubakir", "xushnud"];
// const newNames = [];
// names.forEach(function (name, index) {
//   let named =
//     name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "xon";
//   newNames.push(named);
//   console.log(named, index);
// });

// console.log(newNames);

// class User {
//   getName() {}
// }
// const result = typeof User;
// console.log(result);
// const result = 'JavaScript'.indexOf('Script', 3);
// console.log(result);

// console.log("begins");
// setTimeout(() => {
//   console.log("setTimeout 1");
//   Promise.resolve().then(() => {
//     console.log("prpomise 1");
//   });
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log("promise 2");
//   setTimeout(function () {
//     console.log("settimout 2");
//     resolve("resolve 1");
//   }, 0);
// }).then((res) => {
//   console.log("dot then 1");
//   setTimeout(() => {
//     console.log(res);
//   }, 0);
// });

// async function async1() {
//   console.log("asyn1 start");

//   await async2();
//   console.log("asyn1 end");
// }

// async function async2() {
//   console.log("asyn2");
// }

// console.log("script start");

// setTimeout(function () {
//   console.log("settimout");
// }, 0);

// async1();

// new Promise(function (resolve) {
//   console.log("promise 1");
//   resolve();
// }).then(function () {
//   console.log("promise 2");
// });

// console.log("script end");
// javob: 

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);




