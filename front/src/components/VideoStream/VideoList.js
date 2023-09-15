import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import '../../style/VideoPage.css';

function VideoList({ onVideoSelect, refresh }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [videoToDelete, setVideoToDelete] = useState(null);

    useEffect(() => {
        axios.get('http://hakedj.be/api/videos')
            .then(response => {
                setVideos(response.data);
            })
            .catch(error => {
                console.error("Error fetching videos:", error);
            });
    }, [refresh]);

    const handlePlay = (videoPath) => {
        setSelectedVideo(videoPath);
    };

    const handleDelete = (videoId, videoTitle) => {
        setVideoToDelete({ id: videoId, title: videoTitle });
        setShowModal(true);
    };

    const confirmDelete = () => {
        axios.delete(`http://hakedj.be/api/delete/${videoToDelete.id}`)
            .then(() => {
                setVideos(videos.filter(video => video._id !== videoToDelete.id));
                setShowModal(false);
                setVideoToDelete(null);
            })
            .catch(error => {
                console.error("Error deleting video:", error);
            });
    };

    const cancelDelete = () => {
        setShowModal(false);
        setVideoToDelete(null);
    };

    function DeleteModal({ isOpen, videoTitle, onConfirm, onCancel }) {
        if (!isOpen) return null;
    
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <p>Supprimer ?</p>
                    <h3 className="modal-title">{videoTitle}</h3>
                    <div className="modal-buttons">
                        <button className="modal-btn cancel-btn" onClick={onCancel}>Annuler</button>
                        <button className="modal-btn confirm-btn" onClick={onConfirm}>Confirmer</button>
                    </div>
                </div>
            </div>
        );
    }

    function VideoCard({ video, handlePlay, handleDelete }) {
        return (
            <div className="card">
                <div className="background-image" style={{ 
                    backgroundImage: `url(http://hakedj.be/${encodeURIComponent(video.thumbnailPath)})`
                }}>
                </div>
                <div className="border"></div>
                <div className="content">
                    <h3>{video.title}</h3>
                    <div className="button-container">
                        <button className='play-button' onClick={() => handlePlay(video.videoPath)}>Play</button>
                        <button className='delete-button' onClick={() => handleDelete(video._id, video.title)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2>Liste des vidéos</h2>
            <div className="video-list">
            {videos.map(video => (
    <VideoCard 
        key={video._id} 
        video={video} 
        handlePlay={handlePlay} 
        handleDelete={handleDelete} 
    />
))}
            </div>
            {selectedVideo && <VideoPlayer key={selectedVideo} videoPath={selectedVideo} />}
            <DeleteModal 
                isOpen={showModal} 
                videoTitle={videoToDelete?.title} 
                onConfirm={confirmDelete} 
                onCancel={cancelDelete} 
            />
        </div>
    );
}

export default VideoList;