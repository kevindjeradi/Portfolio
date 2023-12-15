import React, { useState } from 'react';
import VideoList from 'components/VideoPage/VideoList';
import VideoUpload from 'components/VideoPage/VideoUpload';
import VideoPlayer from 'components/VideoPage/VideoPlayer';
import CustomAppBar from 'components/CustomAppBar';
import 'style/VideoPage.css';

function VideoPage() {
    const [selectedVideoPath, setSelectedVideoPath] = useState(null);
    const [refreshVideos, setRefreshVideos] = useState(false);

    const handleVideoSelect = (videoPath) => {
        setSelectedVideoPath(videoPath);
    };

    const handleUploadSuccess = () => {
        setRefreshVideos(!refreshVideos);
    };

    return (
        <div className='VideoPage'>
            <CustomAppBar />
            <VideoUpload onUploadSuccess={handleUploadSuccess} />
            <VideoList onVideoSelect={handleVideoSelect} refresh={refreshVideos} />
            {selectedVideoPath && <VideoPlayer videoPath={selectedVideoPath} />}
        </div>
    );
}

export default VideoPage;
