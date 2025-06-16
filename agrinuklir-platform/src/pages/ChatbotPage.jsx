// src/pages/ChatbotPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { faqResponses, defaultResponse } from '../data/chatbot/chatbotData';

function ChatbotPage() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Halo! Saya AgriNuklir Bot. Ada yang ingin Anda tanyakan tentang agrinuklir?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input.trim() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.text);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
    }, 800); // 800ms delay
  };

  const getBotResponse = (userQuestion) => {
    const lowerCaseQuestion = userQuestion.toLowerCase();
    // Check for direct matches
    const matchedFaq = faqResponses.find(
      (faq) => lowerCaseQuestion.includes(faq.question)
    );

    if (matchedFaq) {
      return matchedFaq.response;
    }

    // Simple keyword matching for common phrases
    if (lowerCaseQuestion.includes('halo') || lowerCaseQuestion.includes('hi')) {
      return "Halo! Ada yang bisa saya bantu?";
    }
    if (lowerCaseQuestion.includes('terima kasih') || lowerCaseQuestion.includes('makasih')) {
      return "Sama-sama! Senang bisa membantu.";
    }
    if (lowerCaseQuestion.includes('apa kabar')) {
        return "Saya bot, jadi saya tidak punya kabar, tapi saya siap membantumu! Ada pertanyaan tentang agrinuklir?";
    }

    // If no direct or keyword match, return default response
    return defaultResponse;
  };

  return (
    <div className="container mx-auto p-4 py-12 flex flex-col min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Chatbot Edukasi AgriNuklir</h1>

      <div className="flex-grow bg-white rounded-lg shadow-xl overflow-hidden flex flex-col max-w-2xl mx-auto w-full">
        {/* Chat Messages Area */}
        <div className="flex-grow p-4 overflow-y-auto space-y-4" style={{ maxHeight: 'calc(100vh - 350px)' }}> {/* Adjusted max-height */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-3 rounded-lg max-w-[70%] ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* For auto-scrolling */}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-4 bg-gray-100 border-t border-gray-200">
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pertanyaanmu..."
              className="flex-grow border border-gray-300 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-r-lg transition duration-300 flex items-center justify-center"
            >
              Kirim
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatbotPage;