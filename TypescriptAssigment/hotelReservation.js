var Hotel = /** @class */ (function () {
    function Hotel(hotelName) {
        this.hotelName = hotelName;
        this.rooms = [];
    }
    Hotel.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    Hotel.prototype.listRooms = function () {
        console.log("Rooms available at ".concat(this.hotelName, ":"));
        this.rooms.forEach(function (room) {
            var status = room.isBooked ? "Booked" : "Available";
            console.log("Room ".concat(room.number, " - Type: ").concat(room.type, ", Price: $").concat(room.pricePerNight, "/night - Status: ").concat(status));
        });
    };
    // Custom method to find a room by its number
    Hotel.prototype.getRoomByNumber = function (roomNumber) {
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.number === roomNumber) {
                return room;
            }
        }
        return undefined; // Room not found
    };
    Hotel.prototype.checkIn = function (customer, roomNumber) {
        var room = this.getRoomByNumber(roomNumber);
        if (room && !room.isBooked) {
            room.isBooked = true;
            customer.room = room;
            console.log("".concat(customer.name, " checked in to room ").concat(roomNumber, " at ").concat(this.hotelName));
        }
        else {
            console.log("Room ".concat(roomNumber, " is not available or already booked."));
        }
    };
    Hotel.prototype.bookRoom = function (customer, roomNumber, startDate, endDate) {
        var room = this.getRoomByNumber(roomNumber);
        if (room && !room.isBooked) {
            room.isBooked = true;
            customer.room = room;
            room.startDate = startDate;
            room.endDate = endDate;
            console.log("".concat(customer.name, " booked room ").concat(roomNumber, " from ").concat(startDate.toLocaleDateString(), " to ").concat(endDate.toLocaleDateString(), " at ").concat(this.hotelName));
        }
        else {
            console.log("Room ".concat(roomNumber, " is not available or already booked."));
        }
    };
    Hotel.prototype.calculateStayPrice = function (room) {
        if (!room.startDate || !room.endDate) {
            return 0;
        }
        var duration = (room.endDate.getTime() - room.startDate.getTime()) / (1000 * 3600 * 24);
        return duration * room.pricePerNight;
    };
    Hotel.prototype.checkOut = function (customer) {
        if (customer.room) {
            var room = customer.room;
            var totalPrice = this.calculateStayPrice(room);
            console.log("".concat(customer.name, " checked out from room ").concat(room.number, ". Total price: $").concat(totalPrice));
            room.isBooked = false;
            customer.room = undefined;
        }
        else {
            console.log("".concat(customer.name, " is not checked in to any room."));
        }
    };
    return Hotel;
}());
// Example usage
var hotel = new Hotel("Grand Hotel");
hotel.addRoom({ number: 101, type: "Single", pricePerNight: 100, isBooked: false });
hotel.addRoom({ number: 102, type: "Double", pricePerNight: 150, isBooked: false });
hotel.addRoom({ number: 103, type: "Suite", pricePerNight: 200, isBooked: false });
var customer1 = { name: "Alice" };
var customer2 = { name: "Bob" };
hotel.listRooms();
hotel.bookRoom(customer1, 102, new Date('2023-10-01'), new Date('2023-10-05'));
hotel.bookRoom(customer2, 101, new Date('2023-10-03'), new Date('2023-10-06'));
hotel.checkOut(customer1);
hotel.checkOut(customer2);
hotel.listRooms();
