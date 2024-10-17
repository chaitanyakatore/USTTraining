function add(num1: number, num2: number) : number {
    return num1 + num2;
}

function subtract(num1: number, num2: number) : number {
    return num1 - num2;
}

function multiply(num1: number, num2: number) : number {
    return num1 * num2;
}

function divide(num1: number, num2: number) : number {
    return num1 / num2;
}


function calculate(operator: string, num1: number, num2: number) : number {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if(num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            return divide(num1, num2);
        default:
            throw new Error("Invalid operator");
    }
}