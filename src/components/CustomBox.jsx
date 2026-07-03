import React from 'react';
import './CustomBox.css';

function CustomBox() {
  return (
    <section id="custom-box" className="custom-box">
      <div className="container">
        <h2 className="section-title" style={{color: 'white'}}>Monte sua Caixa Mágica</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Escolha o Tamanho</h3>
            <p>Pequena, Média ou Gigante! Depende da sua fome de doces.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Encha de Delícias</h3>
            <p>Misture gomas, chocolates e pirulitos como quiser.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Receba em Casa</h3>
            <p>Entregamos a magia direto na sua porta, fresquinha.</p>
          </div>
        </div>
        <div className="box-action">
          <button className="btn-hero secondary animate-pulse-slow">Começar a Montar</button>
        </div>
      </div>
    </section>
  );
}

export default CustomBox;
