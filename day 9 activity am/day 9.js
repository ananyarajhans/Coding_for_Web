const menu1 = document.getElementById("menu1");

function showMenu1() {
    menu1.style.display = "block";    
}




const menu2 = document.getElementById("menu2");
const btn2 = document.getElementById("btn2");
const body = document.querySelector("body");


function showMenu2() {
    menu2.style.display = "block";    
}

btn2.addEventListener("click", showMenu2());

body.addEventListener("load", showMenu2());

const closeMenus =









/*
btn2.addEventListener("click", function() {
    menu2.style.display = "block";
});
*/