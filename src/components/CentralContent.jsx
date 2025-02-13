import React from 'react';
import backgroundImage from '../img_fondo.jpg';

function CentralContent() {
  return (
    <div className="central-content">
      <img
        src={backgroundImage}
        alt="Imagen de Fondo"
        className="bg-image"
      />
      <div className="text-overlay">
        <h2 className="title">Febrero 2025</h2>
        <ul className="event-list">
          <li>8/2 - MX Nocturno, Laboulaye</li>
          <li>15 y 16/2 - Vuelta al Cajón por relevo, Capilla del Monte</li>
        </ul>
      </div>
    </div>
  );
}

export default CentralContent;