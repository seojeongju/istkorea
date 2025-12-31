import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Database, Zap, Thermometer, Layers } from 'lucide-react';

// Product Data
const products = [
    {
        id: 'multi-layer',
        name: 'MULTI-LAYER VACUUM HOT PRESS',
        icon: <Layers size={20} />,
        subtitle: 'Advanced Press Line Solutions for Mass Production',
        description: 'Designed for high-precision manufacturing, ensuring uniform pressure and temperature distribution. Ideal for FPCB, semiconductor packaging, and composite material lamination.',
        image: '/images/business_press.png',
        specs: [
            { label: "PLATEN SIZE", value: "1350 X 3200 X 55 (mm)" },
            { label: "OPENING", value: "110" },
            { label: "THICKNESS DEVIATION", value: "20㎛" },
            { label: "DAYLIGHT", value: "100mm" },
            { label: "PRESS POWER", value: "Max. 1200 ton" },
            { label: "VACUUM", value: "Max. 30 Torr" },
            { label: "TEMPERATURE CONTROL", value: "Standard Gap : ± 2℃ / Platen Temp : Max. 250℃" },
            { label: "CONTROL SYSTEM", value: "PLC SYSTEM" },
        ],
        unitDevices: [
            "FULL AUTOMATIC SYSTEM",
            "MONITORING & MULTI CONTROL",
            "SUS, Mesh, Product, Cushion Pad, Top platen Stacking and Separators",
            "SUS Platen Washing Unit",
            "Product cutter"
        ],
        options: [
            "Carrier & Wear Plate (ex SUS, AL)",
            "Lay-Out Change",
            "Order Made"
        ]
    },
    {
        id: 'multi-vacuum',
        name: 'MULTI VACUUM HOT PRESS',
        icon: <Database size={20} />,
        subtitle: 'Versatile Vacuum Press for Various Applications',
        description: 'Multi-purpose vacuum hot press supporting both hot and cold press operations with auto loader/stacker integration.',
        image: '/images/press_multi_vacuum.png',
        specs: [
            { label: "PLATEN SIZE", value: "700 ~ 1350 X 800 ~ 1650 X 45 ~ 50 (mm)" },
            { label: "OPENING", value: "6 ~ 12" },
            { label: "THICKNESS DEVIATION", value: "20mm" },
            { label: "DAYLIGHT", value: "80 ~ 120mm" },
            { label: "PRESS POWER", value: "250 ~ 950 Ton" },
            { label: "VACUUM", value: "10 ~ 30 Torr" },
            { label: "TEMP CONTROL", value: "Gap ± 2℃ / Max. 250℃" },
            { label: "CONTROL SYSTEM", value: "PLC / Touch Screen" },
        ],
        unitDevices: [
            "HOT PRESS + COLD PRESS + AUTO LOADER & STACKER",
            "Automatic Carrier Separation and Loading",
            "Programmable Cycle Operations",
            "Forming LED substrates"
        ],
        options: [
            "FULL AUTOMATIC SYSTEM",
            "MONITORING & MULTI CONTROL",
            "SUS PLATE SEPARATOR",
            "LAY-OUT CHANGE",
            "ORDER MADE"
        ]
    },
    {
        id: 'high-temper',
        name: 'HIGH TEMPER VACUUM HOT PRESS',
        icon: <Thermometer size={20} />,
        subtitle: 'High Temperature & High Vacuum Specialist',
        description: 'Suitable for adhesion of Teflon series materials under high temperature and vacuum conditions. Features precise temperature and pressure control.',
        image: '/images/press_high_temper.png',
        specs: [
            { label: "PLATEN SIZE", value: "500 X 500 X 60 (mm)" },
            { label: "THICKNESS DEVIATION", value: "20 ㎛" },
            { label: "PRESS POWER", value: "Max. 200 ton" },
            { label: "VACUUM", value: "Max. 10¯³ Torr" },
            { label: "TEMP CONTROL", value: "Gap ± 2℃ / Max. 500℃" },
            { label: "HEATING TYPE", value: "ELECTRIC HEATING" },
        ],
        unitDevices: [
            "Temperature & Vacuum Monitoring System",
            "Data Management & Content Analysis",
            "High Vacuum Capability",
            "Electric Heating Elements"
        ],
        options: [
            "Vacuum Pump Upgrade",
            "Data Logger Integration",
            "Safety Shielding",
            "Order Made"
        ]
    },
    {
        id: 'electric-heater',
        name: 'ELECTRIC HEATER VHP',
        icon: <Zap size={20} />,
        subtitle: 'Compact Electric Heater Vacuum Hot Press',
        description: 'Laminating equipment for FPCB & PCB using electric heater plates. Boiler-free simple structure with built-in auto cooling.',
        image: '/images/press_electric.png',
        specs: [
            { label: "PLATEN SIZE", value: "760 X 760 X 60 (mm)" },
            { label: "OPENING", value: "4-6" },
            { label: "DAYLIGHT", value: "80 ~ 100" },
            { label: "PRESS POWER", value: "200 ton" },
            { label: "VACUUM", value: "Max. 1 Torr" },
            { label: "TEMP CONTROL", value: "Gap ±3°C / Max. 300°C" },
            { label: "CONTROL SYSTEM", value: "Touch Screen (Auto Program)" },
        ],
        unitDevices: [
            "Electric Plate Heating (No Boiler)",
            "Auto Cooling System",
            "Compact Structure",
            "Digital Touch Control"
        ],
        options: [
            "PC CONTROL SYSTEM",
            "CARRIER & WEAR PLATE (EX SUS, AL)",
            "ROBOT CAR",
            "ORDER MADE"
        ]
    }
];

export const PressLine = () => {
    const [activeProductId, setActiveProductId] = useState(products[0].id);
    const activeProduct = products.find(p => p.id === activeProductId) || products[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeProductId]);


    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Header */}
            <div className="bg-gray-950 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">PRESS LINE</h1>
                        <p className="text-gray-400 text-xl max-w-2xl">
                            Advanced Press Solutions for Every Industrial Need. <br />
                            From Multi-Layer Lamination to High-Temperature Vacuum Processes.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Product Navigation */}
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
