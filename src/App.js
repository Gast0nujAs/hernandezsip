import React from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ContentHome } from './components/ContentHome';
import { CarouselHome } from './components/CarouselHome';
import { Videoplay } from './components/Videoplay';
import { VideoHome } from './components/VideoHome';
import { Afavor } from './components/Afavor';
import { Footer } from './components/Footer';
import  {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Service } from './pages/Service';
import { Contacto } from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
