import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownToLine, Sparkles, Cpu, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const BusinessSection = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const businesses = [
        {
            id: 'press',
            label: t('business.tabs.press'),
            icon: <ArrowDownToLine size={20} />,
            title: t('business.items.press.title'),
            description: t('business.items.press.desc'),
            image: "/images/business_press.png"
        },
        {
            id: 'polishing',
            label: t('business.tabs.polishing'),
            icon: <Sparkles size={20} />,
            title: t('business.items.polishing.title'),
            description: t('business.items.polishing.desc'),
            image: "/images/business_polishing.png"
        },
        {
            id: 'semicon',
            label: t('business.tabs.semicon'),
            icon: <Cpu size={20} />,
            title: t('business.items.semicon.title'),
            description: t('business.items.semicon.desc'),
            image: "/images/business_semicon.png"
        },
        {
            id: 'fiber',
            label: t('business.tabs.fiber'),
            icon: <Activity size={20} />,
            title: t('business.items.fiber.title'),
            description: t('business.items.fiber.desc'),
            image: "/images/business_fiber.png"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % businesses.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleViewDetails = (id: string) => {
        if (id === 'press') {
            navigate('/business/press-line');
        } else if (id === 'polishing') {
            navigate('/business/polishing-line');
        } else if (id === 'semicon') {
            navigate('/business/semiconductor');
        } else if (id === 'fiber') {
            navigate('/business/fiber-optics');
        } else {
            console.log("Details for:", id);
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % businesses.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + businesses.length) % businesses.length);
    };

    return (
        <section id="business_area" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        {t('business.title')} <span className="text-accent">.</span>
                    </h2>

                    {/* Navigation Tabs (Indicators) */}
                    <div className="flex p-1 bg-gray-100 rounded-full overflow-x-auto no-scrollbar max-w-full z-10">
                        {businesses.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentIndex(index)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${currentIndex === index
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {item.icon}
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    {/* Navigation Arrows (Desktop) */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-gray-600 hover:text-primary transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-gray-600 hover:text-primary transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Slide Content */}
                    <div className="min-h-[500px] relative">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center absolute inset-0 sm:relative"
                            >
                                <div className="order-2 lg:order-1 space-y-6">
                                    <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                        {businesses[currentIndex].title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {businesses[currentIndex].description}
                                    </p>
                                    <button
                                        onClick={() => handleViewDetails(businesses[currentIndex].id)}
                                        className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2 mt-4 group"
                                    >
                                        {t('business.view_details')}
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>

                                <div className="order-1 lg:order-2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl relative bg-gray-50">
                                    <img
                                        src={businesses[currentIndex].image}
                                        alt={businesses[currentIndex].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent"></div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
