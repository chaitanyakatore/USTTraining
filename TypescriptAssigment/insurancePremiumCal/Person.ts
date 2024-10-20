export interface Person {
    id: number;
    name: string;
    age: number;
    weight: number;
    height: number;
    gender: string;
    bloodGroup: string;
    medicalHistory: string[]; // Changed to string array for clarity
    sugarLevel: number;
    diabetesType: boolean;
}

export class PersonClass implements Person {
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public weight: number,
        public height: number,
        public gender: string,
        public bloodGroup: string,
        public medicalHistory: string[],
        public sugarLevel: number,
        public diabetesType: boolean
    ) {}
}
