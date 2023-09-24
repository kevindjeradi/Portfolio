//VideoUpload.js
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import 'style/VideoPage.css';
import 'style/VideoUpload.css';

function VideoUpload({ onUploadSuccess }) {
    const fileInput = useRef(null);
    const [notification, setNotification] = useState('');
    const [loading, setLoading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [videos, setVideos] = useState([]);
    const [filename, setFilename] = useState('Choisir un fichier');

    useEffect(() => {
        axios.get('http://hakedj.be/api/videos')
            .then(response => {
                setVideos(response.data);
            })
            .catch(error => {
                console.error("Error fetching videos:", error);
            });
    }, []);

    const handleFileChange = () => {
        if (fileInput.current.files.length > 0) {
            setFilename(fileInput.current.files[0].name);
        }
    };

    const handleUpload = () => {
        const fileName = fileInput.current.files[0].name;
        const fileExists = videos.some(video => video.title === fileName);

        if (fileExists) {
            setNotification('A video with the same name already exists.');
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append('video', fileInput.current.files[0]);
        formData.append('title', fileName);

        axios.post('http://hakedj.be/api/upload', formData, {
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setUploadProgress(percentCompleted);
            }
        })
        .then(response => {
            if (response.status === 200) {
                setNotification(response.data.message);
                setTimeout(() => {
                    onUploadSuccess();
                }, 200);  // delai de 0.20 secondes pour bien afficher le thumbnail
            } else {
                setNotification(response.data.error);
            }
        })
        .catch(error => {
            if (error.response && error.response.data && error.response.data.error) {
                setNotification(error.response.data.error);
            } else {
                console.error("Error uploading video:", error);
                setNotification('An error occurred while uploading the video.');
            }
        })
        .finally(() => {
            setLoading(false);
            setUploadProgress(0);
            fileInput.current.value = null;  // Reset the file input
            setFilename('Choisir un fichier');      // Reset the filename display
        });
    };

    return (
        <div className="upload-container">
            <h2>Envoyer une vidéo</h2>
            <label 
                className={`btn custom-file-upload ${filename !== 'Choisir un fichier' ? 'file-selected' : ''}`} 
                htmlFor="fileInput">
                {filename}
            </label>
            <input type="file" id="fileInput" ref={fileInput} onChange={handleFileChange} />
            <button className='btn' onClick={handleUpload} disabled={filename === 'Choisir un fichier' || loading}>Envoyer</button>
            {loading && (
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
                </div>
            )}
            {notification && <div className="notification">{notification}</div>}
        </div>
    );
    
}

export default VideoUpload;