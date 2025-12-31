import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: "/images/hero1.png",
        title: "초정밀 나노 기술의\n새로운 지평을 엽니다",
        subtitle: "디스플레이와 반도체 산업의 미래를 선도하는 기술력"
    },
    {
        id: 2,
        image: "/images/hero2.png",
        title: "지속 가능한 내일을 위한\n친환경 제조 혁신",
        subtitle: "환경을 생각하는 공정으로 더 나은 가치를 창출합니다"
    },
    {
        id: 3,
        image: "/images/hero3.png",
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
        <section className="relative h-screen min-h-[600px] w-full bg-gray-950 flex flex-col md:flex-row pt-20 overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black opacity-80" />

            {/* Left Side: Text Content */}
            <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col justify-center px-6 md:px-12 z-20 order-2 md:order-1 relative h-[40%] md:h-full">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={`text-${currentSlide}`}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl"
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-white whitespace-pre-line tracking-tight">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 font-normal leading-relaxed mb-6 md:mb-8 break-keep">
                            {slides[currentSlide].subtitle}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Custom Pagination/Progress */}
                <div className="flex items-center gap-4 mt-2 md:mt-4">
                    {slides.map((_, index) => (
                        <div key={index} className="relative h-1 w-full max-w-[60px] bg-gray-800 rounded-full overflow-hidden cursor-pointer" onClick={() => setCurrentSlide(index)}>
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: currentSlide === index ? "100%" : "0%" }}
                                transition={{ duration: currentSlide === index ? 5 : 0.3, ease: "linear" }}
                            />
                            <div className={`absolute top-0 left-0 h-full w-full bg-primary transition-opacity duration-300 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`} style={{ width: currentSlide === index ? 'auto' : '0%' }} />
                        </div>
                    ))}
                </div>

                {/* Number Indicator */}
                <div className="absolute bottom-8 left-6 md:left-12 text-sm font-mono text-gray-600">
                    0{currentSlide + 1} <span className="mx-2">/</span> 0{slides.length}
                </div>
            </div>

            {/* Right Side: Image with Circular Gradient */}
            <div className="w-full md:w-7/12 lg:w-8/12 h-[60%] md:h-full relative flex items-center justify-center order-1 md:order-2 z-10">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        className="relative w-[80%] md:w-[700px] aspect-square rounded-full overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] hover:scale-110"
                            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                        />
                        {/* Inner shadow/gradient overlay for depth */}
                        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" />
                    </motion.div>
                </AnimatePresence>

                {/* External Glow/Gradient Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
        </section>
    );
};
