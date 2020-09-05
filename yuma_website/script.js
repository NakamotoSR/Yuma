'use strict';

// スクロールアニメーション ---------------------------------------------

const targetElement = document.querySelector(".concept");
document.addEventListener("scroll", function(){
    const getElementDistance = targetElement.getBoundingClientRect().top + 
    targetElement.clientHeight * 0.4;
    if (window.innerHeight > getElementDistance) {
        targetElement.classList.add("show");
    }
})

const targetElement02 = document.querySelector(".profile-container");
document.addEventListener("scroll", function(){
    const getElementDistance02 = targetElement02.getBoundingClientRect().top + 
    targetElement02.clientHeight * 0.3;
    if (window.innerHeight > getElementDistance02) {
        targetElement02.classList.add("show");
    }
})

const targetElement03 = document.querySelector(".profile-lecturer");
document.addEventListener("scroll", function(){
    const getElementDistance03 = targetElement03.getBoundingClientRect().top + 
    targetElement03.clientHeight * 0.3;
    if (window.innerHeight > getElementDistance03) {
        targetElement03.classList.add("show");
    }
})

const targetElement04 = document.querySelector(".profile-radio");
document.addEventListener("scroll", function(){
    const getElementDistance04 = targetElement04.getBoundingClientRect().top + 
    targetElement04.clientHeight * 0.3;
    if (window.innerHeight > getElementDistance04) {
        targetElement04.classList.add("show");
    }
})

const targetElement05 = document.querySelector(".subject");
document.addEventListener("scroll", function(){
    const getElementDistance05 = targetElement05.getBoundingClientRect().top + 
    targetElement05.clientHeight * 0.8;
    if (window.innerHeight > getElementDistance05) {
        targetElement05.classList.add("show");
    }
})

const targetElement06 = document.querySelector(".lecture-contents");
document.addEventListener("scroll", function(){
    const getElementDistance06 = targetElement06.getBoundingClientRect().top + 
    targetElement06.clientHeight * 0.8;
    if (window.innerHeight > getElementDistance06) {
        targetElement06.classList.add("show");
    }
})

const targetElement07 = document.querySelector(".price-list");
document.addEventListener("scroll", function(){
    const getElementDistance07 = targetElement07.getBoundingClientRect().top + 
    targetElement07.clientHeight * 0.8;
    if (window.innerHeight > getElementDistance07) {
        targetElement07.classList.add("show");
    }
})

// モーダルウィンドウ -------------------------------------------

const modalOpen = document.querySelectorAll(".modalOpen");
modalOpen.forEach(e => {
    e.onclick = function(){
        let modal = e.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    }
})

const modalClose = document.querySelectorAll(".modalClose");
modalClose.forEach(e => {
    e.onclick = function(){
        let modal = (e.closest(".modal").style.display = "none")
    }
})

window.onclick = function(e){
    if(e.target.className === "modal") {
        e.target.style.display = "none";
    }
}

// ハンバーガーメニュー-----------------------------------------

document.getElementById("humberger-menu").addEventListener("click", function(){
    this.classList.toggle("active");
    document.getElementById("menu-page").classList.toggle("active");
})

document.getElementById("menu-page").addEventListener("click", function(){
    this.classList.remove("active");
    document.getElementById("humberger-menu").classList.remove("active");
})
