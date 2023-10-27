const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');

const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {

        const key = e.target;
        const action = key.dataset.action;

        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        const previousKeyType = calculator.dataset.previousKeyType

        if (!action) {
            console.log("Number key!")
            if (displayedNum === "0"){
                display.textContent = keyContent
                console.log(displayedNum)
            } else {
                display.textContent = displayedNum + keyContent
                console.log(displayedNum)
            }
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
        
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' 
            ) {
            console.log("Operator key!")
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'

            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }

        if (action === 'decimal') {
            console.log("Decimal key!")
            display.textContent = displayedNum + '.'
        }

        if (action === 'clear') {
            console.log("Clear key!")
            display.textContent = '0'
        }

        if (action === 'calculate') {
            console.log("Equals key!")
            const firstValue = calculator.dataset.firstValue
            const secondValue = displayedNum
            const operator = calculator.dataset.operator

            display.textContent = calculate(firstValue, operator, secondValue)

        }
    Array.from(key.parentNode.children)
        .forEach( k => k.classList.remove('is-depressed'))
    }
})

const calculate = (n1,operator,n2) => {
    result = ''
    // n1 = parseFloat(n1)
    // n2 = parseFloat(n2)
    if (operator === 'add') {
        result = n1 + n2
    }
    else if (operator === 'subtract') {
        result = n1 - n2
    }
    else if (operator === 'divide') {
        result = n1 / n2
    }
    else if (operator === 'multiply') {
        result = n1 * n2
    }

    return result
    }
