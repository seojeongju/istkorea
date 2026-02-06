import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FiberOptics = () => {
    const { t } = useTranslation();

    const products = [
        {
            id: 'core-equipment',
            image: '/images/fiber_core_equipment.png',
            icon: <Network size={20} />,
            titleKey: 'core_equipment'
        }
    ];

    const [activeProductId, setActiveProductId] = useState(products[0].id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeProductId]);

    const activeProductRaw = products.find(p => p.id === activeProductId) || products[0];

    const activeProduct = {
        ...activeProductRaw,
        name: t(`business_pages.fiber.products.${activeProductRaw.titleKey}.name`),
        subtitle: t(`business_pages.fiber.products.${activeProductRaw.titleKey}.subtitle`),
        description: t(`business_pages.fiber.products.${activeProductRaw.titleKey}.desc`),
        specs: t(`business_pages.fiber.products.${activeProductRaw.titleKey}.specs`, { returnObjects: true }) as { label: string; value: string }[],
        features: t(`business_pages.fiber.products.${activeProductRaw.titleKey}.features`, { returnObjects: true }) as string[],
        options: t(`business_pages.fiber.products.${activeProductRaw.titleKey}.options`, { returnObjects: true }) as string[]
    };

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

            {/* Product Navigation - Simplified for single item but extensible */}
            <div className="sticky top-20 z-40 bg-white shadow-md border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex overflow-x-auto no-scrollbar gap-2 py-4">
                        {products.map((product) => {
                            const productName = t(`business_pages.fiber.products.${product.titleKey}.name`);
                            return (
                                <button
                                    key={product.id}
                                    onClick={() => setActiveProductId(product.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeProductId === product.id
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                        }`}
                                >
                                    {product.icon}
                                    {productName}
                                </button>
                            );
                        })}
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
                                    {activeProduct.specs && activeProduct.specs.map((item: any, index: number) => (
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
                                        {activeProduct.features && activeProduct.features.map((item: any, index: number) => (
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
                                        {activeProduct.options && activeProduct.options.map((item: any, index: number) => (
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
                {/* Image Gallery Section */}
                <div className="container mx-auto px-6 pb-20 border-t border-gray-100 pt-16">
                    <div className="max-w-lg mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="group relative overflow-hidden rounded-lg shadow-md aspect-[3/4] bg-gray-100"
                            >
                                <img
                                    src="/images/fiber/fiber_process.jpg"
                                    alt="Fiber drawing process"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-bold text-xs tracking-tight">Process Drawing</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ delay: 0.1 }}
                                className="group relative overflow-hidden rounded-lg shadow-md aspect-[3/4] bg-gray-100"
                            >
                                <img
                                    src="/images/fiber/fiber_main.jpg"
                                    alt="Fiber production equipment"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-bold text-xs tracking-tight">Main System</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ delay: 0.2 }}
                                className="group relative overflow-hidden rounded-lg shadow-md aspect-[3/4] bg-gray-100"
                            >
                                <img
                                    src="/images/fiber/fiber_close_up.jpg"
                                    alt="Fiber processing detail"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-bold text-xs tracking-tight">Refining Detail</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
