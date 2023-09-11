const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');

// Load environment variables from .env file
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware to decode URLs
app.use((req, res, next) => {
    req.url = decodeURIComponent(req.url);
    next();
});

// Get dbURI from .env file
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/thumbnails', express.static('thumbnails'));
app.use('/api', videoRoutes);

// General error handler
app.use((error, req, res, next) => {
    res.status(500).send({ error: error.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
