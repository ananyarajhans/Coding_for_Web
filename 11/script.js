const selectDivs = document.querySelectorAll('.select');

  selectDivs.forEach(div => {
    let expanded = false; // Track div state

    div.addEventListener('click', () => {
      if (expanded) {
        selectDivs.forEach(item => {
          item.style.height = 'calc(20% - 20px)';
          item.style.display = 'flex';
        });
      } else {
        // Hide all divs except the clicked one
        selectDivs.forEach(item => {
          if (item !== div) {
            item.style.height = 'calc(20% - 20px)';
            item.style.display = 'none';
          }
        });

        // Expand the clicked div
        div.style.height = '100%';
        div.style.display = 'flex';
      }

      expanded = !expanded; // Toggle the state
    });
  });

  // Close the expanded div when clicking outside of it
  document.addEventListener('click', event => {
    if (!event.target.closest('.select')) {
      selectDivs.forEach(div => {
        div.style.height = 'calc(20% - 20px)';
        div.style.display = 'flex';
      });
    }
  });


  const dropdown = document.getElementById('dropdown');
const imageContainer = document.querySelector('.image-container');
const selectedImage = document.getElementById('selected-image');

dropdown.addEventListener('change', function () {
    const selectedOption = this.options[this.selectedIndex];
    const imageName = selectedOption.value;
    const imagePath = `assets/${imageName}.png`;

    selectedImage.src = imagePath;
    imageContainer.style.display = 'block';
});


const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});




let galleryData = [
    {
      id: 1,
      img: "assets/poster1.jpeg",
      rating: 7.1,
      name: "name1",
      genre: "g1"
    },
    {
      id: 2,
      img: "assets/poster2.jpeg",
      rating: 8,
      name: "name2",
      genre: "g2"
    },
    {
      id: 3,
      img: "assets/poster3.jpeg",
      rating: 6.5,
      name: "name3",
      genre: "g3"
    },
    {
      id: 4,
      img: "assets/poster4.jpeg",
      rating: 7.2,
      name: "name4",
      genre: "g4"
    },
    {
      id: 5,
      img: "assets/poster5.jpeg",
      rating: 8.8,
      name: "name5",
      genre: "g5"
    }
  ]

let gallery = document.getElementById("gallery");

let generateGallery = () => {
    return (gallery.innerHTML = galleryData.map((x) => {
        return `
        
        <div class="recommen" id="${x.id}" c>
            <div class="inner-r" id="r-1">
                <img src="${x.img}" class="image-item" id="img-1">
                <div class="rating">
                <p class="rating" id="rating-1">${x.rating}</p>
           </div>
            <h4 class="name" id="name-1">${x.name}</h4>
            <p class="genre" id="gen-1">${x.genre}</p>
        </div>
    `
    })
    .join(""));

};

generateGallery();