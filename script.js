const colorPicker = document.querySelector('.picker');
const mask = document.querySelectorAll('path');
const colorPickerLabel = document.querySelector('#label');

const changeColor = () => {
    for (let i = 0; i < mask.length; i++) {
        mask[i].style.fill = colorPicker.value;
    }
    colorPickerLabel.style.background = colorPicker.value;
};

colorPicker.addEventListener('input', changeColor);