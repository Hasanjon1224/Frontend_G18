const todos = document.getElementById("Todos");
const list = document.getElementById("list");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const id = new Date().getTime();
  let text = todos.value;
  if (text.trim().length > "") {
    const li = document.createElement("li");
    li.textContent = text;
    li.setAttribute("id", id);
    li.addEventListener("click", (event) => {
      const clickElId = event.target.getAttribute("id");
      list.classList.add("list-group-item");
      const clickEl = document.getElementById(clickElId);
      console.log(clickEl);
      if (clickEl) {
        clickEl.classList.add("text-decoration-line-through");
      }
    });
    list.appendChild(li);
    todos.value = "";
  } else {
    alert("inputga malumot kiriting...");
  }
});
