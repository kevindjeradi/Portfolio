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
        axios.get('http://localhost:5000/api/videos')
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
        axios.delete(`http://localhost:5000/api/delete/${videoToDelete.id}`)
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

    return (
        <div>
            <h2>Liste des vidéos</h2>
            <div className="video-list">
                {videos.map(video => (
                    <div className="video-card-wrapper">
                        <div
                            key={video._id} 
                            className="video-card"
                            style={{ 
                                backgroundImage: `url(http://localhost:5000/${encodeURIComponent(video.thumbnailPath)})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <h3>{video.title}</h3>
                            <button onClick={() => handlePlay(video.videoPath)}>Play</button>
                            <button onClick={() => handleDelete(video._id, video.title)}>Delete</button>
                        </div>
                    </div>
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