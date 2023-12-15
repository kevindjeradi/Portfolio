const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');

require('dotenv').config();

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    req.url = decodeURIComponent(req.url);
    next();
});

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

app.use((error, req, res, next) => {
    res.status(500).send({ error: error.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://hakedj.be/api`);
});
