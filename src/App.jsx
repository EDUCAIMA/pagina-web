import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AiAgentsPage from './pages/AiAgentsPage';
import CrmPipelinePage from './pages/CrmPipelinePage';
import AutomatizacionesPage from './pages/AutomatizacionesPage';
import IntegracionesPage from './pages/IntegracionesPage';
import ForDentistsPage from './pages/ForDentistsPage';
import LandingDentistsPage from './pages/LandingDentistsPage';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    let attempts = 0;
    const maxAttempts = 30;
    const tryScroll = () => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };
    requestAnimationFrame(tryScroll);
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/landing-odontologos" element={<LandingDentistsPage />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/"                             element={<HomePage />} />
              <Route path="/precios"                      element={<PricingPage />} />
              <Route path="/productos/agente-ia"          element={<AiAgentsPage />} />
              <Route path="/productos/crm-pipeline"       element={<CrmPipelinePage />} />
              <Route path="/productos/automatizaciones"   element={<AutomatizacionesPage />} />
              <Route path="/productos/integraciones"      element={<IntegracionesPage />} />
              <Route path="/soluciones/para-odontologos"  element={<ForDentistsPage />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
