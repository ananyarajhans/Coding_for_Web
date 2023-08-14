// Your JavaScript goes here
function chooseImage(){
    let choice = document.getElementById('dropdown').value;
    let imageChoice = document.getElementById('imgChoice');
    imageChoice.src = choice;
}

function hea(){
    let newHeading = document.getElementById("texy").value;
    document.getElementById("info").innerHTML = newHeading;
}

function hea2(){
    let newHeading = document.getElementById("texy2").value;
    document.getElementById("info2").innerHTML = newHeading;


}

function fontchoice1() {
    let font1 = document.getElementById('font1').value;
    document.getElementById('info').style.fontFamily = font1; 
    document.getElementById('info2').style.fontFamily = font1;   
}


function fontchoice2() {
    let font2 = document.getElementById('font2').value;
    document.getElementById('info').style.fontFamily = font2; 
    document.getElementById('info2').style.fontFamily = font2;
}


function fontchoice3() {
    let font3 = document.getElementById('font3').value;
    document.getElementById('info').style.fontFamily = font3; 
    document.getElementById('info2').style.fontFamily = font3;   
}

function chooseColour(){
    let choice = document.getElementById('dropdown2').value;
    let colChoice = document.getElementById('info');
    let colChoice2 = document.getElementById('info2');
    colChoice.style.color = choice;
    colChoice2.style.color = choice;
}

function adjustFontSize(){
    let size = document.getElementById('fonsize').value + 'px';
    let box = document.getElementById('info');
    let box2 = document.getElementById('info2');
    box.style.fontSize = size;
    box2.style.fontSize = size;
}

function applyTextStroke() {
    let stro = document.getElementById('strokeInput').value;
    let textToStroke = document.getElementById('info');
    let textToStroke2 = document.getElementById('info2');
    textToStroke.style.webkitTextStrokeWidth = `${stro}px`;
    textToStroke2.style.webkitTextStrokeWidth = `${stro}px`;
}