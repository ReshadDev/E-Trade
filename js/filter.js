
// Filter Gallery

const btns = document.querySelectorAll(".filter-btns button");
const imgs = document.querySelectorAll(".filtered-cards .item");

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click",filterImg)
}
function setActiveBtn(e){
    btns.forEach(btn => {
        btn.classList.remove("active")
    })

    e.target.classList.add("active")
}

function filterImg(e){
    setActiveBtn(e);

    imgs.forEach(img =>{
        img.classList.remove("d-none");
        img.classList.add("d-block");


        const imgType = parseInt(img.dataset.img);
        const btnType = parseInt(e.target.dataset.btn);

        if(imgType !== btnType){
            img.classList.remove("d-block");
            img.classList.add("d-none")
        }
    })

   
}

btns[0].addEventListener("click",(e)=>{
    setActiveBtn(e);

    
    imgs.forEach(img =>{
        img.classList.remove("d-none");
        img.classList.add("d-block");

    })
})