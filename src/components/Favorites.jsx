import React from 'react';
import './Favorites.css';

const MOCK_CANDIES = [
  { id: 1, name: "Ursinhos de Goma", desc: "Super macios e frutados", price: "R$ 12,00" },
  { id: 2, name: "Tiras Cítricas", desc: "Azedinhas e viciantes", price: "R$ 15,00" },
  { id: 3, name: "Pirulitos Gigantes", desc: "Clássicos que duram horas", price: "R$ 8,00" },
  { id: 4, name: "Jujubas Premium", desc: "Sabores exóticos", price: "R$ 10,00" },
];

function Favorites() {
  return (
    <section id="favorites" className="favorites">
      <div className="container">
        <h2 className="section-title">Os Favoritos da Galera</h2>
        <div className="favorites-grid">
          <div className="favorites-image-card">
             <img src="/assorted-candies.png" alt="Doces sortidos" className="candies-img" />
          </div>
          <div className="favorites-list">
            {MOCK_CANDIES.map(candy => (
              <div key={candy.id} className="candy-item">
                <div className="candy-info">
                  <h3>{candy.name}</h3>
                  <p>{candy.desc}</p>
                </div>
                <div className="candy-price">{candy.price}</div>
              </div>
            ))}
            <button className="btn-primary mt-4">Ver Cardápio Completo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Favorites;
