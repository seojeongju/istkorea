
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechSection } from './components/TechSection';
import { BusinessSection } from './components/BusinessSection';
import { ProductSection } from './components/ProductSection';
import { SupportSection } from './components/SupportSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-accent selection:text-white">
      <Header />
      <Hero />
      <main>
        <TechSection />
        <BusinessSection />
        <ProductSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
