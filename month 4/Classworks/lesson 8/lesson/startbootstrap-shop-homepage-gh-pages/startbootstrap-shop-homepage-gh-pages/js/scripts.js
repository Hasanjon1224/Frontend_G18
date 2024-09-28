const cardWrapper = document.getElementById("cardWrapper");
const cartCountElement = document.querySelector(".cart-count");
let cart = [];

// Spinnerni ko'rsatish
cardWrapper.innerHTML = `<div class="mx-auto spinner-border text-primary" role="status"><span class="visually-hidden">Loading</span></div>`;

fetch("https://json-api-c6gv.onrender.com/products", {
  method: "GET",
})
  .then((res) => res.json())
  .then((json) => {
    // Spinnerni olib tashlash
    cardWrapper.innerHTML = "";
    json.forEach((element) => {
      printProduct(element);
    });
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });

function printProduct(product) {
  if (!product) {
    console.error("Product is undefined");
    return;
  }

  const title = product.title.split(" ").slice(0, 2).join(" ");
  const sale = product.rating.count <= 250;
  const stars = Math.round(product.rating.rate);
  let star = "";
  for (let i = 0; i < stars; i++) {
    star += "<div class='bi-star-fill'></div>";
  }
  cardWrapper.innerHTML += ` <div class="col mb-5">
            <div class="card h-100">
           ${
             sale
               ? `<div
                class="badge bg-dark text-white position-absolute"
                style="top: 0.5rem; right: 0.5rem"
              >
                Sale
              </div>`
               : ""
           }
              <img
                class="card-img-top p-4 object-fit-contain"
                src="${product.image}"
                alt="${title}"
              height="300" loading = "lazy"/>

              <div class="card-body p-4">
                <div class="text-center">

                  <h5 class="fw-bolder">${title}...</h5>
              <div class="d-flex justify-content-center small text-warning mb-2">
               ${star}
              </div>

                  $ ${product.price}
                </div>
              </div>

              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#"
                    >Add to cart</a
                  >
                </div>
              </div>
            </div>
          </div>`;
}

function addToCart(paramId) {
  fetch(`https://json-api-c6gv.onrender.com/products/${paramId}`)
    .then((json) => json.json())
    .res((res) => {
      cart.push(res);
      cartBtn.textContent = cart.length;
    });
}




const arr = [1,2,3];
let res = 0;
for (const value in arr) {
res += +value;
}
console.log(res);