// video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: String,
    videoPath: String,
    thumbnailPath: String
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;