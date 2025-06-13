// Store data recieve from API make an array

let productData = [];

// API

fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // Console API data
    console.log(data);
    productData = data;
    displayData();
  });

// console.log(products);

// For storing data in UI
function displayData() {
  const container = document.getElementById("container");
  productData.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
            <img src="${product.image}" class="product-image" alt="${
      product.title
    }">
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <span class="product-category">${product.category}</span>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;

    container.appendChild(card);
  });
}
