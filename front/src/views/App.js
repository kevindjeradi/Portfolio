import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from 'views/Projects';
import HomePage from 'views/HomePage';
import VideoPage from 'views/VideoPage';
import Experiences from 'views/Experiences';
import Bio from 'views/Bio';
import ComicBookBio from 'views/ComicBookBio';

function App() {
      return (
            <Router>
                  <Routes>
                        <Route
                              path="/" element={<HomePage />}/>
                        <Route
                              path="/Bio" element={<Bio />}/>
                        <Route
                              path="/ComicBookBio" element={<ComicBookBio />}/>
                        <Route
                              path="/projects" element={<Projects />}/>
                        <Route
                              path="/stream" element={<VideoPage />}/>
                        <Route
                              path="/experiences" element={<Experiences />} />
                  </Routes>
            </Router>
      );
}

export default App;