const email = document.getElementById("input-1");
const parol = document.getElementById("input-2");

const chiqarish = document.getElementsByClassName("exit");

function yaroqli() {
  if (parol.value.length <= 4) {
    alert("parol ishonchsiz");
    chiqarish.style.color = "yellow";
  } else if (parol.value.length > 4 && parol.value.length <= 8) {
    alert("ishonchli");
    chiqarish.style.color = "green";
  } else {
    alert ("Murakkab parol");   
    chiqarish.style.color = "blue";
  }
}
