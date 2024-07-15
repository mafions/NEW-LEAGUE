import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ModalFirst } from './components/ModalFirst';
import Home from './components/Home';
import Topurarlar from './components/Topurarlar';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Navbar />
      {isModalOpen && <ModalFirst onClose={handleCloseModal} />}
      <div className={isModalOpen ? 'blur' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topurarlar" element={<Topurarlar/>} />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
