// src/pages/SimulationDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import simulations from '../data/simulations/simulationsData'; // Import data simulasi

function SimulationDetailPage() {
  const { simulationId } = useParams(); // Mengambil parameter ID dari URL
  const simulation = simulations.find(s => s.id === simulationId); // Mencari simulasi berdasarkan ID

  if (!simulation) {
    return (
      <div className="container mx-auto p-8 text-center min-h-[calc(100vh-160px)] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Simulasi Tidak Ditemukan</h1>
        <p className="text-lg text-gray-600 mb-8">
          Maaf, simulasi yang Anda cari tidak ada.
        </p>
        <Link to="/simulations" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300">
          Kembali ke Daftar Simulasi
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 py-12">
      <Link to="/simulations" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke Daftar Simulasi
      </Link>

      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">{simulation.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{simulation.detailedDescription}</p>

      <img
        src={simulation.image}
        alt={simulation.title}
        className="w-full max-h-96 object-contain rounded-lg shadow-lg mb-8"
      />

      <div className="bg-blue-50 p-6 rounded-lg text-blue-800 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Mulai Simulasi!</h2>
        <p className="mb-4">
          Bagian ini adalah tempat di mana simulasi interaktif akan dimuat.
          Kamu bisa mengintegrasikan canvas JavaScript, Three.js, atau *library* lain di sini.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg shadow transition duration-300">
          Mulai Eksperimen
        </button>
        {/* Contoh: Di sini nanti bisa ada elemen <canvas> atau komponen simulasi */}
      </div>
    </div>
  );
}

export default SimulationDetailPage;