import { Addition } from './operations/Addition';
import { Subtraction } from './operations/Subtraction';
import { Multiplication } from './operations/Multiplication';
import { Division } from './operations/Division';

export class Calculator {
    public static calculate(operator: string, num1: number, num2: number): number {
        switch(operator) {
            case '+':
                return Addition.execute(num1, num2);
            case '-':
                return Subtraction.execute(num1, num2);
            case '*':
                return Multiplication.execute(num1, num2);
            case '/':
                return Division.execute(num1, num2);
            default:
                throw new Error("Invalid operator");
        }
    }
}
