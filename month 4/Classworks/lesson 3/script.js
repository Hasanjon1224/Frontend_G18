// const result = Math.sqrt(4);
// console.log(result);

// const result = typeof NaN;
// console.log(result);
// const x = 0;
// const number = x!==x;

// console.log(number);

// elementlarni o`chirish
// splice metodi
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let removed = fruits.splice(1, 2);
// console.log(fruits); // ["Apple", "Orange"]
// console.log(removed); // ["Banana", "Mango"]

//  elementlarni qo`shish

// let fruits = ["Apple", "Banana"];
// fruits.splice(1, 0, "Mango", "Orange");
// console.log(fruits);
// ["Apple", "Mango", "Orange", "Banana"]

//  elementlarni alamashtirish

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let removed = fruits.splice(1, 2, "Grapes", "Pineapple");
// console.log(fruits); // ["Apple", "Grapes", "Pineapple", "Orange"]
// console.log(removed); // ["Banana", "Mango"]

// slice metodi
// massivni bir qismini kesib olish

// indexdan nechtadir kesish
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let sliced = fruits.slice(1, 3);
// console.log(sliced); // ["Banana", "Mango"]
// console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// massivni nusxasini yaratish
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let copy = fruits.slice();
// console.log(copy);
// ["Apple", "Banana", "Mango", "Orange"]

// let one = 1 == true; // true;

// console.log(one);

// curly brackets = {};
//  new = object yaratish

// const memoriazationAddition = () => {
// let cache = {};

// return (value) => {
// if (value in cache) {
//     console.log("fetching from catche");
//     return cache[value];

// } else {

//     console.log("calculate result");
// let result = value+20;
// cache[value] = result;
// return result;

// }
// }
// }

// const addition = memoriazationAddition();
// console.log(addition(20));
// console.log(addition(20));

// document.addEventListener("DOMContentLoaded", () => {
//   const clickButton = document.getElementById("clickButton");
//   const clickCount = document.getElementById("clickCount");
//   let count = 0;
//   clickButton.addEventListener("click", () => {
//     count++;
//     clickCount.textContent = count;
//     clickCount.style.transform = "scale(1.5)";
//     setTimeout(() => {
//       clickCount.style.transform = "scale(1)";
//     }, 200);
//   });
// });

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, n) => acc + n, 0);

// console.log(sum);

// console.log(typeof null + Boolean - true)

// function numbers(calback, x, y) {
//     const result = (x +y);
//     calback(result);

// }

// function showResult(params) {

// }

// numbers( showResult, 1,3)

// for (let i = 0; i <= 100000000; i++) {

// }

// console.log("Hasanxon qanday");


// const number = {
//   name: "Hasanxon",
//   age: 18,
// };

// for (const key in number) {
//   console.log(key);
//   console.log(number[key]);
// }
// console.log("name" in number);

// function nechtadir() {
//   console.log(arguments);
// }

// nechtadir(1, 2, 3, 4);

//  arguments kalit so`zi fumksiyaga qiymat bermasdan qiymatlarni olish

// let code = "console.log('Hello, World!')";
// eval(code); // "Hello, World!" ni konsolga chiqaradi

// let userCode = prompt("Enter your code:");
// eval(userCode); // Xavfsizlikka tahdid

let jsonString = '{"name": "John", "age": 30}';
let obj = JSON.parse(jsonString);
console.log(obj); // John



