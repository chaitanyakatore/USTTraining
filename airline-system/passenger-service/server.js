const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios'); // For inter-service communication

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/passenger', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// User model
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);

// Passenger model
const PassengerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    passportNumber: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});
const Passenger = mongoose.model('Passenger', PassengerSchema);

// Flight model
const FlightSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true, unique: true },
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Passenger' }]
});
const Flight = mongoose.model('Flight', FlightSchema);

// Middleware for validating passenger data
const validatePassenger = (req, res, next) => {
    const { name, email, phone, passportNumber, userId } = req.body;
    if (!name || !email || !phone || !passportNumber || !userId) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    next();
};

// User routes
app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Passenger routes
app.post('/passengers', validatePassenger, async (req, res) => {
    try {
        const userId = req.body.userId;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const newPassenger = new Passenger({ ...req.body, userId });
        const savedPassenger = await newPassenger.save();
        res.status(201).json(savedPassenger);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get flight details by flight number from Flight service
app.get('/flights/:flightNumber', async (req, res) => {
    try {
        const flightNumber = req.params.flightNumber;
        const response = await axios.get(`http://localhost:3002/flights/${flightNumber}`); // Adjust URL for your setup
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving flight information' });
    }
});

// Get all airlines from Airline service
app.get('/airlines', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/airlines'); // Adjust URL for your setup
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error communicating with airline service' });
    }
});

// Start the server
app.listen(3003, () => console.log('Passenger service running on port 3003...'));
