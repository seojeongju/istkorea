
import { motion } from 'framer-motion';
import { Microscope, Cpu, Settings, Zap } from 'lucide-react';

const technologies = [
    {
        icon: <Microscope size={32} />,
        title: "Nano-Scale Precision",
        description: "Achieving accuracy down to the nanometer level for next-generation display and semiconductor applications."
    },
    {
        icon: <Cpu size={32} />,
        title: "Advanced Control Systems",
        description: "Proprietary software algorithms ensure stability and repeatability in mass production environments."
    },
    {
        icon: <Settings size={32} />,
        title: "Customized Engineering",
        description: "Tailored equipment designs to meet specific client requirements and process parameters."
    },
    {
        icon: <Zap size={32} />,
        title: "High-Speed Processing",
        description: "Optimized for maximum throughput without compromising quality or yield rates."
    }
];

export const TechSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        CORE TECHNOLOGY <span className="text-accent">.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        We provide world-class technological solutions through continuous R&D and innovation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {tech.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
