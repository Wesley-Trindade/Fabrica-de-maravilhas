import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <img src="/hero-bg.png" alt="Fábrica de Maravilhas de Doces" className="hero-img" />
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title animate-float">Onde os doces ganham vida!</h1>
          <p className="hero-subtitle">
            Mergulhe em um mundo de cores, sabores e muita magia. 
            Adoce o seu dia com as nossas maravilhas artesanais.
          </p>
          <div className="hero-actions">
            <button className="btn-hero primary animate-pulse-slow">Explorar Delícias</button>
            <button className="btn-hero secondary">Ver Mais Vendidos</button>
          </div>
        </div>
      </div>
      <div className="decorations">
        <span className="floating-candy c1">🍭</span>
        <span className="floating-candy c2">🍬</span>
        <span className="floating-candy c3">🍫</span>
        <span className="floating-candy c4">🍩</span>
      </div>
    </section>
  );
}

export default Hero;
