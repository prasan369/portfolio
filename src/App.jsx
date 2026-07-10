import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Work from './pages/Work';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './components/components.css';

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <Nav chatOpen={chatOpen} setChatOpen={setChatOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <ChatWidget open={chatOpen} setOpen={setChatOpen} />
    </HashRouter>
  );
}

export default App;
