//count
//sex coefficient
const WOMEN_COEFFICIENT = -161;
const MEN_COEFFICIENT = 5;
let sexCoefficient = MEN_COEFFICIENT;
//activity coefficient
const MIN_ACTIVITY = 1.2;
const LOW_ACTIVITY = 1.375;
const MEDIUM_ACTIVITY = 1.55;
const HIGH_ACTIVITY = 1.725;
const MAX_ACTIVITY = 1.9;
let activityCoefficient = MIN_ACTIVITY;
//sex buttons
const maleButton = document.querySelector('#gender-male');
const femaleButton = document.querySelector('#gender-female');
//activity buttons
const minActivityButton = document.querySelector('#activity-minimal');
const lowActivityButton = document.querySelector('#activity-low');
const mediumActivityButton = document.querySelector('#activity-medium');
const highActivityButton = document.querySelector('#activity-high');
const maxActivityButton = document.querySelector('#activity-maximal');
//results
const infoBlock = document.querySelector('.counter__result');
const caloriesNormContainer = document.querySelector('#calories-norm');
const caloriesLowerContainer = document.querySelector('#calories-minimal');
const caloriesHigherContainer = document.querySelector('#calories-maximal');
//input
const ageInput = document.querySelector('#age');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');

function countCalories(sexCoef, activityCoef, age, height, weight) {
    return activityCoef*((10*weight)+(6.26*height)-(5*age)+sexCoef);
}

function countCaloriesNorm() {
    infoBlock.classList.remove('counter__result--hidden');
    caloriesHigherContainer.textContent = Math.round(1.15*countCalories(sexCoefficient, activityCoefficient, ageInput.value, heightInput.value, weightInput.value));
    caloriesLowerContainer.textContent = Math.round(0.85*countCalories(sexCoefficient, activityCoefficient, ageInput.value, heightInput.value, weightInput.value));
    caloriesNormContainer.textContent = Math.round(countCalories(sexCoefficient, activityCoefficient, ageInput.value, heightInput.value, weightInput.value));
}

maleButton.addEventListener('click', () => {sexCoefficient = MEN_COEFFICIENT;});
femaleButton.addEventListener('click', () => {sexCoefficient = WOMEN_COEFFICIENT;});

minActivityButton.addEventListener('click', () => {activityCoefficient = MIN_ACTIVITY;});
lowActivityButton.addEventListener('click', () => {activityCoefficient = LOW_ACTIVITY;});
mediumActivityButton.addEventListener('click', () => {activityCoefficient = MEDIUM_ACTIVITY;});
highActivityButton.addEventListener('click', () => {activityCoefficient = HIGH_ACTIVITY;});
maxActivityButton.addEventListener('click', () => {activityCoefficient = MAX_ACTIVITY;});

export {countCaloriesNorm};
