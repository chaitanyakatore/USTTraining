export class Division {
    public static execute(num1: number, num2: number): number {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    }
}
