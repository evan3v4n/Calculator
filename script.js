const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');

const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {

        const key = e.target;
        const action = key.dataset.action;

        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if (!action) {
            console.log("Number key!")
            if (displayedNum === "0"){
                display.textContent = keyContent
                console.log(displayedNum)
            } else {
                display.textContent = displayedNum + keyContent
                console.log(displayedNum)
            }
        };
        
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' 
            ) {
            console.log("Operator key!")
        }

        if (action === 'decimal') {
            console.log("Decimal key!")
        }

        if (action === 'clear') {
            console.log("Clear key!")
        }

        if (action === 'calculate') {
            console.log("Equals key!")
        }
    }
})