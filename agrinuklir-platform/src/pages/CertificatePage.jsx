// src/pages/CertificatePage.jsx
import React from 'react';

function CertificatePage() {
  // Data dummy untuk contoh sertifikat.
  // Nanti ini bisa diisi dari database atau state setelah user menyelesaikan modul.
  const certificateData = {
    name: "Nama Pengguna Contoh",
    module: "Iradiasi Benih: Meningkatkan Kualitas Tanaman",
    date: "15 Juni 2025", // Tanggal saat ini
    issuer: "AgriNuklir Platform",
    issuerSignature: "/assets/images/signature.png" // Placeholder untuk tanda tangan
  };

  const isCertificateAvailable = true; // Set ini ke true untuk menampilkan sertifikat dummy

  return (
    <div className="container mx-auto p-4 py-12 text-center min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Sertifikat Kompetensi</h1>

      {isCertificateAvailable ? (
        <div className="bg-white border-4 border-yellow-500 rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto my-8 transform transition duration-500 hover:scale-105">
          <h2 className="text-5xl font-extrabold text-yellow-600 mb-4 tracking-wide">SERTIFIKAT</h2>
          <p className="text-2xl text-gray-700 mb-6">Diberikan Kepada</p>
          <p className="text-6xl font-black text-green-700 mb-8">{certificateData.name}</p>
          <p className="text-2xl text-gray-700 mb-2">Atas Penyelesaian Modul</p>
          <p className="text-3xl font-bold text-green-800 mb-8">"{certificateData.module}"</p>

          <div className="flex flex-col md:flex-row justify-around items-center mt-10">
            <div className="text-center mb-6 md:mb-0">
              <p className="text-lg text-gray-600 mb-2">Diterbitkan pada:</p>
              <p className="text-xl font-semibold text-gray-800">{certificateData.date}</p>
            </div>
            <div className="text-center">
              {certificateData.issuerSignature && (
                <img
                  src={certificateData.issuerSignature}
                  alt="Tanda Tangan Penerbit"
                  className="w-40 h-auto mx-auto mb-2"
                />
              )}
              <p className="text-lg font-semibold text-gray-800 border-t border-gray-400 pt-2 inline-block">
                {certificateData.issuer}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Sertifikat ini mengesahkan bahwa individu yang disebutkan telah berhasil menyelesaikan dan menguasai materi modul yang bersangkutan.
          </p>
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg shadow-md p-8 max-w-xl mx-auto my-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Belum Ada Sertifikat</h2>
          <p className="text-lg text-gray-600 mb-6">
            Selesaikan modul edukasi dan kuisnya untuk mendapatkan sertifikat kompetensi Anda!
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Sertifikat akan otomatis muncul di sini setelah Anda memenuhi persyaratan.
          </p>
          <a
            href="/modules"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Lihat Modul Edukasi
          </a>
        </div>
      )}
    </div>
  );
}

export default CertificatePage;