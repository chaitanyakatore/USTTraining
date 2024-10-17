import { PersonClass } from './Person';
import { InsuranceCalculator } from './InsuranceCalculator';

const person1 = new PersonClass(
    1,
    "User",
    30,
    70,
    175,
    "male",
    "A+",
    [],
    85,
    false
);

const premium = InsuranceCalculator.calculatePremium(person1);
console.log(`Insurance Premium for ${person1.name}: $${premium}`);
