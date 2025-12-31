import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
        title: "High Precision\nNano Technology",
        subtitle: "Leading the future of display and semiconductor industries"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80",
        title: "Eco-Friendly\nManufacturing",
        subtitle: "Sustainable solutions for a better tomorrow"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1537462713205-e512641bf201?auto=format&fit=crop&q=80",
        title: "Global Reliability\n& Innovation",
        subtitle: "Partnering with world-class technology leaders"
    }
];

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-gray-900 text-white">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlide}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                />
            </AnimatePresence>

            {/* Overlay to darken image for text readability */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
                <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 whitespace-pre-line">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light">
                        {slides[currentSlide].subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Pagination */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-300 ${currentSlide === index ? 'w-12 bg-accent' : 'w-6 bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};
