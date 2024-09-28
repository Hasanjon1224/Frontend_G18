"use strict";
const x = document.getElementById("title");
// const input = document.getElementById("name");
const btn = document.getElementById("btn");
const warn = document.getElementById("warn");

// console.log(x);
const input = document.getElementById("text");

function foo() {
  let words = input.value.trim().split(" ");
  const result = words.filter((item) => item !== "");
  console.log(result.length);

  // console.log((words.trim().replaceAll(" ", "").split(" ")));

  // console.log((words.split(".")));
}

function bar() {
  if (input.value.length < 8) {
    warn.textContent = "parol ishonchsiz";
    warn.style.color = "red";
  } else {
    warn.textContent = "parol ishonchli";
    warn.style.color = "green";
  }
}

btn.onchange = bar;

// let son1 = document.getElementById("number-1");
// let son2 = document.getElementById("number-2");

// function add() {
//     let qiymat = son1.value;
//     let qiymat2 = son2.value;

//     const result = qiymat + qiymat2;

// }
