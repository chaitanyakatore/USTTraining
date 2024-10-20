import { Calculator } from './Calculator';

const num1 = 10;
const num2 = 5;

try {
    console.log(`Addition: ${Calculator.calculate('+', num1, num2)}`); // 15
    console.log(`Subtraction: ${Calculator.calculate('-', num1, num2)}`); // 5
    console.log(`Multiplication: ${Calculator.calculate('*', num1, num2)}`); // 50
    console.log(`Division: ${Calculator.calculate('/', num1, num2)}`); // 2
    console.log(`Division by zero: ${Calculator.calculate('/', num1, 0)}`); // Error
} catch (error) {
    console.error("something wen wrong");
}
