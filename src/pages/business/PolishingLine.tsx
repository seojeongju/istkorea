import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Disc, FileText } from 'lucide-react'; // Changed imports

// Product Data
const products = [
    {
        id: 'coil-polishing',
        name: 'COIL POLISHING LINE',
        icon: <Sparkles size={20} />,
        subtitle: 'High-Precision Surface Finishing for Metal Coils',
        description: 'Advanced coil polishing system designed for stainless steel, aluminum, and steel coils. Features auto program control and precise belt tracking for consistent high-quality finishes.',
        image: '/images/coil_polishing_line.png',
        specs: [
            { label: "DRUM DIA", value: "Ø360 (No.4 Machine Criteria)" },
            { label: "MAIN MOTOR", value: "45 kw" },
            { label: "BELT SIZE", value: "Min. 640mm ~ Max. 1,600mm (W) x 3200mm (L)" },
            { label: "WORKING WIDTH", value: "Min. 600mm ~ Max. 1,600mm (±5%)" },
            { label: "THICKNESS (SUS)", value: "0.3mm ~ 2mm" },
            { label: "THICKNESS (AL)", value: "0.3mm ~ 3mm" },
            { label: "THREADING SPEED", value: "Max 40 mpm" },
            { label: "CONTROL SYSTEM", value: "PLC + HMI Touch Screen" },
        ],
        unitDevices: [
            "Uncoiler & Recoiler",
            "Welding Machine",
            "Bottom & Top Polishing Machine",
            "Buff Brush / Hair Line / Brushing",
            "Wash & Dry System",
            "Product Inspection Table"
        ],
        options: [
            "Sludge Treatment & Recycle System",
            "Auto Tracking System",
            "Custom Belt Configurations"
        ]
    },
    {
        id: 'coil-grinding',
        name: 'COIL GRINDING LINE',
        icon: <Disc size={20} />,
        subtitle: 'Heavy-Duty Surface Grinding for Steel Coils',
        description: 'Robust grinding machine for steel coil surfaces. Features adjustable sandbelt rotation, coil transfer speed, and sanding load. Uses water-soluble oil for safety and efficiency.',
        image: '/images/coil_grinding_line.png',
        specs: [
            { label: "WORKING WIDTH", value: "600mm ~ 1,300mm" },
            { label: "WORKING THICKNESS", value: "0.25 ~ 8.0mm ±10%" },
            { label: "WORKING SPEED", value: "5 ~ 20 mpm" },
            { label: "DRUM DIA", value: "Inner Ø610mm / Out Ø900~1,200mm" },
            { label: "MAIN MOTOR", value: "110kw, 90kw" },
            { label: "OSCILLATION", value: "Smooth Operation System" },
            { label: "CONTROL SYSTEM", value: "Auto Program Control Touch Screen" },
            { label: "BELT TRACKING", value: "Pneumatic Sensor Control" },
        ],
        unitDevices: [
            "Washing & Drying System (Electric Clutch)",
            "Pinching Unit",
            "Welding Machine",
            "Recoiler Machine",
            "Air Knife & Ring Blower Dryer"
        ],
        options: [
            "Safety Fire Suppression System",
            "Custom Drum Configurations",
            "Advanced Oscillation Control"
        ]
    },
    {
        id: 'sheet-polishing',
        name: 'SHEET POLISHING LINE',
        icon: <FileText size={20} />, // Changed icon
        subtitle: 'Automated Sheet Polishing with Tape Shaft Technology',
        description: 'Versatile sheet polishing line utilizing tape shafts for easy roll replacement. Supports Buff Wheel or Scotch Brite with variable pressure control and double dust collection.',
        image: '/images/sheet_polishing_line.png',
        specs: [
            { label: "WORK WIDTH", value: "Max 1300mm" },
            { label: "POLISHING SPEED", value: "Max 2000rpm" },
            { label: "WORK SPEED", value: "Max 8M/min" },
            { label: "MAIN MOTOR", value: "37Kw / 45Kw" },
            { label: "OSCILLATION UNIT", value: "2.2 Kw" },
            { label: "DUST COLLECTION", value: "Double Nozzle System" },
            { label: "CENTERING", value: "Load/Unload Conveyor Device" },
        ],
        unitDevices: [
            "Tape Shaft Roll System",
            "Buff Wheel / Scotch Brite Support",
            "Sheet End Escape Device (Billy Plate Up/Down)",
            "Clean Roll for Optic Back Removal",
            "Variable Oscillation Speed Control"
        ],
        options: [
            "Dressing Machine",
            "Automatic Polish Application Device",
            "Clean Roll System"
        ]
    }
];

export const PolishingLine = () => {
    const [activeProductId, setActiveProductId] = useState(products[0].id);
    const activeProduct = products.find(p => p.id === activeProductId) || products[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeProductId]);

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Header */}
            <div className="bg-gray-950 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/10 z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">POLISHING LINE</h1>
                        <p className="text-gray-400 text-xl max-w-2xl">
                            State-of-the-art Surface Finishing Solutions. <br />
                            Precision Polishing and Grinding for Coils and Sheets.
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
