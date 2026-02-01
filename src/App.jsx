import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AiAgentsPage from './pages/AiAgentsPage';
import ForDentistsPage from './pages/ForDentistsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/precios" element={<PricingPage />} />
          <Route path="/productos/agente-ia" element={<AiAgentsPage />} />
          <Route path="/soluciones/para-odontologos" element={<ForDentistsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
