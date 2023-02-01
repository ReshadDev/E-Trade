

// Add To Cart Functions


let addCart = document.querySelectorAll(".add-to-cart");
for(let  i = 0 ; i  < addCart.length ; i++){
    addCart[i].addEventListener("click",function(){
        clickedProduct(data[i]);
        totalCost(data[i]);
        quantityChange(data[i])
    })
}

// Sehife refresh olduqda kartda olan produktlarin sayinin getmesinin qarsisini almag ucun istifade edirik

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers){
        document.querySelector(".cart-page span").textContent = productNumbers;
    }
}

function clickedProduct(product){
    let productNumbers = localStorage.getItem('cartNumbers');
   
    productNumbers = parseInt(productNumbers);
    // Burada deyirem ki eger hemin produkt localstoragede varsa, var oludugu ucun 1 dir. Her click olanda onu artir.
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector(".cart-page span").textContent = productNumbers + 1;
    }
    // Eger produkt orda yoxdursa onda ilk elave olunduqda quantity si 1 olsun
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(".cart-page span").textContent = 1
    }
    setItems(product);

}


function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    // Burada ise parse ederek cartItemsi yeniden  
    cartItems = JSON.parse(cartItems);

    console.log('My CartItems are' , cartItems);

    // Existing in localStorage
    // Kartda olan produktun sayini artiririq
    if(cartItems !== null){
        if(cartItems[product.name] == undefined){
            cartItems = {
                ...cartItems,
                [product.name] : product
            }
        }
         cartItems[product.name].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.name] : product
        }
    }
  

    // LocalStorageye set etdiyimiz zaman obyekt seklinde olur. Onun ucun onu json a cevirik

    localStorage.setItem('productsInCart' ,JSON.stringify(cartItems) )
}

function totalCost(product){
    // console.log("Product price is " , product.currprice);

    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is" , cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost' , cartCost + (product.currprice * product.inCart))
    }else{
        localStorage.setItem('totalCost' , product.currprice)
    }

}


function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-details");
    let finalPrice = document.querySelector(".order-subtotal")

    let cartCost = localStorage.getItem('totalCost')


    if(cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map((item)=>{
            productContainer.innerHTML += 
            `
            <div class="product row" id=${item.id}>
                            <div class="col-md-1 product-remove">
                                <a href="#" class="remove-wishlist"><i class="fa-solid fa-xmark"></i></a>
                            </div>
                            <div class="col-md-2 product-thumbnail">
                                <a href="single-product.html">
                                    <img src=${item.src} alt="Digital Product">
                                </a>
                            </div>
                            <div class="col-md-3 product-title">
                                <a href="single-product.html">${item.name}</a>
                            </div>
                            <div class="col-md-2 product-price">
                                <span class="currency-symbol">$</span>${item.currprice}
                            </div>
                            <div class="col-md-2 product-quantity">
                                <td class="product-quantity" data-title="Qty">
                                    <div class="pro-qty">
                                        <span class="dec qtybtn qq">-</span>
                                        <input type="number" class="quantity-input dc" value="${item.inCart}">
                                    <span class="inc qtybtn qq">+</span>
                                </div>
                                </td>
                            </div>
                            <div class="col-md-2 product-subtotal-2">
                                $${item.currprice}
                            </div>
                        </div>
            `
        });
     

        finalPrice.innerHTML += `
        <td>Subtotal</td>
        <td class="new-total-value">$${cartCost}</td>
        `


    }
}

function quantityChange(product) {
    const plusBtnNew = document.querySelectorAll(".inc")
    const minusBtnNew = document.querySelectorAll(".dec");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    
   
  
    for (let i = 0; i < plusBtnNew.length; i++){
    let btn = plusBtnNew[i];
    btn.addEventListener("click",function(event){
        let mainid = event.target.parentElement.parentElement.parentElement.id;
        let mainInput = event.target.parentElement.children[1];
        let subtotal2 = event.target.parentElement.parentElement.parentElement.children[5];

       const box = Object.values(cartItems).map((item)=>{
         if(item.id == mainid){
            
         item.inCart +=1
         mainInput.value = item.inCart;
         let productNumbers = localStorage.getItem('cartNumbers');
         productNumbers = JSON.parse(productNumbers)
         localStorage.setItem('cartNumbers', productNumbers + 1);
         document.querySelector(".cart-page span").textContent = productNumbers + 1;

        //  Updating Subtotal value        
        subtotal2.innerHTML = `
        <span class="currency-symbol">$</span>${(item.inCart * item.currprice)}
        `
        

    
         return item
         }
       return item;
        })
      
    localStorage.setItem('productsInCart' ,JSON.stringify(box))
      })
    }

    for (let i = 0; i < minusBtnNew.length; i++){
        let btn = minusBtnNew[i];
        btn.addEventListener("click",function(event){
            let mainid = event.target.parentElement.parentElement.parentElement.id;
            let mainInput = event.target.parentElement.children[1];
            let subtotal2 = event.target.parentElement.parentElement.parentElement.children[5];
           const box = Object.values(cartItems).map((item)=>{
             if(item.id == mainid){
    
             item.inCart -=1
             mainInput.value = item.inCart;
             let productNumbers = localStorage.getItem('cartNumbers');
         productNumbers = JSON.parse(productNumbers)
         localStorage.setItem('cartNumbers', productNumbers - 1);
         document.querySelector(".cart-page span").textContent = productNumbers - 1;


          //  Updating Subtotal value        
        subtotal2.innerHTML = `
        <span class="currency-symbol">$</span>${(item.inCart * item.currprice)}
        `
         
             return item
             }
           return item;
            })
          
        localStorage.setItem('productsInCart' ,JSON.stringify(box))
          })
        }
    

  
    
}


function removeProduct(){
let totalValue = document.querySelector(".new-total-value");

    let buttons = document.querySelectorAll(".remove-wishlist i");
    for(let i = 0; i < buttons.length ; i++){
        buttons[i].addEventListener("click",function(event){
            let div = event.target.parentElement.parentElement.parentElement;
            div.classList.add("d-none");
            console.log(div);
            const productData = JSON.parse(localStorage.productsInCart)
            const newProductData = Object.values(productData).filter(item => item.id != div.id)
            localStorage.setItem("productsInCart" , JSON.stringify(newProductData))
            const newData = newProductData.reduce((acc,item)=> acc + item.currprice,0);
            console.log(newData);
            localStorage.setItem("totalCost" , newData)
            totalValue.innerHTML = `$${newData}`;
            
        })
    }
}

onLoadCartNumbers();


displayCart();

quantityChange();

removeProduct();
