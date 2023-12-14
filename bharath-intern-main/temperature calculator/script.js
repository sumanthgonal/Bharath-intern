let celsiusInput = document.querySelector('#celsius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

let btn = document.querySelector('.button button');

function roundTheNumber(number) {
    return Math.round(number * 100) / 100;
}

function validateInput(inputElement) {
    const inputValue = parseFloat(inputElement.value);
    if (isNaN(inputValue) || inputValue > 1e10) {
        inputElement.value = "";
        inputElement.placeholder = "Enter a value less than 10 digits";
    }
}

/* Celsius to Fahrenheit and Kelvin */
celsiusInput.addEventListener('input', function() {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp * (9 / 5)) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundTheNumber(fTemp);
    kelvinInput.value = roundTheNumber(kTemp);

    validateInput(celsiusInput);
    validateInput(fahrenheitInput);
    validateInput(kelvinInput);
});

/* Fahrenheit to Celsius and Kelvin */
fahrenheitInput.addEventListener('input', function() {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5 / 9);
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

    celsiusInput.value = roundTheNumber(cTemp);
    kelvinInput.value = roundTheNumber(kTemp);

    validateInput(celsiusInput);
    validateInput(fahrenheitInput);
    validateInput(kelvinInput);
});

/* Kelvin to Celsius and Fahrenheit */
kelvinInput.addEventListener('input', function() {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

    celsiusInput.value = roundTheNumber(cTemp);
    fahrenheitInput.value = roundTheNumber(fTemp);

    validateInput(celsiusInput);
    validateInput(fahrenheitInput);
    validateInput(kelvinInput);
});

btn.addEventListener('click', () => {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});
