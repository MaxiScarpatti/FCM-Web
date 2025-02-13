import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const reglamentos = [
  { nombre: 'Reglamento General', archivo: 'GENERAL.pdf' },
  { nombre: 'Reg.Téc. 110 Standard', archivo: 'Reg.Téc. 110 Standard.pdf' },
  { nombre: 'Reg.Téc.110 CAM', archivo: 'Reg.Téc.110 CAM.pdf' },
  { nombre: 'Reg.Téc.110 LIBRE', archivo: 'Reg.Téc.110 LIBRE.pdf' },
  { nombre: 'Reg.Téc.125 Internacional', archivo: 'Reg.Téc.125 Internacional.pdf' },
  { nombre: 'Reg.Téc.450 Internacional', archivo: 'Reg.Téc.450 Internacional.pdf' },
  { nombre: 'Reg.Téc.Escuela 50', archivo: 'Reg.Téc.Escuela 50.pdf' },
  { nombre: 'Reg.Téc.Promo Menor', archivo: 'Reg.Téc.Promo Menor.pdf' },
  { nombre: 'Reg.Téc.Standard 50cc.', archivo: 'Reg.Téc.Standard 50cc.pdf' },
  { nombre: 'Reg.Técnico  Fuerza Libre', archivo: 'Reg.Técnico  Fuerza Libre.pdf' }
];

function ReglamentoVelocidad() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">📜 Reglamento de Velocidad</h1>
      <p className="text-gray-600 text-center mb-8">
        Descarga los reglamentos en formato PDF. Haz clic en el que necesites.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reglamentos.map((reglamento, index) => (
          <a
            key={index}
            href={`/docs/velocidad/${reglamento.archivo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-500"
          >
            <FaFilePdf className="text-red-500 text-3xl" />
            <span className="text-lg font-medium text-gray-700 hover:text-blue-600">{reglamento.nombre}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ReglamentoVelocidad;

