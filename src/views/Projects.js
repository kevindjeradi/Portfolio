import CustomImageAvatar from '../components/CustomImageAvatar';
import ProjectsList from '../components/projectsList';
import '../style/Projects.css';
import avatar from '../images/photo.jpg'
import useVantaFog from '../components/useVantaFog';
import { useEffect } from 'react';

function Projects() {
  useVantaFog();

  useEffect(() => {
    document.body.style.overflow = 'auto';  // enable scrolling when component mounts

    return () => {
        // Here you can either reset it to 'hidden' or leave it at 'auto' 
        // depending on what you want when navigating away from Projects
    }
}, []);

  return (
    <>
      <div id="vanta-bg-fog"></div>
      <div className="Projects">
        <header className="Projects-header">
        <div className="center-container">
            <CustomImageAvatar borderRadius='10px' size={220} imgPath={avatar} className="centered-avatar" />
            <div className="content">
                <h2>Mes projets</h2>
                <h2>Mes projets</h2>
              </div>
        </div>
        <ProjectsList></ProjectsList>
        </header>
      </div>
    </>
  );
}

export default Projects;