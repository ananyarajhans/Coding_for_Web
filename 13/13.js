let symmetry = 6;
let angle = 360 / symmetry;
let saveButton, clearButton, fullscreenButton, brushSizeSlider, sizeSlider;
let backgroundColorDropdown;  // Dropdown menu for background color selection


function setup() {
  createCanvas(710, 710);
  angleMode(DEGREES);
  background(127);
  createSelect();

  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);

  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);

  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);

  // Create the dropdown menu for background color selection
  backgroundColorDropdown = createSelect();
  backgroundColorDropdown.option('Change BG colour');
  backgroundColorDropdown.option('Yellow');
  backgroundColorDropdown.option('Orange');
  backgroundColorDropdown.option('Red');
  backgroundColorDropdown.option('Green');
  backgroundColorDropdown.option('Blue');
  backgroundColorDropdown.changed(changeBackgroundColor);
}


function saveFile() {
  save('design.jpg');
}

function clearScreen() {
  background(backgroundColorDropdown.value()); // Reset to selected background color
}

function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function changeBackgroundColor() {
  background(backgroundColorDropdown.value()); // Change the background color
}




function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}