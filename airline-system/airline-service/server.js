const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios'); // For inter-service communication
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb://127.0.0.1:27017/airline'; // Replace with your MongoDB connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const airlineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    country: { type: String, required: true },
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

const Airline = mongoose.model('Airline', airlineSchema);

// Middleware for validating input
const validateAirline = (req, res, next) => {
    const { name, code, country } = req.body;
    if (!name || !code || !country) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    next();
};

// Get Airlines
app.get('/airlines', async (req, res) => {
    try {
        const airlines = await Airline.find();
        res.json(airlines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add Airline
app.post('/airlines', validateAirline, async (req, res) => {
    const airline = new Airline(req.body);
    try {
        const savedAirline = await airline.save();
        res.status(201).json(savedAirline);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Example of inter-service communication (just a placeholder)
app.get('/some-other-service', async (req, res) => {
    try {
        const response = await axios.get('http://flight-service:3002/flights'); // Adjust URL for your setup
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error communicating with flight service' });
    }
});

app.listen(PORT, () => {
    console.log(`Airline service running on port ${PORT}`);
});
