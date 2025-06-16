// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Bagian 1: Informasi Platform */}
          <div className="col-span-full md:col-span-1 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-green-400">AgriNuklir Platform</h3>
            <p className="text-gray-400 text-sm">
              Inovasi pertanian masa depan dengan pemanfaatan teknologi nuklir untuk ketahanan pangan yang berkelanjutan.
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Ikon media sosial dummy */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Placeholder Facebook Icon */}
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h3.046l-.492 3.03h-2.554v6.987A10 10 0 0022 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Placeholder Twitter Icon */}
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 014 9.74v.053a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Placeholder Instagram Icon */}
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.792.006 3.24.012l.008.002.008.002-.008.002c.677.016 1.157.108 1.492.218.47.157.87.368 1.25.748.38.38.59.78.748 1.25.11.335.202.815.218 1.492l.002.008.002.008.012.393c.01 2.599 0 2.923 0 5.432s-.01 2.833 0 5.432l-.012.393-.002.008-.002.008c-.016.677-.108 1.157-.218 1.492-.157.47-.368.87-.748 1.25-.38.38-.78.59-1.25.748-.335.11-.815.202-1.492.218l-.008.002-.008.002-.393.012c-2.599.01-2.923 0-5.432 0s-2.833-.01-5.432 0l-.393-.012-.008-.002-.008-.002c-.677-.016-1.157-.108-1.492-.218-.47-.157-.87-.368-1.25-.748-.38-.38-.59-.78-.748-1.25-.11-.335-.202-.815-.218-1.492l-.002-.008-.002-.008-.012-.393c-.01-2.599 0-2.923 0-5.432s.01-2.833 0-5.432l.012-.393.002-.008.002-.008c.016-.677.108-1.157.218-1.492.157-.47.368-.87.748-1.25.38-.38.78-.59 1.25-.748.335-.11.815-.202 1.492-.218l.008-.002.008-.002.393-.012H12.315zM12 7.775a4.225 4.225 0 100 8.45 4.225 4.225 0 000-8.45zM12 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM21.12 3.87a1.432 1.432 0 00-1.432-1.432H19.238c-.282 0-.425-.01-.75-.04l-.004-.002c-.15-.008-.288-.016-.436-.016h-1.077a.6.6 0 00-.6.6v.6c0 .332.27.6.6.6h1.077c.148 0 .286.008.436.016l.004.002c.325.03.468.04.75.04h.45c.792 0 1.432.64 1.432 1.432v.45a.6.6 0 00.6.6h.6c.33 0 .6-.27.6-.6v-.45c0-.282-.01-.425-.04-.75l-.002-.004c-.008-.15-.016-.288-.016-.436v-1.077a.6.6 0 00-.6-.6h-.6z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Tambahkan ikon lain jika perlu */}
            </div>
          </div>

          {/* Bagian 2: Tautan Cepat */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-green-400 transition-colors duration-300">Beranda</Link></li>
              <li><Link to="/modules" className="hover:text-green-400 transition-colors duration-300">Modul Edukasi</Link></li>
              <li><Link to="/simulations" className="hover:text-green-400 transition-colors duration-300">Simulasi Interaktif</Link></li>
              <li><Link to="/chatbot" className="hover:text-green-400 transition-colors duration-300">Chatbot AI</Link></li>
              <li><Link to="/forum" className="hover:text-green-400 transition-colors duration-300">Forum Komunitas</Link></li>
              <li><Link to="/certificates" className="hover:text-green-400 transition-colors duration-300">Sertifikat</Link></li>
            </ul>
          </div>

          {/* Bagian 3: Sumber Daya & Bantuan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sumber Daya</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-green-400 transition-colors duration-300">Tentang Kami</Link></li>
              <li><Link to="/faq" className="hover:text-green-400 transition-colors duration-300">FAQ</Link></li> {/* Ubah ini */}
              <li><Link to="/privacy-policy" className="hover:text-green-400 transition-colors duration-300">Kebijakan Privasi</Link></li> {/* Ubah ini */}
              <li><Link to="/contact" className="hover:text-green-400 transition-colors duration-300">Hubungi Kami</Link></li>
              <li><a href="https://www.brin.go.id/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">BRIN (Eksternal)</a></li>
            </ul>
          </div>

          {/* Bagian 4: Informasi Kontak (Dummy) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <p className="text-gray-400 text-sm">
              Email: <a href="mailto:info@agrinuklir.com" className="hover:text-green-400 transition-colors duration-300">info@agrinuklir.com</a>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Telepon: +62 123 4567 890 (Dummy)
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Alamat: Jl. Inovasi Pertanian No. 123, Jakarta, Indonesia (Dummy)
            </p>
          </div>
        </div>

        {/* Bagian Hak Cipta */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AgriNuklir Platform. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="mt-2">Dibuat dengan ❤️ untuk kemajuan pertanian Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;