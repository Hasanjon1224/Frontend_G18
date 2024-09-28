// function sumNumbers(str) {
//     // Matndan raqamlarni ajratib olish
//     let numberStr = str.replace(/\D/g, ''); // \D - raqam bo'lmagan belgilar
//     // Raqam stringini raqamga aylantirish
//     let number = parseInt(numberStr, 10);

//     // Agar hech qanday raqam topilmasa, 0 qaytarish
//     return isNaN(number) ? 0 : number;
//   }

//   // Misollar:
//   console.log(sumNumbers("abc123xyz")); // 123
//   console.log(sumNumbers("no digits here")); // 0

// const a = isFinite(undefined);
// const b = Number.isFinite(true);

// const result = a === b;

// console.log(result);

// const array  = new Array (10);
// const result = array.isArray([1, 2, 3]);

// console.log(result);

// function func(a, b = 2009) {
//   const result = arguments.length === func.length;

//   console.log(result);
// }
// func(95, 262);

// var n = 0;

// while (n < 4) {
// n++;
// }
// console.log(n);

// const result = Object.is(NaN, NaN);
// console.log(result);

// const func = function(a, b) {
// return a + b;
// }
// func(2);
// let result = func.length;
// console.log(result);

// const target = {
//   name: "ecmascript",
// }

// const proxy = new Proxy(target, {});
// proxy.name = "Javascript";
// const result = target.name;
// console.log(result);

// (function (){
//   "use strict";
//   const result = this;
//   console.log(result);

// }());

// const array = new Array(5);
// const map = (value, index) =>index;
// const newArray = array.map(map);
// const result = newArray.join('|');
// console.log(result);

// const obj = {};
// const result = 'toString'in obj;

// console.log(result);

// const result = -1>32;
// console.log(result);

// const array = [1, 2, 3, 4, 5, 6];
// const result = array.copyWithin(3, 0).join("");
// console.log(result);

// let toString = Object.prototype.toString;
// let result = toString.call([]);
// console.log(result);

// let re = /java/i;
// let str = "JavaScript";
// let result = re.test(str);

// console.log(result);

// let result = typeof add;
// function add(first, second) {
//   return first + second;
// }
// console.log(result);

// let out = 262;
// let result = typeof insides;
// if (out) {
//   var insides = 95;
// }
// console.log(result);

// let User = function () {
//   return User;
// };
// let result = typeof new new User();
// console.log(result);

// for (let i = 0; i < 5; i++) {
// setTimeout(() => {
//   console.log(i);
// },0);
// }
// let  array = [1, 2, 3, 4, 5];
// let result = array.find();
// console.log(result);
// const obj = {
//   name: "Javascript",
//}
// Object.freeze(obj);
// obj.name = "Ecmascipt";
// const result = obj.name;
// console.log(result);
// const constructor = function(){};
// const result = constructor.prototype.constructor;
// console.log(result);
// let o = {};
// o[Symbol.toPrimitive] = (hint) => hint;
// const result = o + 10;
// console.log(result);

// let result = [ 1, 2, 3, 4, 5];
// let value = result.splice(1,2);
// result.splice(1,2, ...value);
// console.log(result);

// let value = 95;
// let func = function(){
//   this.value = value++;
//   return func;
// };
// const result = ( new func).value;
// console.log(result);

// let SimpleNumber = function (value) {
//   return value;
// };
// const number = new SimpleNumber(2009);
// let result = number == 2009;
// console.log(result);

// let result =  Math.random();
// console.log(result);

function* generator(a, b, c) {
  for (let i = 0; i < 5; i++) {
    yield i;
  }
}
let result = 0;
for (const value of generator()) {
  result += value;
}

console.log(result);

