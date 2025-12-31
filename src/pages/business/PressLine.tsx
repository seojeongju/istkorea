import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const PressLine = () => {
    const { t } = useTranslation();

    const specs = [
        { label: "PLATEN SIZE", value: "1350 X 3200 X 55 (mm)" },
        { label: "OPENING", value: "110" },
        { label: "THICKNESS DEVIATION", value: "20㎛" },
        { label: "DAYLIGHT", value: "100mm" },
        { label: "PRESS POWER", value: "Max. 1200 ton" },
        { label: "VACUUM", value: "Max. 30 Torr" },
        { label: "TEMPERATURE CONTROL", value: "Standard Gap : ± 2℃ / Platen Temp : Max. 250℃" },
        { label: "CONTROL SYSTEM", value: "PLC SYSTEM" },
    ];

    const unitDevices = [
        "FULL AUTOMATIC SYSTEM",
        "MONITORING & MULTI CONTROL",
        "SUS, Mesh, Product, Cushion Pad, Top platen Stacking and Separators",
        "SUS Platen Washing Unit",
        "Product cutter"
    ];

    const options = [
        "Carrier & Wear Plate (ex SUS, AL)",
        "Lay-Out Change",
        "Order Made"
    ];

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Header / Breadcrumb area could go here */}
            <div className="bg-gray-950 text-white py-16">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">MULTI-LAYER VACUUM HOT PRESS</h1>
                    <p className="text-gray-400 text-lg">Advanced Press Line Solutions for Mass Production</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Image */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
                        >
                            <img
                                src="/images/business_press.png"
                                alt="Multi-Layer Vacuum Hot Press"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Features / Description Text (Optional addition for context) */}
                        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                <ArrowRight size={20} />
                                System Overview
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                This automated Multi-Layer Vacuum Hot Press system is designed for high-precision manufacturing.
                                It ensures uniform pressure and temperature distribution, making it ideal for flexible printed circuit boards (FPCB),
                                semiconductor packaging, and composite material lamination.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Specs & Details */}
                    <div className="space-y-12">

                        {/* Specifications */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">
                                SPECIFICATION
                            </h3>
                            <div className="space-y-0 border-t border-gray-200">
                                {specs.map((item, index) => (
                                    <div key={index} className={`flex flex-col md:flex-row py-4 border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50/50' : ''}`}>
                                        <div className="w-full md:w-1/3 font-semibold text-gray-700 pl-4">{item.label}</div>
                                        <div className="w-full md:w-2/3 text-gray-600 mt-1 md:mt-0 pl-4 md:pl-0 font-mono text-sm md:text-base">
                                            {item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Unit Device */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-accent pl-4">
                                Unit Device
                            </h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {unitDevices.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
                                        <div className="min-w-6 mt-1 text-primary">
                                            <Check size={18} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Option */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-gray-400 pl-4">
                                Option
                            </h3>
                            <ul className="space-y-3">
                                {options.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};
