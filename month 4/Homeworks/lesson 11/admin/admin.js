const cardWrapperAdmin = document.getElementById("cardWrapperAdmin");

const btnAdd = document.getElementById("btnAdd");
const btnEdit = document.getElementById("btnEdit");
const form = document.getElementById("productForm");

const mahsulotlar = JSON.parse(localStorage.getItem("mahsulotlar")) || [];

function mahsulotlarniKorsatish() {
  const royxat = document.getElementById("cardWrapperAdmin");
  royxat.innerHTML = "";
  mahsulotlar.forEach((Element, index) => {
    const mahsulotElement = document.createElement("div");
    mahsulotElement.className = "mahsulot";
    mahsulotElement.innerHTML = ` 
      <img src="${Element.rasm}" alt="${Element.nom}">
      <div class="input-container">
        <h2>${Element.nom}</h2>
        <p>Narxi: $${Element.narx} dollar</p>
      </div>
      <button onclick="mahsulotniYangilash(${index})">Update</button>
      <button onclick="mahsulotniOchirish(${index})">Delete</button>
    `;
    royxat.appendChild(mahsulotElement);
  });
}

function mahsulotniQoshish() {
  const titleInput = document.getElementById("title").value;
  const priceInput = document.getElementById("price").value;
  const rateInput = document.getElementById("rate").value;
  const imageUrlInput = document.getElementById("imageUrl").files[0];
  const countInput = document.getElementById("count").value;
  
  if (priceInput && titleInput && imageUrlInput) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const yangiMahsulot = {
        nom: titleInput,
        narx: priceInput,
        rasm: e.target.result,
        rate: rateInput,
        count: countInput,
      };
      mahsulotlar.push(yangiMahsulot);
      saqlash();
      mahsulotlarniKorsatish();
    };

    reader.readAsDataURL(imageUrlInput);
  } else {
    alert("Iltimos, maydonlarni to'ldiring");
  }
}

function mahsulotniOchirish(index) {
  mahsulotlar.splice(index, 1);
  saqlash();
  mahsulotlarniKorsatish();
}

function mahsulotniYangilash(index) {
  const yangiNom = prompt("Yangi nom kiriting:", mahsulotlar[index].nom);
  const yangiNarx = prompt("Yangi narx kiriting:", mahsulotlar[index].narx);
  
  if (yangiNom && yangiNarx) {
    mahsulotlar[index].nom = yangiNom;
    mahsulotlar[index].narx = yangiNarx;
    saqlash();
    mahsulotlarniKorsatish();
  }
}

function saqlash() {
  localStorage.setItem("mahsulotlar", JSON.stringify(mahsulotlar));
}

mahsulotlarniKorsatish();
