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
        <h2 className="title">Diciembre 2024</h2>
        <ul className="event-list">
          <li>13/10 - Ovalo, Dean Funes</li>
          <li>19 y 20/10 - Velocidad Ovalo, Justiniano Posse</li>
          <li>26 y 27/10 - MX Prov, La Quinta Cba</li>
          <li>26 y 27/10 - CPRO Enduro, Villa Guillinzo</li>
        </ul>
      </div>
    </div>
  );
}

export default CentralContent;