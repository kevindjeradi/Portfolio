import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import HomePage from './HomePage';
import VideoPage from './VideoPage';

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
      </Routes>
    </Router>
  );
}

export default App;