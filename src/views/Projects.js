import CustomImageAvatar from '../components/CustomImageAvatar';
import ProjectsList from '../components/projectsList';
import '../style/Projects.css';
import avatar from '../images/avatar.png'

function Projects() {
  return (
    <div className="Projects">
      <header className="Projects-header">
      <div className="center-container">
          <CustomImageAvatar size={220} imgPath={avatar} className="centered-avatar" />
          <div className="content">
              <h2>Mes projets</h2>
              <h2>Mes projets</h2>
            </div>
      </div>
      <ProjectsList></ProjectsList>
      </header>
    </div>
  );
}

export default Projects;