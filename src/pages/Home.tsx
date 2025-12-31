import { Hero } from '../components/Hero';
import { TechSection } from '../components/TechSection';
import { BusinessSection } from '../components/BusinessSection';
import { ProductSection } from '../components/ProductSection';
import { SupportSection } from '../components/SupportSection';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Small delay to ensure render
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 100);
            }
        }
    }, [hash]);

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
