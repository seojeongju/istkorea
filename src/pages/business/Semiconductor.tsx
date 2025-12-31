import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, CircleDot, Scissors, Ruler, Check } from 'lucide-react';

// Product Data
const products = [
    {
        id: 'chemical-polishing',
        name: 'CHEMICAL POLISHING MACHINE',
        icon: <FlaskConical size={20} />,
        subtitle: 'High-Performance Wafer Polishing Solution',
        description: 'Advanced chemical polishing system focusing on productivity and precision. Features simultaneous 4-head operation and multi-stage pressure control for optimal wafer surface processing.',
        image: '/images/semicon_chemical.png',
        specs: [
            { label: "WORKING SIZE", value: "Max. Dia 400mm * 4" },
            { label: "PRESSURE", value: "Max. 400kg (1 Head) * 4 Head" },
            { label: "TURN TABLE SIZE", value: "Ø1300" },
            { label: "TURN TABLE SPEED", value: "Max. 60 rpm (Main motor: 22kw)" },
            { label: "OSCILLATION", value: "Max. 30 rpm (Motor: 5.5kw)" },
            { label: "PRESSURE CONTROL", value: "Multistage Control (20 Step)" },
            { label: "CONTROL SYSTEM", value: "Touch Screen + PLC (HMI System)" },
        ],
        unitDevices: [
            "4 Head Simultaneous Operation",
            "Included Productivity System",
            "Multi Stage Pressure Control",
            "Stroke 30~80mm Oscillation",
            "Turn Table Cooling System",
            "Automatic Slurry Supply"
        ],
        options: [
            "Data Logging System",
            "Custom Slurry Mixers",
            "Remote Monitoring"
        ]
    },
    {
        id: 'lapping-machine',
        name: 'LAPPING MACHINE',
        icon: <CircleDot size={20} />,
        subtitle: 'Precision Surface Lapping for Semiconductors',
        description: 'Designed for high-intensity quality production with a reusable casting turn table. Offers excellent workability and superior quality surface finishing for semiconductor materials.',
        image: '/images/semicon_lapping.png',
        specs: [
            { label: "WORKING SIZE", value: "Max. Dia 400mm * 1" },
            { label: "PRESSURE", value: "Max. 100kg (1 Head) * 1 Head" },
            { label: "TURN TABLE SIZE", value: "Ø1000" },
            { label: "TURN TABLE SPEED", value: "Max. 30 rpm (Main motor: 5.5kw)" },
            { label: "OSCILLATION", value: "Max. 30 rpm (Motor: 2.2kw)" },
            { label: "PRESSURE CONTROL", value: "Regulator Control" },
            { label: "CONTROL SYSTEM", value: "Touch Screen + PLC (HMI System)" },
        ],
        unitDevices: [
            "High Intensity Casting Turn Table",
            "Reusable Table after Polishing",
            "Automatic Slurry Supply System",
            "Stroke 30~80mm Oscillation",
            "Excellent Workability Structure"
        ],
        options: [
            "Advanced Pressure Regulators",
            "Cooling Units",
            "Safety Enclosures"
        ]
    },
    {
        id: 'wire-saw-600n',
        name: 'MULTI WIRE SAW 600N',
        icon: <Scissors size={20} />,
        subtitle: 'Heavy Duty Vertical Precision Slicing',
        description: 'Robust vertical wire saw designed for heavy-duty ingot slicing. Features a solid structure with a vertical bobbin installation and a both-side loading method for maximum stability.',
        image: '/images/semicon_wire_600n.png',
        specs: [
            { label: "WORKING SIZE", value: "Max. 700x700x700 mm" },
            { label: "ROLL TYPE", value: "4-Roll System" },
            { label: "PRODUCT DIA", value: "Max. ø700mm" },
            { label: "DOOR TYPE", value: "Slide Door" },
            { label: "UP-DOWN SLIDE", value: "Precision ±0.02mm" },
            { label: "SPINDLE SPEED", value: "Max. 1500rpm" },
            { label: "SLICE DISTANCE", value: "0.05mm precision" },
            { label: "POWER", value: "380V / 60Hz" },
        ],
        unitDevices: [
            "Solid Heavy Duty Structure",
            "Both-Side Loading Method",
            "Vertical Bobbin Installation",
            "Efficient Sludge Rear Arrangement",
            "PLC + Touch Screen Control"
        ],
        options: [
            "Diamond Wire Kit",
            "Advanced Tension Control",
            "Coolant Filtration System"
        ]
    },
    {
        id: 'wire-saw-600s',
        name: 'MULTI WIRE SAW 600S',
        icon: <Ruler size={20} />,
        subtitle: 'Compact & Efficient Horizontal Wire Saw',
        description: 'Space-saving horizontal wire saw ideal for precision cutting. Features an easy-to-clean sludge design and a user-friendly horizontal bobbin layout.',
        image: '/images/semicon_wire_600s.png',
        specs: [
            { label: "WORKING SIZE", value: "Max. 600x600x500 mm" },
            { label: "ROLL TYPE", value: "4-Roll System" },
            { label: "PRODUCT DIA", value: "Max. ø600mm" },
            { label: "DOOR TYPE", value: "Slide Door" },
            { label: "UP-DOWN SLIDE", value: "Precision ±0.02mm" },
            { label: "SPINDLE SPEED", value: "Max. 1500rpm" },
            { label: "SLICE DISTANCE", value: "Under 0.04mm" },
            { label: "POWER", value: "380V / 60Hz" },
        ],
        unitDevices: [
            "Small Space Utilization Design",
            "Horizontal Bobbin Type",
            "Easy Sludge Cleaning Structure",
            "User-Friendly Operation",
            "High Precision Slicing"
        ],
        options: [
            "Compacted Coolant System",
            "Wire Break Detection",
            "Order Made Fixtures"
        ]
    }
];

export const Semiconductor = () => {
    const [activeProductId, setActiveProductId] = useState(products[0].id);
    const activeProduct = products.find(p => p.id === activeProductId) || products[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeProductId]);

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Header */}
            <div className="bg-gray-950 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/10 z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">SEMICONDUCTOR EQUIPMENT</h1>
                        <p className="text-gray-400 text-xl max-w-2xl">
                            Advanced Chemical Polishing & Precision Slicing Technology. <br />
                            Ensuring the Highest Yield and Accuracy for Wafer Processing.
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
