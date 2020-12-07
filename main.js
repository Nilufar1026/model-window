"use strict";

const modal=document.querySelector(".modal")
const overlay=document.querySelector(".overlay")
const btnCloseModel=document.querySelector(".close-modal")
const btnOpenModel=document.querySelectorAll(".show-modal")

function showCard(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
function hideCard(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}


for(let btn of btnOpenModel){
    btn.addEventListener("click",function(){
        showCard()   
    })
    btnCloseModel.addEventListener("click",function(){
        hideCard()
    })
    overlay.addEventListener("click",function(){
        hideCard()
    })
    document.addEventListener("keydown",function(e){
        if(e.key==="Escape"){
            hideCard()
        }
    })
}
