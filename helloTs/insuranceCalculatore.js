function calculateInsurancePremium(person) {
    var premium = 0;
    // 1. Age:
    if (person.age < 21) {
        premium += 100;
    }
    else if (person.age >= 21 && person.age <= 55) {
        premium += 150;
    }
    else {
        premium += 200;
    }
    // female
    if (person.gender === "female") {
        premium += 50;
    }
    else if (person.
        gender === "male") {
        premium += 75;
    }
    // blood group
    if (person.bloodGroup === "B+") {
        premium += 25;
    }
    else if (person.bloodGroup === "B-") {
        premium += 35;
    }
    else if (person.bloodGroup === "A+") {
        premium += 45;
    }
    else if (person.bloodGroup === "A-") {
        premium += 55;
    }
    else if (person.bloodGroup === "O+") {
        premium += 65;
    }
    else if (person.bloodGroup === "O-") {
        premium += 75;
    }
    // medical history
    if (person.medicalHistory.length == 0) {
        premium += 100;
    }
    else {
        premium += 150;
    }
    // 5. Sugar Level:
    if (person.sugarLevel < 120 && person.sugarLevel > 80) {
        premium += 50;
    }
    else if (person.sugarLevel < 80) {
        premium += 75;
    }
    else {
        premium += 100;
    }
    // 6. Diabetes Type:
    if (person.diabetesType == false) {
        premium += 100;
    }
    else {
        premium += 150;
    }
    return premium;
}
var person1 = {
    id: 1,
    name: "John Doe",
    age: 30,
    weight: 70,
    height: 175,
    gender: "male",
    bloodGroup: "A+",
    medicalHistory: [],
    sugarLevel: 85,
    diabetesType: false
};
var premium = calculateInsurancePremium(person1);
console.log("Insurance Premium for ".concat(person1.name, ": $").concat(premium));
