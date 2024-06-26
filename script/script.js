
//=========to retrive data from arry to format===============
let getHTML='';

Products.forEach((product)=>{
    getHTML+=`
        <div class="col-sm-12 ms-5 mt-3  col-lg-2 m-lg-5   col-md-3 m-md-4">
        <div class="card" style="width: 14rem;">
          <img src="${product.image}" class="card-img-top asset-size" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bold  fText">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <a href="#" class="btn btn-primary">Download</a>
          </div>
        </div>
      </div>
    `
});

//===============give the data to html page=============
document.querySelector(".js-products").innerHTML=getHTML;