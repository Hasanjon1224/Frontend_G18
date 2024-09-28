const quoteWrapper = document.getElementById("quoteWrapper");
const inputTitle = document.getElementById("title");
const inputText = document.getElementById("text");
const submit = document.getElementById("submit");
const editSubmit = document.getElementById("editSubmit");

let currentState = null;

window.addEventListener("DOMContentLoaded", () => {
  render();
});

function clearInputs() {
  inputTitle.value = "";
  inputText.value = "";
}

function render() {
  fetch("https://json-api-c6gv.onrender.com/todos")
    .then((res) => res.json())
    .then((data) => {
      console.log("render");

      quoteWrapper.innerHTML = "";
      data.forEach((todo) => {
        quoteWrapper.innerHTML += `<div class="col-md-4 mb-3">
      <div class="card p-4 shadow">
      <h3>${todo.title}</h3>
      <p>${todo.text}</p>
      
      <button class="btn btn-success mb-2" onclick = "editTodo(${todo.id})">Edit</button>
      <button class="btn btn-danger" onclick = "deleteTodo(${todo.id})">Delete</button>
      
      </div>
      </div>`;
      });
    });
}

function deleteTodo(cardId) {
  fetch(`https://json-api-c6gv.onrender.com/todos${cardId}`, {
    method: "DELETE",
  }).then(() => {
    render();
  });
}

function createTodo() {
  fetch("https://json-api-c6gv.onrender.com/todos", {
    method: "POST",
    body: JSON.stringify({
      id: Date.now(),
      title: inputTitle.value,
      text: inputText.value,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    clearInputs();
    render();
  });
}

function editTodo(id) {
  currentState = id;
  fetch(`https://json-api-c6gv.onrender.com/todos/${id}`)
    .then((res) => res.json())
    .then((data) => {
      inputText.value = data.text;
      inputTitle.value = data.title;
    });
}

function submitEditTodo(id) {
  fetch(`https://json-api-c6gv.onrender.com/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: Date.now(),
      title: inputTitle.value,
      text: inputText.value,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    clearInputs();
    render();
  });
}

submit.addEventListener("click", () => {
  if (!inputTitle.value.trim() && !inputText.value.trim()) {
    alert("Please enter a title and  text before submitting the form");
  } else {
    createTodo();
  }
});

editSubmit.addEventListener("click", () => {
  console.log(currentState);

  submitEditTodo(currentState);
});
