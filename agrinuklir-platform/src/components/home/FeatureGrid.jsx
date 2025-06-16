// src/components/home/FeatureGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const features = [
  // ... data features tetap sama ...
  {
    icon: '/assets/icons/agriculture-icons/education.svg',
    title: 'Modul Edukasi Lengkap',
    description: 'Pelajari dasar-dasar dan aplikasi nuklir di pertanian melalui materi interaktif.',
    link: '/modules', // Path tetap sama
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800'
  },
  // ... fitur lainnya ...
];

function FeatureGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Mengapa AgriNuklir Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <img src={feature.icon} alt={feature.title} className="w-20 h-20 mb-4" />
              <h3 className={`text-2xl font-semibold mb-2 ${feature.textColor}`}>{feature.title}</h3>
              <p className="text-gray-700 mb-4">{feature.description}</p>
              {/* Ubah <a> ke <Link> */}
              <Link
                to={feature.link} // Gunakan 'to' bukan 'href'
                className={`mt-auto ${feature.textColor} font-medium hover:underline flex items-center`}
              >
                Pelajari Lebih Lanjut
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;