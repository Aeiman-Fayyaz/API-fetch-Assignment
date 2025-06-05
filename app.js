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
  });

// console.log(products);

// For storing data in UI
const container = document.getElementById("container");
setTimeout(function () {
  for (let i = 0; i < productData.length; i++) {
    console.log(productData[i]);
    let product = productData[i];
    container.innerHTML += `<div>
   <div>
            <img src="${
              product.image[0] ||
              product.image[1] ||
              product.image[2] ||
              product.image[3] ||
              product.image[4] 
            }" width = "100px" height = "100px" >
            <p>${product.category}</p>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <p>${product.title}</p>
    </div>
    </div>`;
  }
},1000);
