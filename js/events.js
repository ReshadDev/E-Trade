// Cart Sidebar 
const cartSideBar = document.querySelector(".card-sidebar");
const closeBtn = document.querySelector(".cart-close");
const openBtn = document.querySelector(".shopping-cart");
const backDrop = document.querySelector("#backdrop")

// console.log(openBtn);
// console.log(cartSideBar);
// console.log(backDrop);

openBtn.addEventListener("click", function(){
   cartSideBar.classList.add("open");
   backDrop.classList.toggle("closeMask");
})

closeBtn.addEventListener("click",function(){
    cartSideBar.classList.remove("open");
   backDrop.classList.toggle("closeMask");
})

// Account Details

const accDetails = document.querySelector(".my-account-dropdown");
const userBtn = document.querySelector(".my-account");

// console.log(accDetails , userBtn);
userBtn.addEventListener("click",function(){
    accDetails.classList.toggle("openuser")
})