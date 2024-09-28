const inputValue = document.getElementById("inputValue");
const ul = document.getElementById("taskList");
const addBtn = document.getElementById("addTodo");
const moonSun = document.getElementById("moonSun");

// Agar lightDark sinfini ishlatmoqchi bo'lsangiz, uni aniq belgilashingiz kerak
// Misol uchun: const lightDark = document.querySelector(".lightDark") yoki #lightDark

let tasks = [];

// Todo qo'shish funksiyasi
function addTodo() {
  if (inputValue.value.trim() == "") {
    alert("Please enter a task");
  } else {
    const li = document.createElement("li");
    li.innerText = inputValue.value; // Matnni kiriting
    li.classList.add("list-style"); // Sinf qo'shing

    // Delete
    const removeBtn = document.createElement("span");
    removeBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    removeBtn.classList.add("delete");

    removeBtn.onclick = function () {
      li.remove();  // li elementini o'chirish
    };

    li.appendChild(removeBtn); 
    ul.appendChild(li); 
  }

  inputValue.value = ""; // Inputni tozalash
}

// Kecha-kunduz rejimi tugmasi
moonSun.onclick = function () {
  document.body.classList.toggle("dark-light");

  if (document.body.classList.contains("dark-light")) {
    moonSun.src = "img/sun.png";
  } else {
    moonSun.src = "img/moon.png";
  }
};

// Tugmani qo'shish tugmasini bosganda addTodo() funksiyasi ishlaydi
addBtn.onclick = addTodo;

const editTask = (index) => {
const inputValue = document.getElementById('inputValue');

inputValue = tasks[index].text;
tasks.splice(index,1)
}