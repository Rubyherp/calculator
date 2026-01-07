
let num1 = '';
let op = '';
let num2 = '';

const nums = document.querySelectorAll('.btn-num');
const operator = document.querySelectorAll('.btn-op');
const control = document.querySelectorAll('.btn-control');
const display = document.querySelector('.display');

nums.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        return numsDisplayHandler(e);
    })
});

operator.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        return operatorHandler(e);
    })
});

control.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        return controlHandler(e);
    } )
})

function numsDisplayHandler(e) {
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
        logDisplay();
        // logResult();
    } else if (num1 && op) {
        num2 += e.target.innerText;
        logDisplay();
        // logResult();
    }
}

function operatorHandler(e) {
    const newOp = e.target.innerText;

    if (!num1) return;
    if (num1 && op && num2) {
        num1 = String(operate(op, Number(num1), Number(num2)));
        num2 = '';
    }
    op = newOp;
    logDisplay();
}

function controlHandler(event) {
    if (event.target.innerText === 'del') {
        if (!num2 && !op) {
            num1 = num1.slice(0, -1);
            logDisplay();
            // logResult();
        } else if (num1 && op && num2){
            num2 = num2.slice(0, -1);
            logDisplay();
            // logResult();
        } else if (num1 && op && !num2) {
            op = op.slice(0, -1);
            logDisplay();
        }
    } else if (event.target.innerText === 'C') {
        reset()
        logDisplayClear()
    } else if (event.target.innerText === '+/-') {
        if (!num2) {
            num1 = '-' + num1;
            logDisplay();
            // logResult();
        } else {
            num2 = '-' + num2;
            logDisplay();
            // logResult();
        }
    } else if (event.target.innerText === '=') {
        if (num1 && op && num2) {
            const operator = op;
            const firstNum = Number(num1);
            const secondNum = Number(num2);
            reset()

            num1 = operate(operator, firstNum, secondNum);
            logDisplay();
            // logResult();
        } else if (op === '%') {
            const operator = op;
            const firstNum = Number(num1);
            const secondNum = 1;
            reset()
            num1 = operate(operator, firstNum, secondNum);
            logDisplay();
            // logResult();
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

function logDisplay() {
    display.innerText = `${num1}${op}${num2}`;
}

function logDisplayClear() {
    display.innerText = '';
}
