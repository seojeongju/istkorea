import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
        title: "초정밀 나노 기술의\n새로운 지평을 엽니다",
        subtitle: "디스플레이와 반도체 산업의 미래를 선도하는 기술력"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80",
        title: "지속 가능한 내일을 위한\n친환경 제조 혁신",
        subtitle: "환경을 생각하는 공정으로 더 나은 가치를 창출합니다"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1537462713205-e512641bf201?auto=format&fit=crop&q=80",
        title: "세계가 신뢰하는\n글로벌 파트너",
        subtitle: "최고의 품질과 끊임없는 혁신으로 고객과 함께 성장합니다"
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
