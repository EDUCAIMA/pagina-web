import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AiAgentsPage from './pages/AiAgentsPage';
import ForDentistsPage from './pages/ForDentistsPage';
import LandingDentistsPage from './pages/LandingDentistsPage';

// Componente que detecta el hash en la URL y hace scroll automático
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Pequeño delay para esperar que React renderice el contenido
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [hash]);

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
