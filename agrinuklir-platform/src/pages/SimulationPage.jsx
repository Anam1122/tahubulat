// src/pages/SimulationPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import simulations from '../data/simulations/simulationsData'; // Import data simulasi

function SimulationPage() {
  return (
    <div className="container mx-auto p-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Daftar Simulasi Interaktif</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {simulations.map(simulation => (
          <Link to={`/simulations/${simulation.id}`} key={simulation.id}> {/* Link ke halaman detail */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
              <img
                src={simulation.image}
                alt={simulation.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{simulation.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{simulation.shortDescription}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                  <span>Kompleksitas: <span className="font-medium">{simulation.complexity}</span></span>
                  <span>Waktu: <span className="font-medium">{simulation.estimatedTime}</span></span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Jika tidak ada simulasi */}
      {simulations.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg">Belum ada simulasi yang tersedia saat ini.</p>
        </div>
      )}
    </div>
  );
}

export default SimulationPage;