document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("button");

  const inputBtn = document.querySelector("input");
  loginBtn.addEventListener("dblclick", (event) => {
    //   console.log("btn bosildi");
      console.log(event.type);
  });

  loginBtn.addEventListener("mouseover", (event) => {
    // console.log("contextmenu bosildi");
  });

  loginBtn.addEventListener("click", (event) => {
    inputBtn.value = "";
    inputBtn.focus();
  });

  loginBtn.removeEventListener("click", (event) => {
    inputBtn.value = "";
    inputBtn.focus();
    console.log(event);
  });
});

// const focus = () => {
//   inputBtn.value = "";
//   inputBtn.focus();
// };

// loginBtn.addEventListener("click", focus);

// loginBtn.removeEventListener("click", focus);
