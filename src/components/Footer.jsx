import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo"><span className="logo-icon">🍬</span> Fábrica de Maravilhas</div>
          <p>Adoçando a sua vida desde 2026.</p>
        </div>
        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <a href="#hero">Início</a>
          <a href="#favorites">Produtos</a>
          <a href="#custom-box">Caixas</a>
        </div>
        <div className="footer-social">
          <h3>Siga a Magia</h3>
          <div className="social-icons">
            <span>📸 Instagram</span>
            <span>📱 TikTok</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Fábrica de Maravilhas. Feito com amor e muito açúcar.</p>
      </div>
    </footer>
  );
}

export default Footer;
