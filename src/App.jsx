import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import  MatchDayComponent  from './components/MatchDayComponent';
import { LastMatchday } from './components/LastMatchday';
import { Navbar } from './components/Navbar';
import { ModalFirst } from './components/ModalFirst';
import { Footer } from './components/Footer';
import { Built } from './components/Built';
import Topurarlar from './components/Topurarlar';
import RootLayout from './components/Layout/RootLayout'; // Assuming RootLayout is correctly defined

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      {isModalOpen && <ModalFirst onClose={handleCloseModal} />}
      <div className={isModalOpen ? 'blur' : ''}>
        <Header />
        <Navbar />
        <Hero />
        <MatchDayComponent />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {/* <Route path="/Topurarlar" element={<Topurarlar />} /> */}
          </Route>
        </Routes>
        <LastMatchday />
        <Footer />
        <Built />
      </div>
    </Router>
  );
}

export default App;
