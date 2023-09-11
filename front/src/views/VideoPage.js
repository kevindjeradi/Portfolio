import React, { useState } from 'react';
import VideoList from '../components/VideoStream/VideoList';
import VideoUpload from '../components/VideoStream/VideoUpload';
import VideoPlayer from '../components/VideoStream/VideoPlayer';
import '../style/VideoPage.css';

function VideoPage() {
    const [selectedVideoPath, setSelectedVideoPath] = useState(null);
    const [refreshVideos, setRefreshVideos] = useState(false); // New state to trigger video list refresh

    const handleVideoSelect = (videoPath) => {
        setSelectedVideoPath(videoPath);
    };

    const handleUploadSuccess = () => {
        setRefreshVideos(!refreshVideos); // Toggle the state to trigger a re-fetch in VideoList
    };

    return (
        <div className='VideoPage'>
            <VideoUpload onUploadSuccess={handleUploadSuccess} />
            <VideoList onVideoSelect={handleVideoSelect} refresh={refreshVideos} />
            {selectedVideoPath && <VideoPlayer videoPath={selectedVideoPath} />}
        </div>
    );
}

export default VideoPage;
