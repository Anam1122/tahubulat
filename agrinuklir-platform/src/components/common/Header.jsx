// src/components/common/Header.jsx
import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengelola status menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-green-600 text-white p-4 shadow-md sticky top-0 z-50"> {/* Tambah sticky top-0 z-50 */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Nama Platform */}
        <Link to="/" className="text-2xl font-bold" onClick={closeMenu}>AgriNuklir Platform</Link>

        {/* Tombol Hamburger untuk Mobile */}
        <div className="md:hidden"> {/* Hanya tampil di ukuran layar <= md */}
          <button onClick={toggleMenu} className="focus:outline-none focus:ring-2 focus:ring-green-300 rounded p-1">
            {isMenuOpen ? (
              // Ikon X saat menu terbuka
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Ikon Hamburger saat menu tertutup
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigasi Desktop */}
        <nav className="hidden md:block"> {/* Sembunyikan di mobile, tampilkan di desktop */}
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-green-200">Beranda</Link></li>
            <li><Link to="/modules" className="hover:text-green-200">Modul</Link></li>
            <li><Link to="/simulations" className="hover:text-green-200">Simulasi</Link></li>
            <li><Link to="/chatbot" className="hover:text-green-200">Chatbot</Link></li>
            <li><Link to="/forum" className="hover:text-green-200">Forum</Link></li>
            <li><Link to="/certificates" className="hover:text-green-200">Sertifikat</Link></li>
          </ul>
        </nav>
      </div>

      {/* Menu Navigasi Mobile (overlay/drawer) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 animate-fade-in"> {/* Overlay penuh layar */}
          <nav>
            <ul className="flex flex-col space-y-6 text-xl">
              <li><Link to="/" className="text-white hover:text-green-200" onClick={closeMenu}>Beranda</Link></li>
              <li><Link to="/modules" className="text-white hover:text-green-200" onClick={closeMenu}>Modul</Link></li>
              <li><Link to="/simulations" className="text-white hover:text-green-200" onClick={closeMenu}>Simulasi</Link></li>
              <li><Link to="/chatbot" className="text-white hover:text-green-200" onClick={closeMenu}>Chatbot</Link></li>
              <li><Link to="/forum" className="text-white hover:text-green-200" onClick={closeMenu}>Forum</Link></li>
              <li><Link to="/certificates" className="text-white hover:text-green-200" onClick={closeMenu}>Sertifikat</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;