const heading = document.getElementById('heading');
const subheading = document.getElementById('subheading');
const paragraph = document.getElementById('paragraph');
const emptyDiv = document.getElementById('empty-div');
const image = document.getElementById('image');
const headingInput = document.getElementById('heading-input');
const toggleSubheadingBtn = document.getElementById('toggle-subheading');
const fontRadios = document.getElementsByName('font');
const widthRange = document.getElementById('width-range');
const imageSelect = document.getElementById('image-select');

headingInput.addEventListener('input', () => {
    heading.textContent = headingInput.value;
});

toggleSubheadingBtn.addEventListener('click', () => {
    subheading.classList.toggle('hidden');
});

fontRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        paragraph.style.fontFamily = radio.value;
    });
});

widthRange.addEventListener('input', () => {
    emptyDiv.style.width = widthRange.value + 'px';
});

imageSelect.addEventListener('change', () => {
    image.src = imageSelect.value;
});