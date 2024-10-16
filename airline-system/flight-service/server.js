const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios'); // For inter-service communication

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/flights', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Flight Schema
const flightSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true, unique: true },
    destination: { type: String, required: true },
    capacity: { type: Number, required: true },
    departureTime: { type: Date, required: true }
}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);

// Middleware for validating flight data
const validateFlight = (req, res, next) => {
    const { flightNumber, destination, capacity, departureTime } = req.body;
    if (!flightNumber || !destination || !capacity || !departureTime) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    next();
};

// Get all flights
app.get('/flights', async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new flight
app.post('/flights', validateFlight, async (req, res) => {
    const flight = new Flight(req.body);

    try {
        const savedFlight = await flight.save();
        res.status(201).json(savedFlight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get flight by flight number
app.get('/flights/:flightNumber', getFlight, (req, res) => {
    res.json(res.flight);
});

// Update flight information
app.patch('/flights/:flightNumber', getFlight, validateFlight, async (req, res) => {
    const updates = {};
    if (req.body.destination != null) updates.destination = req.body.destination;
    if (req.body.capacity != null) updates.capacity = req.body.capacity;
    if (req.body.departureTime != null) updates.departureTime = new Date(req.body.departureTime);

    Object.assign(res.flight, updates);

    try {
        const updatedFlight = await res.flight.save();
        res.json(updatedFlight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete flight
app.delete('/flights/:flightNumber', getFlight, async (req, res) => {
    await res.flight.remove();
    res.json({ message: 'Flight deleted' });
});

// Middleware to get flight by flight number
async function getFlight(req, res, next) {
    let flight;
    try {
        flight = await Flight.findOne({ flightNumber: req.params.flightNumber });
        if (flight == null) {
            return res.status(404).json({ message: 'Flight not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.flight = flight;
    next();
}

// Example of inter-service communication (to get airlines)
app.get('/airlines', async (req, res) => {
    try {
        const response = await axios.get('http://airline-service:3001/airlines'); // Adjust URL for your setup
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error communicating with airline service' });
    }
});

// Start the server
app.listen(3002, () => console.log('Flight service running on port 3002'));
