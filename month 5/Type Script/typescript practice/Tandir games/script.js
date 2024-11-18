"use strict";

// class Car {
//     private brand: string;

//     constructor(brand: string) {
//       this.brand = brand;
//     }

//     public showBrand() {
//       console.log(this.brand);
//     }
//   }

//   const myCar = new Car('Tesla');
//   myCar.showBrand();  // "Tesla" ni chop qiladi
//   console.log(myCar.brand);  // Xato beradi, chunki `brand` private

// const result = typeof Object;

// console.log(result);

// const a = [1, 2, 3, 4, 5];
//  const result = a.shift() - a.pop();
//  console.log(result);

// let items = [95, 262, 2015, 2009];
// let noop = (value) => value;
// for (let i = 0; i < items.length; i++) {
//   noop(items[i]);
// }
// const result = i;
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// arr.namedKey = 4;
// let result = 0;

// for (const key in arr) {
//   result += key;
// }

// console.log(arr);

// let result = null + [0,[1]][1][0];
// console.log(result);

// let result = typeof function () {};
// console.log(result);

// let prop = 95;
// const result = Array.from({length:5},(_, i) => i);
// const result = 10>9>8;
// const arr = [1, 2, 3];
// const result = arr.unshift(0);
// console.log(result);

// const arr = [1, 2, 3];
// arr[10] = 10;
// const result = arr.length;
// console.log(result);
// const map = v => v * v;
// const arr = Array.from([1, 2, 3], map);
// let result = arr.join("");
// console.log(result);

// let outside = 262;
// const result = typeof inside;

// if (outside) {
//     var inside = 95;
// }

// const first =  Math.pow(2,53);
// const second = Math.pow(2,53) + 1;
// console.log(first);

// const result = second;

// let result = [1, 2, 3, 4, 5];
// let value = result.splice(1, 2);
// result.splice(1, 2, ...value);
// console.log(result);

// let User = function (name) {
//   this.name = name;
//   return {
//     version: "Javascript",
//   };
// };

// const user = new User("Brendan");
// const result = user.version;

// let toString = Object.prototype.toString;
// let result = toString.call([])

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(array.slice(1, 3));

// let array = [1, 2, 3, 4, 5, 6, 7];
// let result = Array.isArray(array);
// const items = [1, 32, 32, 43];
// const index = (value) => value;
// for (let i = 0; i < items.length; i++) {
//   index(items[i]);
// }
// var result = i;

// let array = [1, 32, 32,];
// array[10] =10;
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }
// let result = array.length;
// console.log(result);
// console.log(0.1+0.2 === 0.3);
// let f = (r, v) => r+v;
// let result = [1, 2, 3].reduce(f,0);
// console.log(result);
// const doThis = function doThat() {
// }
// let result = doThis.bind().name;
// console.log(result);

// let obj = new Object()
// let result = obj.__proto__instanceof Object(obj)
// let value = 9;
// const obj = {};
// obj: {
// value: ++value;
// }
// let result = obj.value + value;
// let result = (-~12.34);

// const func = function fName () {
// return 2009;
// }
// let result = typeof fName;

// let arr = [
//   "one",
//   ["two"],
//   ["three", "four", "five", "six"],
//   ["seven", "eight", "nine", "ten"],
//   ["eleven", "twelve"],
//   "thirteen",
//   ["fourteen", "fifteen", "sixteen"],
//   ["twenty", "thirty"],
// ];

// console.log(arr);

// const person = {}
// console.log(person);

// let func = function (name, value) {
//     return console.log(`${name}, ${value} yoshda`);
// }

// func("Hasanjon", 21)

// const more = typeof (() => {})
// console.log(more);

// const array = [1, 2, 3];
// array.namedKey = 6;
// let result = 0;

// for (const key in array) {
//     result+=key;
// }
//    console.log(result);

// let str = "Salom";
// str.localeCompare("salom");
// console.log(str);

// const items = [1, 2, 3, 4, 5];
// const noop = (value) => value;
// for (let i = 0; i < items.length; i++) {
//   noop(items[i]);
// }

// const result = items[i];


// const f = (r, v)=> r + v;
// const result = [1, 2, 3].reduce(f,0);
// let array = [1, 2, 3];
// let map= (v, i)=> v*i;
// let result = array.map(map);

// let result = "Hello";
// result.padStart(10, "x");

// let result = ~~ (12.34)

// let User = function(name){
//   this.name = name;
//   return {
//     version: "JavaScript"
//   }
// }

// let user = new User("Brendan");
// let result = user.name;

// let result = [1, [2,3], [4,[5]]].flat(2);

// function func(a, b = 2009) {
//     const result = arguments.length == func.length
//     console.log(result);
// }

// func(95, 262);



// let a= [1, 2, 3, 4, 5];
// let result = a.shift()- a.pop();

// const result = null + [0, [1]][1][0];
// let result = 10 > 9 > 8;
// let array = [1, 2, 3];
// let result=array.unshift(0);
// let map = variables => variables * variables;
// let array = Array.from([1, 2, 3], map);
// let result = array.join("");

// let first = Math.pow(2,53);
// let second = Math.pow(2,53)+1;
// let result = first === second;
// let result = [1, 2, 3, 4, 5];

// let value = result.splice(1,2);
// result.splice(1,2, ...value)
// let result = typeof add;
// function add(first, second) {
//     return first + second;
// }

                // const toString = Object.prototype.toString;
                // let result = toString.call([]);
// const func = function (first, second = 3){
//     return first + second;

// }

// func(2)
// let result = func.length;
// class User {
//     getName(){}
// }
// let result = typeof User;
// const str = "Javascript";
// str.value = 3009;
// let result = str.value;
// console.log(result);

// const arr = [1,2,3]
// arr[10]= 10;
// let result = arr.length;
// let name = "javascript";
// const func = function () {
//     return this.name;
// }

// const obj = {
//     name: "Ecmascript",
//     func: func
// }

// const result = obj.func()
// let p = [1,2,3,4,5];
// let result = Math.max.apply(10, p);
let a = [1,2,3,4,5]
let result = a.shift() - a.pop();

console.log(result);