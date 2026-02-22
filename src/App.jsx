import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AiAgentsPage from './pages/AiAgentsPage';
import ForDentistsPage from './pages/ForDentistsPage';
import LandingDentistsPage from './pages/LandingDentistsPage';

// Componente que detecta el hash en la URL y hace scroll automático
// Espera activamente a que el elemento exista en el DOM antes de hacer scroll
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      let attempts = 0;
      const maxAttempts = 30; // Intentar por hasta 3 segundos (30 x 100ms)

      const tryScroll = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };

      // Iniciar después de un frame para dar tiempo al render inicial
      requestAnimationFrame(tryScroll);
    }
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
