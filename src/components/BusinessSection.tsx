import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownToLine, Sparkles, Cpu, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const BusinessSection = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('press');

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
            // For others, we can add placeholder or different routes later
            console.log("Details for:", id);
        }
    };

    return (
        <section id="business_area" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        {t('business.title')} <span className="text-accent">.</span>
                    </h2>

                    <div className="flex p-1 bg-gray-100 rounded-full">
                        {businesses.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === item.id
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

                <div className="mt-12">
                    <AnimatePresence mode='wait'>
                        {businesses.map((item) => item.id === activeTab && (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                <div className="order-2 lg:order-1 space-y-6">
                                    <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <button
                                        onClick={() => handleViewDetails(item.id)}
                                        className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2 mt-4 group"
                                    >
                                        {t('business.view_details')}
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>

                                <div className="order-1 lg:order-2 h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
