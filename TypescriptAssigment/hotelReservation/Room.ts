export interface Room {
    number: number;
    type: string; 
    pricePerNight: number;
    isBooked: boolean;
    startDate?: Date;
    endDate?: Date;
}

export class RoomClass implements Room {
    constructor(
        public number: number,
        public type: string,
        public pricePerNight: number,
        public isBooked: boolean = false,
        public startDate?: Date,
        public endDate?: Date
    ) {}
}
