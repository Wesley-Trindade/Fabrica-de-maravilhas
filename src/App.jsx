import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Favorites from './components/Favorites';
import CustomBox from './components/CustomBox';
import Footer from './components/Footer';

// Estilos globais e animações
import './index.css';
import './animations.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Favorites />
        <CustomBox />
      </main>
      <Footer />
    </div>
  );
}

export default App;
