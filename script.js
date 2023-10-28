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

            if (
                displayedNum === "0" || 
                previousKeyType === 'operator' || 
                previousKeyType == 'calculate'
                ){
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }

            calculator.dataset.previousKeyType = 'number'
        }
        
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' 
            ) {
                 
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            if (
                firstValue && 
                operator && 
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate'
                ) {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue

                calculator.dataset.firstValue = calcValue
            } else {
                calculator.dataset.firstValue = displayedNum
            }

            console.log("Operator key!")
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.operator = action
        } 

        if (action === 'decimal') {
            console.log("Decimal key!")
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
            } else {
                display.textContent = '0.'
            }

            calculator.dataset.previousKeyType = 'decimal'
        }

        if (
            action === 'clear' || 
            previousKeyType == 'calculate'
            ) {
            console.log("Clear key!")

            calculator.dataset.previousKeyType = 'clear'
        }

        if (action === 'calculate') {
            console.log("Equals key!")

            let firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            let secondValue = displayedNum

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue
                }
                display.textContent = calculate(firstValue, operator, secondValue)
        }
            //Testing
            console.log(`firstValue: ${firstValue}, operator: ${operator}, secondValue: ${secondValue}`);

            calculator.dataset.modValue = secondValue
            calculator.dataset.previousKeyType = 'calculate'

        }
    Array.from(key.parentNode.children)
        .forEach( k => k.classList.remove('is-depressed'))
    }
})

const calculate = (n1,operator,n2) => {
    let result = ''
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)

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

    //Testing
    console.log(`n1: ${n1}, operator: ${operator}, n2: ${n2}`);

    return result
    }
