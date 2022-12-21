import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Play from './pages/Play/Play';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
