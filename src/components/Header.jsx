import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-icon">🍬</span>
          Fábrica de Maravilhas
        </div>
        <nav className="nav">
          <a href="#hero">Início</a>
          <a href="#favorites">Destaques</a>
          <a href="#custom-box">Monte sua Caixa</a>
          <button className="btn-primary animate-pulse-slow">Peça Agora</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
