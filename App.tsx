
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import TrackingPage from './pages/TrackingPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-white text-dark-gray font-sourcesans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
