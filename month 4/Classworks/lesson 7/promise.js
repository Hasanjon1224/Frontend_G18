// let users = [
//   {
//     name: "Behruz",
//     lastName: "Xolmatov",
//     name: "Shaxboz",
//     lastName: "Yodgorov",
//     name: "Dilbar",
//     lastName: "Esanova",
//   },
// ];

// function getUsers() {
//   setTimeout(() => {
//     let result = "";
//     users.forEach((user) => {
//       result += `<li>${user.name}, ${user.lastName}</li>`;
//     });
//     document.body.innerHTML = result;
//   }, 1000);
// }

// function addUser(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       users.push(user);
//       const error = false;
//       if (error) {
//         resolve(user);
//       } else {
//         reject("nimadir xato");
//       }
//     }, 2000);
//   });
// }

// addUser({name:"Eshmat", lastName:"Toshmatov"}).then(getUsers).catch(err => console.log(err));

// console.log("begins");

// setTimeout(() => {
//   console.log("setTimeout 1");
//   Promise.resolve().then(() => {
//     console.log("promise 1");
//   });
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log("promise 2");
//   setTimeout(function () {
//     console.log("setTimeout 2");
//     resolve("resolve 1");
//   }, 0);
// }).then((res) => {
//   console.log("dot then 1");
//   setTimeout(() => {
//     console.log(res);
//   }, 0);
// });

const condition = false;

const myPromise = new Promise((resolve, reject) => {
    setTimeout (function () {
resolve("I love you");
    }, 1500);
//   if (condition) {
//     resolve("vazifa bajarildi");
//   } else {
//     reject("vazifa bajarilmadi");
//   }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// console.log(myPromise);
