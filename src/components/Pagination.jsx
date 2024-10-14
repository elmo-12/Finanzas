import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">MiSitio</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/introduccion" className="text-white hover:text-gray-300">Introducción</Link>
            </li>
            <li>
              <Link to="/funciones" className="text-white hover:text-gray-300">Funciones de Excel</Link>
            </li>
            <li>
              <Link to="/analisis" className="text-white hover:text-gray-300">Análisis Financiero</Link>
            </li>
            <li>
              <Link to="/ratios" className="text-white hover:text-gray-300">Ratios Financieros</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
