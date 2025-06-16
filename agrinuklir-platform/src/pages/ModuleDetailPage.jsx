// src/pages/ModuleDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import modules from '../data/modules/modulesData'; // Import data modul

function ModuleDetailPage() {
  const { moduleId } = useParams(); // Mengambil parameter ID dari URL
  const module = modules.find(m => m.id === moduleId); // Mencari modul berdasarkan ID

  if (!module) {
    return (
      <div className="container mx-auto p-8 text-center min-h-[calc(100vh-160px)] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Modul Tidak Ditemukan</h1>
        <p className="text-lg text-gray-600 mb-8">
          Maaf, modul yang Anda cari tidak ada.
        </p>
        <Link to="/modules" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300">
          Kembali ke Daftar Modul
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 py-12">
      <Link to="/modules" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke Daftar Modul
      </Link>

      <img
        src={module.image}
        alt={module.title}
        className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
      />

      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">{module.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{module.shortDescription}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 text-sm mb-8">
        <p><strong>Kategori:</strong> {module.category}</p>
        <p><strong>Level:</strong> {module.level}</p>
        <p><strong>Durasi:</strong> {module.duration}</p>
      </div>

      <div className="prose max-w-none"> {/* Gunakan kelas 'prose' untuk styling markdown-like */}
        {module.content.map((block, index) => {
          if (block.type === 'heading') {
            return <h2 key={index} className="text-3xl font-bold text-gray-800 mt-8 mb-4">{block.text}</h2>;
          } else if (block.type === 'paragraph') {
            return <p key={index} className="text-gray-700 leading-relaxed mb-4">{block.text}</p>;
          } else if (block.type === 'list') {
            return (
              <ul key={index} className="list-disc list-inside text-gray-700 mb-4">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          } else if (block.type === 'image') {
            return (
              <div key={index} className="my-6 text-center">
                <img src={block.src} alt={block.alt} className="max-w-full h-auto mx-auto rounded-lg shadow" />
                {block.caption && <p className="text-sm text-gray-500 mt-2">{block.caption}</p>}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ModuleDetailPage;