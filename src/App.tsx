import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { PressLine } from './pages/business/PressLine';
import { PolishingLine } from './pages/business/PolishingLine';

// Create a ScrollToTop component to handle scroll reset on navigation
// Create a ScrollToTop component to handle scroll reset on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/*" element={<Company />} />
          <Route path="/business/press-line" element={<PressLine />} />
          <Route path="/business/polishing-line" element={<PolishingLine />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
