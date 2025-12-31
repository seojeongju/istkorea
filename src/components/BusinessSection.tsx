import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Cpu, Battery } from 'lucide-react';

const businesses = [
    {
        id: 'display',
        label: 'Display',
        icon: <Monitor size={20} />,
        title: "Next-Gen Display Solutions",
        description: "Leading the market with ultra-thin film coating and high-precision lamination technologies for OLED, Micro-LED, and flexible displays.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
    },
    {
        id: 'semicon',
        label: 'Semiconductor',
        icon: <Cpu size={20} />,
        title: "Advanced Semiconductor Packaging",
        description: "Providing cutting-edge equipment for wafer processing, advanced packaging, and cleaning to ensure highest yields in chip manufacturing.",
        image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80"
    },
    {
        id: 'battery',
        label: 'Secondary Battery',
        icon: <Battery size={20} />,
        title: "EV Battery Manufacturing",
        description: "Innovative electrode coating and stacking solutions designed for the mass production of high-performance lithium-ion batteries.",
        image: "https://images.unsplash.com/photo-1619641461973-45373a62f43a?auto=format&fit=crop&q=80"
    }
];

export const BusinessSection = () => {
    const [activeTab, setActiveTab] = useState(businesses[0].id);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        BUSINESS AREA <span className="text-accent">.</span>
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
                                    <button className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2 mt-4 group">
                                        LEARN MORE
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
