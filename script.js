const colorPicker = document.querySelector('.picker');
const colorPickerBrush = document.querySelector('.picker-brush');

const mask = document.querySelectorAll('.mask path');
const windowsMask = document.querySelectorAll('.windows-mask path');

const colorPickerLabel = document.querySelector('#label');
const colorPickerLabelBrush = document.querySelector('#brush');


// Walls

const changeColorWalls = () => {
    for (let i = 0; i < mask.length; i++) {
        mask[i].style.fill = colorPicker.value;
        colorPickerBrush.value = colorPicker.value;
    }
};


// Windows

const changeColorWindows = () => {
    for (let i = 0; i < windowsMask.length; i++) {
        windowsMask[i].style.fill = colorPickerBrush.value;
    }
};


// Events

colorPicker.addEventListener('input', changeColorWalls);
colorPickerBrush.addEventListener('input', changeColorWindows);
