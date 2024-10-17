import { Person } from './Person';

export class InsuranceCalculator {
    static calculatePremium(person: Person): number {
        let premium: number = 0;

        // Age
        premium += this.calculateAgePremium(person.age);

        // Gender
        premium += this.calculateGenderPremium(person.gender);

        // Blood Group
        premium += this.calculateBloodGroupPremium(person.bloodGroup);

        // Medical History
        premium += this.calculateMedicalHistoryPremium(person.medicalHistory);

        // Sugar Level
        premium += this.calculateSugarLevelPremium(person.sugarLevel);

        // Diabetes Type
        premium += this.calculateDiabetesTypePremium(person.diabetesType);

        return premium;
    }

    private static calculateAgePremium(age: number): number {
        if (age < 21) return 100;
        if (age >= 21 && age <= 55) return 150;
        return 200;
    }

    private static calculateGenderPremium(gender: string): number {
        return gender === "female" ? 50 : 75;
    }

    private static calculateBloodGroupPremium(bloodGroup: string): number {
        switch (bloodGroup) {
            case "B+": return 25;
            case "B-": return 35;
            case "A+": return 45;
            case "A-": return 55;
            case "O+": return 65;
            case "O-": return 75;
            default: return 0;
        }
    }

    private static calculateMedicalHistoryPremium(medicalHistory: string[]): number {
        return medicalHistory.length === 0 ? 100 : 150;
    }

    private static calculateSugarLevelPremium(sugarLevel: number): number {
        if (sugarLevel < 120 && sugarLevel > 80) return 50;
        if (sugarLevel < 80) return 75;
        return 100;
    }

    private static calculateDiabetesTypePremium(diabetesType: boolean): number {
        return diabetesType ? 150 : 100;
    }
}
