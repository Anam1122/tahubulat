// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container mx-auto p-8 text-center min-h-[calc(100vh-160px)] flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-3xl text-gray-800 mb-4">Halaman Tidak Ditemukan</p>
      <p className="text-lg text-gray-600 mb-8">
        Maaf, halaman yang Anda cari tidak ada.
      </p>
      <Link to="/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFoundPage;