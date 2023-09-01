let symmetry = 8;
let angle = 360 / symmetry;
let saveButton, clearButton, fullscreenButton, brushSizeSlider, sizeSlider;
let backgroundColorDropdown;  // Dropdown menu for background color selection

let song;




function setup() {
  createCanvas(1510, 650);
  angleMode(DEGREES);
  background(127);

  
 // Load the sound file
 song = loadSound('');

  
// Create the dropdown menu for background color selection
backgroundColorDropdown = createSelect();
backgroundColorDropdown.option('Change BG colour');
backgroundColorDropdown.option('Yellow');
backgroundColorDropdown.option('Orange');
backgroundColorDropdown.option('Red');
backgroundColorDropdown.option('Green');
backgroundColorDropdown.option('Blue');
backgroundColorDropdown.changed(changeBackgroundColor);
backgroundColorDropdown.position(350, height + 50);


brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);
  brushSizeSlider.position(550, height + 55);
  sizeSlider.position(670, height + 55);

  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);
  fullscreenButton.position(850, height + 55);

  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);
  clearButton.position(980, height + 55);

  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);
  saveButton.position(1070, height + 55);

  

  
}

function saveFile() {
  save('design.jpg');
}

function clearScreen() {
  background(backgroundColorDropdown.value()); 

  // Change the background color and music
  changeMusic();
}

function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function changeBackgroundColor() {
  background(backgroundColorDropdown.value()); // Change the background color

  // Change the music
  changeMusic();
}

function changeMusic() {
  // Stop the current song
  if (song.isPlaying()) {
    song.stop();
  }

  // Play a different song based on the background color
  switch (backgroundColorDropdown.value()) {
    case 'Yellow':
      song = loadSound('yellow.mp3');
      break;
    case 'Orange':
      song = loadSound('orange.mp3');
      break;
    case 'Red':
      song = loadSound('red.mp3');
      break;
    case 'Green':
      song = loadSound('green.mp3');
      break;
    case 'Blue':
      song = loadSound('blue.mp3');
      break;
    default:
      song = loadSound('');
      break;
  }

  // Play the new song
  song.play();
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








