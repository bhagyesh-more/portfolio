import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="app-container">
      {/* Background animated gradient blobs */}
      <div className="bg-gradient-blobs"></div>
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
