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

const func = function fName () {
return 2009;

}

let result = typeof fName;

console.log(result);
