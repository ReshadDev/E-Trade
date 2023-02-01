const toglbtn = document.querySelector("#checkbox2");
const formDetails = document.querySelector(".form-details")

toglbtn.addEventListener("click" ,function(){
    formDetails.classList.toggle("d-none")
})

const loginOpenBtn = document.querySelector(".openbtn-1");
const loginModal = document.querySelector(".axil-checkout-login");


const couponOpenBtn = document.querySelector(".openbtn-2");
const couponModal = document.querySelector(".axil-checkout-coupon");

loginOpenBtn.addEventListener("click",function(){
   
    loginModal.classList.toggle("d-none")
})



couponOpenBtn.addEventListener("click",function(){
    couponModal.classList.toggle("d-none")
})