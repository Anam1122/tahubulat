// src/pages/ModulesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import modules from '../data/modules/modulesData'; // Import data modul

function ModulesPage() {
  return (
    <div className="container mx-auto p-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Daftar Modul Edukasi</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map(module => (
          <Link to={`/modules/${module.id}`} key={module.id}> {/* Link ke halaman detail */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
              <img
                src={module.image}
                alt={module.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{module.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{module.shortDescription}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                  <span>Kategori: <span className="font-medium">{module.category}</span></span>
                  <span>Level: <span className="font-medium">{module.level}</span></span>
                  <span>Durasi: <span className="font-medium">{module.duration}</span></span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ModulesPage;