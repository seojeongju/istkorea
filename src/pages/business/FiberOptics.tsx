import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Check, Activity, Zap } from 'lucide-react';

// Product Data
const products = [
    {
        id: 'core-equipment',
        name: 'VAD CORE EQUIPMENT (IRD)',
        icon: <Network size={20} />,
        subtitle: 'Advanced VAD Method for ZWPF & Enhanced BIF',
        description: 'State-of-the-art Vapor Phase Axial Deposition (VAD) equipment for manufacturing optical fiber preforms. Designed for Zero Water Peak Fiber (ZWPF) and Bend-Insensitive Fiber (BIF) production with high precision process control.',
        image: '/images/fiber_core_equipment.png',
        specs: [
            { label: "FRAME HEIGHT", value: "12m" },
            { label: "CHAMBER MATERIAL", value: "Hastelloy Chamber" },
            { label: "FRAME TYPE", value: "Steel Frame Construction" },
            { label: "CHEMICALS & GASES", value: "SiCl4, GeCl4, CF4, H2, O2, N2" },
            { label: "CLEAN CLASS", value: "Class 10,000" },
            { label: "CAPACITY", value: "2 M-fkm/year" },
            { label: "ALIGNMENT", value: "Precision Torch Alignment System" },
            { label: "DELIVERY SYSTEM", value: "Advanced Gas & Vapor Delivery" },
        ],
        unitDevices: [
            "VAD Method Implementation",
            "ZWPF (Zero Water Peak Fiber) Capability",
            "Enhanced BIF (Bend Insensitive Fiber A2, B3)",
            "Integrated Torch Alignment System",
            "High-Throughput Gas Delivery"
        ],
        options: [
            "Process Automation Suite",
            "Real-time Preform Monitoring",
            "Custom Gas Mixing Systems"
        ]
    }
];

export const FiberOptics = () => {
    const [activeProductId, setActiveProductId] = useState(products[0].id);
    const activeProduct = products.find(p => p.id === activeProductId) || products[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeProductId]);

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Header */}
            <div className="bg-gray-950 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-900/10 z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">FIBER OPTICS EQUIPMENT</h1>
                        <p className="text-gray-400 text-xl max-w-2xl">
                            Next-Generation Optical Fiber Manufacturing. <br />
                            Precision VAD Technology for High-Quality Preforms.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Product Navigation - Simplified for single item but extensible */}
            <div className="sticky top-20 z-40 bg-white shadow-md border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex overflow-x-auto no-scrollbar gap-2 py-4">
                        {products.map((product) => (
                            <button
                                key={product.id}
                                onClick={() => setActiveProductId(product.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeProductId === product.id
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                            >
                                {product.icon}
                                {product.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Content */}
            <div className="container mx-auto px-6 py-16 min-h-[800px]">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeProduct.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                    >
                        {/* Left Column: Image & Description */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{activeProduct.name}</h2>
                                <p className="text-accent text-lg font-medium mb-6">{activeProduct.subtitle}</p>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {activeProduct.description}
                                </p>
                            </div>

                            <motion.div
                                className="rounded-2xl overflow-hidden shadow-2xl bg-gray-50 border border-gray-100"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={activeProduct.image}
                                    alt={activeProduct.name}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Right Column: Key Features & Specs */}
                        <div className="space-y-12">
                            {/* Specifications */}
                            <div className="bg-white rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-primary rounded-full"></div>
                                    SPECIFICATION
                                </h3>
                                <div className="space-y-0 border-t border-gray-100">
                                    {activeProduct.specs.map((item, index) => (
                                        <div key={index} className={`flex flex-col sm:flex-row py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors px-2 rounded-lg`}>
                                            <div className="w-full sm:w-1/3 font-semibold text-gray-700 text-sm">{item.label}</div>
                                            <div className="w-full sm:w-2/3 text-gray-600 mt-1 sm:mt-0 font-mono text-sm">
                                                {item.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Unit Devices & Options */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-accent rounded-full"></div>
                                        Key Features
                                    </h3>
                                    <ul className="space-y-3">
                                        {activeProduct.unitDevices.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="min-w-5 mt-0.5 text-primary">
                                                    <Check size={16} />
                                                </div>
                                                <span className="text-sm text-gray-600 leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
                                        Options
                                    </h3>
                                    <ul className="space-y-3">
                                        {activeProduct.options.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                                                <span className="text-sm text-gray-500 leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
