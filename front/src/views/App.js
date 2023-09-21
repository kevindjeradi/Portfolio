import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import HomePage from './HomePage';
import VideoPage from './VideoPage';
import Timeline from '../components/Timeline';

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
              path="/experience" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;