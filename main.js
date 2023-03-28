const productContainer = document.querySelector("#product-container");
const categorySeclect = document.querySelector("#category-seclect");


fetch("https://dummyjson.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    upadateProductCOntainerUI(data.product);

    categorySeclect.addEventListener("change", (event) => {
      const filteredProduct = data.products.filter ((product) => product.category === event.target.value || event.target.value === "all");

    //  update ui
    upadateProductCOntainerUI(filteredProduct)
    });
  })

  .catch((error) => {
    console.log(error.message);
  });

function generateProductMarkup(product) {
  return `<div class="col-12 col-md-6 col-xl-3">
    <div class="card">
      <img
        src="${product.thumbnail}"
        class="card-img-top"
        alt="${product.title}"
      />
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text truncate-truncate line-clamp-2">
          ${product.description}
        </p>
        <a href="#" class="btn btn-primary w-100">Show Info </a>
      </div>
    </div>
  </div>`;
}


function upadateProductCOntainerUI(product)
productContainer.innerHTML = data.products.reduce((markup, product) => {
    return markup + generateProductMarkup(product);
  }, "");