import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your pages
import Home from './pages/Home';
import Savings from './pages/Savings';
import Loan from './pages/Loan';
import Nominee from './pages/Nominee';
import About from './pages/About';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/nominee" element={<Nominee />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </Router>
  );
}

export default App;
//bg-gradient-to-r from-[#06426d] to-[#2575fc]; make it static bg color code :[#06426d]