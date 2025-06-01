// Store data recieve from API make an array

let productData = [];

// API

fetch("https://api.escuelajs.co/api/v1/products")
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
              product?.images?.[0] ||
              product?.images?.[1] ||
              product?.images?.[2] ||
              product?.images?.[3]
            }" "width = "100px" height = "100px"" alt="">
            <p>${product.price}</p>
            <p>${product.title}</p>

    </div>
    </div>`;
  }
},1000);
