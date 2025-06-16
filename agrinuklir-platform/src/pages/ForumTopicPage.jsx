// src/pages/ForumTopicPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import forumTopics from '../data/forum/forumData'; // Import data topik

function ForumTopicPage() {
  const { topicId } = useParams();
  const topic = forumTopics.find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="container mx-auto p-8 text-center min-h-[calc(100vh-160px)] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Topik Tidak Ditemukan</h1>
        <p className="text-lg text-gray-600 mb-8">
          Maaf, topik forum yang Anda cari tidak ada.
        </p>
        <Link to="/forum" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300">
          Kembali ke Daftar Forum
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 py-12">
      <Link to="/forum" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke Forum
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{topic.title}</h1>
      <p className="text-gray-600 text-sm mb-6">
        Diposting oleh <span className="font-semibold">{topic.author}</span> pada {topic.date}
        <span className="ml-4">· {topic.replies} Balasan</span>
        <span className="ml-4">· {topic.views} Dilihat</span>
      </p>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 prose max-w-none">
        {/* Ini adalah konten utama topik. Untuk demo, kita gunakan description dari data */}
        <p>{topic.description}</p>
        <p className="text-gray-500 mt-4 italic">
          (Area ini akan menjadi tempat di mana konten postingan dan komentar akan ditampilkan.
          Fitur posting dan komentar akan memerlukan integrasi backend.)
        </p>
      </div>

      {/* Area Komentar (placeholder) */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Komentar (Dummy)</h2>
        <p className="text-gray-600">
          Belum ada komentar untuk topik ini. Silakan masuk untuk menambahkan komentar Anda!
        </p>
        {/* Nanti di sini bisa ada daftar komentar dan form untuk menambah komentar baru */}
      </div>
    </div>
  );
}

export default ForumTopicPage;