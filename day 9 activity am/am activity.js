function myFunction() {
    var x = document.getElementById("menu-1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  

/* let btn2 = document.getElementById('button-2');

btn2.addEventListener("click", function () {
    let div2 = document.getElementById('menu-2');
    let isVisible = (div2.style.visibility === "visible");
    if (isVisible) {
        div2.style.visibility = 'hidden';
        
    } else {
        div2.style.visibility = 'visible';
        
    }
}); */



const menu1 = document.getElementById("menu-1");

function showMenu1() {
    menu1.style.display = "block";    
}

const menu2 = document.getElementById("menu-2");
const btn2 = document.getElementById("button-2");
const body = document.querySelector("body");


function showMenu2() {
    menu2.style.display = "block";    
}

btn2.addEventListener("click", showMenu2());

body.addEventListener("load", showMenu2());


/*
btn2.addEventListener("click", function() {
    menu2.style.display = "block";
});
*/
