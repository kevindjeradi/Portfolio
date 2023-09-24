import CustomImageAvatar from 'components/CustomImageAvatar';
import ProjectsList from 'components/Projects/ProjectsList';
import CustomAppBar from 'components/CustomAppBar';
import avatar from 'images/photo.jpg'
import 'style/Projects.css';

import { useEffect } from 'react';

function Projects() {

  useEffect(() => {
    document.body.style.overflow = 'auto';  // enable scrolling when component mounts

    return () => {}
}, []);

  return (
    <>
      <CustomAppBar />
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