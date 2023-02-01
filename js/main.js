

// Mapping Shop Objects Into a div

const shopDiv = document.querySelector("#shop-boxes");

// console.log(shopDiv);

data.map((item)=>{
    shopDiv.innerHTML += `
    <div class="col-xl-4 col-sm-6">
    <div class="axil-product product-style-one mb--30">
        <div class="thumbnail">
            <a>
                <img class="img-fluid" src=${item.src} alt="Product Images">
            </a>
            <div class="label-block label-right">
                <div class="product-badget">${item.saleofdegree}% OFF</div>
            </div>
            <div class="product-hover-action">
                <ul class="cart-action">
                    <li class="wishlist">
                        <a >
                            <i class="far fa-heart"></i>
                        </a>
                    </li>
                    <li class="select-option">
                        <a class="add-to-cart" >Add to Cart</a>
                    </li>
                    <li class="quickview">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal">
                            <i class="far fa-eye"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="product-content">
            <div class="inner">
                <h5 class="title"><a>${item.name}</a></h5>
                <div class="product-price-variant">
                    <span class="price current-price">$${item.currprice}</span>
                    <span class="price old-price">$${item.oldprice}</span>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})



