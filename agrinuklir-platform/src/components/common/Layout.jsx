// src/components/common/Layout.jsx
import React from 'react';
import Header from './Header'; // Import komponen Header
import Footer from './Footer'; // Import komponen Footer

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children} {/* Ini akan merender konten halaman */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;