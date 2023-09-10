import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import HomePage from './HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route
              path="/" element={<HomePage />}/>
        <Route
              path="/projects" element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App;