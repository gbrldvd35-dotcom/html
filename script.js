const display = document.getElementById('display');

function append(value) {
    if (display.textContent === '0') display.textContent = ' ';
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent > 1) {
        display.textContent.length = display.textContent.slice(0, -1);
    } else {
        clearDisplay();
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if ((/\d|[+\*/%.]/).test(key)) {
        append(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});