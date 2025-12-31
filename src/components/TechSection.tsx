
import { motion } from 'framer-motion';
import { Microscope, Cpu, Settings, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const TechSection = () => {
    const { t } = useTranslation();

    const technologies = [
        {
            icon: <Microscope size={32} />,
            title: t('tech.item1.title'),
            description: t('tech.item1.desc')
        },
        {
            icon: <Cpu size={32} />,
            title: t('tech.item2.title'),
            description: t('tech.item2.desc')
        },
        {
            icon: <Settings size={32} />,
            title: t('tech.item3.title'),
            description: t('tech.item3.desc')
        },
        {
            icon: <Zap size={32} />,
            title: t('tech.item4.title'),
            description: t('tech.item4.desc')
        }
    ];

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
                        {t('tech.title')} <span className="text-accent">.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        {t('tech.description')}
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
                            <p className="text-gray-500 leading-relaxed text-sm break-keep">
                                {tech.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
