import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Company } from './pages/Company';

// Create a ScrollToTop component to handle scroll reset on navigation
const ScrollToTop = () => {
  return <ScrollRestoration />;
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
