import React from 'react';

function VideoPlayer({ videoPath }) {
    const fullVideoPath = `http://localhost:5000/uploads/${videoPath}`;

    return (
        <div>
            <h2>Video Player</h2>
            <div className="resizable-video-container">
                <video controls>
                    <source src={fullVideoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default VideoPlayer;