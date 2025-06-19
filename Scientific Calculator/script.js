function append(val) {
const display = document.getElementById('display');
display.value += val;
}

function clearDisplay() {
document.getElementById('display').value = '';
}

function delChar() {
const display = document.getElementById('display');
display.value = display.value.slice(0, -1);
}

function calculate() {
const display = document.getElementById('display');
let expr = display.value;

try {
    // Replace custom functions
    expr = expr
    .replace(/√\(/g, 'Math.sqrt(')
    .replace(/sin\(/g, 'Math.sin(')
    .replace(/cos\(/g, 'Math.cos(')
    .replace(/tan\(/g, 'Math.tan(')
    .replace(/log\(/g, 'Math.log10(')
    .replace(/\^/g, '**');

    const result = eval(expr);
    display.value = result;
} catch (e) {
    display.value = "Error";
}
}

