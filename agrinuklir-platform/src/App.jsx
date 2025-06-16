// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import ModulesPage from './pages/ModulesPage';
import ModuleDetailPage from './pages/ModuleDetailPage';
import SimulationPage from './pages/SimulationPage';
import SimulationDetailPage from './pages/SimulationDetailPage';
import ChatbotPage from './pages/ChatbotPage';
import ForumPage from './pages/ForumPage';
import ForumTopicPage from './pages/ForumTopicPage';
import CertificatePage from './pages/CertificatePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage'; // Import halaman FAQ
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Import halaman Privacy Policy
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/modules/:moduleId" element={<ModuleDetailPage />} />
          <Route path="/simulations" element={<SimulationPage />} />
          <Route path="/simulations/:simulationId" element={<SimulationDetailPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/forum/:topicId" element={<ForumTopicPage />} />
          <Route path="/certificates" element={<CertificatePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />             {/* Rute baru untuk FAQ */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* Rute baru untuk Kebijakan Privasi */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;