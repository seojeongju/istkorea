import { Hero } from '../components/Hero';
import { TechSection } from '../components/TechSection';
import { BusinessSection } from '../components/BusinessSection';
import { ProductSection } from '../components/ProductSection';
import { SupportSection } from '../components/SupportSection';

export const Home = () => {
    return (
        <main>
            <Hero />
            <TechSection />
            <BusinessSection />
            <ProductSection />
            <SupportSection />
        </main>
    );
};
