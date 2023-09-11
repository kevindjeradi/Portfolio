// videoRoutes.js
const express = require('express');
const multer = require('multer');
const Video = require('../models/video');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');

router.post('/upload', upload.single('video'), async (req, res, next) => {
    try {
        if (!req.file) {
            throw new Error('File not uploaded');
        }

        // Generate thumbnail
        const thumbnailPath = `thumbnails/${req.file.filename}.jpg`;
        ffmpeg(req.file.path)
            .screenshots({
                timestamps: ['00:00:02'],
                filename: `${req.file.filename}.jpg`,
                folder: 'thumbnails'
            });

        const video = new Video({
            title: req.file.originalname,
            videoPath: req.file.filename,
            thumbnailPath: thumbnailPath
        });
        await video.save();
        res.status(200).json({ message: 'Video uploaded successfully' });
    } catch (error) {
        next(error);
    }
}, (error, req, res, next) => {
    res.status(400).json({ error: error.message });
});

router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Endpoint to delete a video
router.delete('/delete/:videoId', async (req, res) => {
    try {
        // Find the video by ID
        const video = await Video.findById(req.params.videoId);

        // Check if the video exists
        if (!video) {
            return res.status(404).send('Video not found');
        }

        // Delete video from uploads folder
        fs.unlinkSync(path.join(__dirname, '../uploads', video.videoPath));

        // Delete associated thumbnail from thumbnails folder
        if (video.thumbnailPath) {
            fs.unlinkSync(path.join(__dirname, '../', video.thumbnailPath));
        }

        // Delete video from the database
        await Video.findByIdAndDelete(req.params.videoId);

        res.send('Video and thumbnail deleted successfully');
    } catch (error) {
        console.error("Error deleting video:", error);
        res.status(500).send('Server error');
    }
});


const syncDatabaseWithUploads = async () => {
    try {
        const filesInUploads = fs.readdirSync(path.join(__dirname, '../uploads'));
        const videosInDB = await Video.find();

        // Delete entries in DB that don't have a corresponding file in uploads
        for (let video of videosInDB) {
            if (!filesInUploads.includes(video.videoPath)) {
                await Video.findOneAndDelete({ videoPath: video.videoPath });
            }
        }

        // Add files in uploads to DB if they don't exist in DB
        for (let file of filesInUploads) {
            const videoInDB = videosInDB.find(video => video.videoPath === file);
            if (!videoInDB) {
                const newVideo = new Video({
                    title: file, // or extract title from file name
                    videoPath: file
                });
                await newVideo.save();
            }
        }
    } catch (error) {
        console.error("Error syncing database with uploads:", error);
    }
};

// Call the function when the server starts or before fetching the list of videos
syncDatabaseWithUploads();

module.exports = router;