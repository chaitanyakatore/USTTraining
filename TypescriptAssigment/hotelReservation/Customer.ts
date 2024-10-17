import { Room } from './Room';

export interface Customer {
    name: string;
    room?: Room;
}

export class CustomerClass implements Customer {
    constructor(
        public name: string,
        public room?: Room
    ) {}
}
