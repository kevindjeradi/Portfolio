import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import HomePage from './HomePage';
import HomeBis from './HomeBis';


function App() {
  return (
    <Router>
      <Routes>
        <Route
              path="/" element={<HomeBis />}/>
        <Route
              path="/projects" element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App;