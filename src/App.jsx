import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AiAgentsPage from './pages/AiAgentsPage';
import ForDentistsPage from './pages/ForDentistsPage';
import LandingDentistsPage from './pages/LandingDentistsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing-odontologos" element={<LandingDentistsPage />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/precios" element={<PricingPage />} />
              <Route path="/productos/agente-ia" element={<AiAgentsPage />} />
              <Route path="/soluciones/para-odontologos" element={<ForDentistsPage />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
