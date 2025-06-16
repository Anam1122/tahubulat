// src/pages/ForumPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Kita tetap gunakan Link untuk potensi masa depan
import forumTopics from '../data/forum/forumData'; // Import data forum

function ForumPage() {
  return (
    <div className="container mx-auto p-4 py-12 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Forum Komunitas AgriNuklir</h1>

      {/* Tombol Buat Topik Baru (dummy) */}
      <div className="text-right mb-6">
        <button
          onClick={() => alert('Fitur membuat topik baru akan segera hadir!')}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg shadow transition duration-300 flex items-center justify-center ml-auto"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Buat Topik Baru
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {forumTopics.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Topik Diskusi
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Penulis
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Balasan
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Dilihat
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aktivitas Terakhir
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {forumTopics.map((topic) => (
                // Link to a dummy href for now, ideally to `/forum/${topic.id}`
                <tr key={topic.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {/* Ikon forum atau avatar dummy */}
                        <svg className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm3-1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {/* Untuk saat ini, arahkan ke dummy URL atau tambahkan rute detail forum nanti */}
                          <Link to={`/forum/${topic.id}`} className="hover:underline text-blue-600">
                            {topic.title}
                          </Link>
                        </div>
                        <div className="text-sm text-gray-500">{topic.description.substring(0, 70)}...</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                    <div className="text-sm text-gray-900">{topic.author}</div>
                    <div className="text-sm text-gray-500">{topic.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                    {topic.replies}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                    {topic.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {topic.lastActivity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-8 text-center text-gray-600">
            <p className="text-lg mb-4">Belum ada topik diskusi yang tersedia saat ini.</p>
            <p>Jadilah yang pertama memulai diskusi!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForumPage;