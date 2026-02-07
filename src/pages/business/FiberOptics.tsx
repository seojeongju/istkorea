import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const FiberOptics = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('business_pages.fiber.title')}</h1>
                        <p className="text-gray-400 text-xl max-w-2xl whitespace-pre-line">
                            {t('business_pages.fiber.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </div>



            {/* Image Gallery Section - 5 Images Only */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-5 gap-6"
                    >
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-lg shadow-xl aspect-[2/3] bg-gray-100"
                        >
                            <img
                                src="/images/fiber/fiber_1.jpg"
                                alt="Fiber optics equipment 1"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-bold text-sm tracking-tight">Equipment 1</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ delay: 0.1 }}
                            className="group relative overflow-hidden rounded-lg shadow-xl aspect-[2/3] bg-gray-100"
                        >
                            <img
                                src="/images/fiber/fiber_2.jpg"
                                alt="Fiber optics equipment 2"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-bold text-sm tracking-tight">Equipment 2</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ delay: 0.2 }}
                            className="group relative overflow-hidden rounded-lg shadow-xl aspect-[2/3] bg-gray-100"
                        >
                            <img
                                src="/images/fiber/fiber_3.jpg"
                                alt="Fiber optics equipment 3"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-bold text-sm tracking-tight">Equipment 3</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ delay: 0.3 }}
                            className="group relative overflow-hidden rounded-lg shadow-xl aspect-[2/3] bg-gray-100"
                        >
                            <img
                                src="/images/fiber/fiber_4.jpg"
                                alt="Fiber optics equipment 4"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-bold text-sm tracking-tight">Equipment 4</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ delay: 0.4 }}
                            className="group relative overflow-hidden rounded-lg shadow-xl aspect-[2/3] bg-gray-100"
                        >
                            <img
                                src="/images/fiber/fiber_5.jpg"
                                alt="Fiber optics equipment 5"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-bold text-sm tracking-tight">Equipment 5</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
