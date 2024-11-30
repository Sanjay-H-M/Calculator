const inputBox = document.getElementById('inputBox');

function appendValue(value) {
    inputBox.value += value;
}

function clearScreen() {
    inputBox.value = '';
}

function deleteLast() {
    inputBox.value = inputBox.value.slice(0, -1);
}

function calculateResult() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        inputBox.value = 'Error';
    }
}

function calculateScientific(type) {
    const value = parseFloat(inputBox.value);

    if (isNaN(value)) {
        inputBox.value = 'Error';
        return;
    }

    switch (type) {
        case 'sqrt':
            inputBox.value = Math.sqrt(value);
            break;
        case 'pow':
            inputBox.value = Math.pow(value, 2);
            break;
        case 'sin':
            inputBox.value = Math.sin((value * Math.PI) / 180);
            break;
        case 'cos':
            inputBox.value = Math.cos((value * Math.PI) / 180);
            break;
        case 'tan':
            inputBox.value = Math.tan((value * Math.PI) / 180);
            break;
        case 'log':
            inputBox.value = Math.log10(value);
            break;
        case 'exp':
            inputBox.value = Math.exp(value);
            break;
        default:
            inputBox.value = 'Error';
    }
}
