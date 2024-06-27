import {Products} from "./products.js"
import {Cart} from "./Mycart.js"



//=========to retrive data from arry to format===============
let getHTML = '';

Products.forEach((product) => {
  getHTML += `
        <div class="col-sm-12 ms-5 mt-3  col-lg-2 m-lg-5   col-md-3 m-md-4">
        <div class="card" style="width: 14rem;">
          <img src="${product.image}" class="card-img-top asset-size" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bold fText">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <a href="#" class="btn btn-primary js-download-button data-product-id="${product.id}" data-product-id="${product.id}" data-product-name="${product.name}" ">Download</a>
          </div>
        </div>
      </div>
    `
});
//===============give the data to html page=============
document.querySelector(".js-products").innerHTML = getHTML;



//==================add product to cart=====================
document.querySelectorAll('.js-download-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      let getName, getId = ``;

      getId = button.dataset.productId;
      getName = button.dataset.productName;

      let isExist = ``;
      Cart.forEach((iteam) => {
        if (getId === iteam.id) {
          isExist = iteam;
        }
      });

      if (isExist) {
        isExist.quantity++;
      } else {
        Cart.push({
          id: getId,
          name: getName,
          quantity: 1

        });
      }
      console.log(Cart);
    });
  });

//=====================================
