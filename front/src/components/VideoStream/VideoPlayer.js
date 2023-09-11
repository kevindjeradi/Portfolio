import React from 'react';

function VideoPlayer({ videoPath }) {
    const fullVideoPath = `http://hakedj.be/api/uploads/${videoPath}`;

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