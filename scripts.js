
let num1 = '';
let op = '';
let num2 = '';
let res = '';

const nums = document.querySelectorAll('.btn-num');
const operator = document.querySelectorAll('.btn-op');
const control = document.querySelectorAll('.btn-control');
const display = document.querySelector('.display');

nums.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        return numsHandler(e);
    })
});

operator.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (num1) {
            op = e.target.innerText;
            logResult();
            logDisplay();
        }
    })
});

control.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        return checkControl(e);
    } )
})


function numsHandler(e) {
    if (e.target.innerText === '.') {
        if (!num1.includes('.') && !op){
            num1 = num1 + '.';
            logDisplay();
        } else if (num1 && op) {
            if (!num2.includes('.')){
                num2 = num2 + '.';
                logDisplay();
            }
        }
    } else if (!op) {
        num1 += e.target.innerText;
        logResult();
        logDisplay();
    } else if (num1 && op) {
        num2 += e.target.innerText;
        logResult();
        logDisplay();
    }
}

function checkControl(event) {
    if (event.target.innerText === 'del') {
        if (!num2) {
            num1 = num1.slice(0, -1)
            logResult();
            logDisplay();
        } else {
            num2 = num2.slice(0, -1)
            logResult();
            logDisplay();
        }
    } else if (event.target.innerText === 'C') {
        reset()
        logDisplayClear()
    } else if (event.target.innerText === '+/-') {
        if (!num2) {
            num1 = '-' + num1;
            logResult();
            logDisplay();
        } else {
            num2 = '-' + num2;
            logResult();
            logDisplay();
        }
    } else if (event.target.innerText === '=') {
        if (num1 && op && num2) {
            const operator = op;
            const firstNum = Number(num1);
            const secondNum = Number(num2);
            reset()
            res = operate(operator, firstNum, secondNum);
            logResult();
            logDisplay();
        } else if (op === '%') {
            const operator = op;
            const firstNum = Number(num1);
            const secondNum = 1;
            reset()
            res = operate(operator, firstNum, secondNum);
            logResult();
            logDisplay();
        }
    }
};

function operate(operator, num1, num2) {
    if (operator === '+') {
        return num1 + num2;
    } 
    else if (operator === '-') {
        return num1 - num2;
    } 
    else if (operator === '*') {
        return num1 * num2;
    } 
    else if (operator === '/') {
        return num1 / num2;
    } 
    else if (operator === '%') {
        return (num1 * num2) / 100;
    } 
}

function reset() {
    num1 = '';
    num2 = '';
    op = '';
}

function logResult() {
    console.log('Num1: ', num1);
    console.log('op: ', op);
    console.log('Num2: ', num2);
    console.log('Result: ', res);
}

function logDisplay() {
    if (num1 || op || num2) {
        const displayThis = num1 + ' ' + `${op}` + ' ' + num2;
        display.innerText = displayThis;
    } else {
        display.innerText = res;
    }
}

function logDisplayClear() {
    display.innerText = '';
}

// if (workSpace.length >= 3) {
//     const operator = 
// }


// const zero = document.querySelector('.btn-0');
// const one = document.querySelector('.btn-1');
// const two = document.querySelector('.btn-2');
// const three = document.querySelector('.btn-3');
// const four = document.querySelector('.btn-4');
// const five = document.querySelector('.btn-5');
// const six = document.querySelector('.btn-6');
// const seven = document.querySelector('.btn-7');
// const eight = document.querySelector('.btn-8');
// const nine = document.querySelector('.btn-9');
// const del = document.querySelector('.btn-delete');
// const clear = document.querySelector('.btn-clear');
// const modulus = document.querySelector('.btn-modulus');
// const divide = document.querySelector('.btn-divide');
// const multiply = document.querySelector('.btn-multiply');
// const minus = document.querySelector('.btn-minus');
// const plus = document.querySelector('.btn-plus');
// const equal = document.querySelector('.btn-equal');
// const negative = document.querySelector('.btn-negative');
// const dot = document.querySelector('.btn.dot');

// const arrNums = [zero, one, two, three, four, five, six, seven, eight, nine, dot];
// const arrOps = [modulus, divide, multiply, minus, plus];
// const arrControl = [del, clear, negative];
