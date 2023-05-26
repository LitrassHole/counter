'use strict';
import {countCaloriesNorm} from './calories-сounter.js'

const form = document.querySelector('.counter__form');
const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');
const infoBlock = document.querySelector('.counter__result');

const inputs = document.querySelectorAll('.input__wrapper');
const ageInput = document.querySelector('#age');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');

function setSubmitButtonState() {
    if (ageInput.value > 0 && heightInput.value > 0 && weightInput.value > 0) {
        submitButton.disabled = false;    
    } else {
        submitButton.disabled = true; 
    }
}

function setResetButtonState() {
    if (ageInput.value > 0 || heightInput.value > 0 || weightInput.value > 0) {
        resetButton.disabled = false;    
    } else {
        resetButton.disabled = true; 
    }
}

for (const input of inputs) {
    input.children[0].addEventListener('input', setResetButtonState);
    input.children[0].addEventListener('input', setSubmitButtonState);
}

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    countCaloriesNorm();
});

resetButton.addEventListener('reset', () => {});

form.addEventListener('reset', () => {
    resetButton.disabled = true;
    infoBlock.classList.add('counter__result--hidden');
    submitButton.disabled = true;
})
