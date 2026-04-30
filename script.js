const buttonClear = document.getElementById('button-clear');
const buttonDivide = document.getElementById('button-divide');
const buttonMultiply = document.getElementById('button-multiply');
const buttonSubtract = document.getElementById('button-subtract');
const buttonAdd = document.getElementById('button-add');
const buttonEquals = document.getElementById('button-equals');

const button0 = document.getElementById('button-0');
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const button7 = document.getElementById('button-7');
const button8 = document.getElementById('button-8');
const button9 = document.getElementById('button-9');

const display = document.getElementById('display');

display.textContent = '0';

buttonClear.addEventListener('click', () => {
    display.textContent = '0';
});

buttonDivide.addEventListener('click', () => {
    display.textContent += ' / ';
});

buttonMultiply.addEventListener('click', () => {
    display.textContent += ' * ';
});

buttonSubtract.addEventListener('click', () => {
    display.textContent += ' - ';
});

buttonAdd.addEventListener('click', () => {
    display.textContent += ' + ';
});

buttonEquals.addEventListener('click', () => {
    try {
        const result = eval(display.textContent);
        display.textContent = result;
    }
    catch (error) {
        display.textContent = 'Error';
    }
});

button0.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '0';
    }
    else {
        display.textContent += '0';
    }
});

button1.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '1';
    }
    else {
        display.textContent += '1';
    }
});

button2.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '2';
    }
    else {
        display.textContent += '2';
    }
});

button3.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '3';
    }
    else {
        display.textContent += '3';
    }
});

button4.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '4';
    }
    else {
        display.textContent += '4';
    }
});

button5.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '5';
    }
    else {
        display.textContent += '5';
    }
});

button6.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '6';
    }
    else {
        display.textContent += '6';
    }
});

button7.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '7';
    }
    else {

        display.textContent += '7';
    }
});

button8.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '8';
    }
    else {
        display.textContent += '8';
    }
});

button9.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '9';
    }
    else {
        display.textContent += '9';
    }
});

