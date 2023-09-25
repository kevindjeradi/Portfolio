import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from 'views/Projects';
import HomePage from 'views/HomePage';
import VideoPage from 'views/VideoPage';
import Experiences from 'views/Experiences';
import ExperiencesBis from 'views/ExperiencesBis';

function App() {
  return (
    <Router>
      <Routes>
        <Route
              path="/" element={<HomePage />}/>
        <Route
              path="/projects" element={<Projects />}/>
        <Route
              path="/stream" element={<VideoPage />}/>
        <Route
              path="/experience" element={<Experiences />} />
        <Route
              path="/experiences" element={<ExperiencesBis />} />
      </Routes>
    </Router>
  );
}

export default App;