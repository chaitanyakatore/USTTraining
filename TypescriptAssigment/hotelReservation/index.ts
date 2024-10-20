import { Hotel } from './Hotel';
import { RoomClass } from './Room';
import { CustomerClass } from './Customer';

const hotel = new Hotel("Grand Hotel");

hotel.addRoom(new RoomClass(101, "Single", 100));
hotel.addRoom(new RoomClass(102, "Double", 150));
hotel.addRoom(new RoomClass(103, "Suite", 200));

const customer1 = new CustomerClass("Alice");
const customer2 = new CustomerClass("Bob");

hotel.listRooms(); 

hotel.bookRoom(customer1, 102, new Date('2023-10-01'), new Date('2023-10-05')); 
hotel.bookRoom(customer2, 101, new Date('2023-10-03'), new Date('2023-10-06')); 

hotel.checkOut(customer1); 
hotel.checkOut(customer2); 

hotel.listRooms();
