
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ProductSection = () => {
    const { t } = useTranslation();

    const products = [
        {
            id: 1,
            title: t('product.items.item1.title'),
            subtitle: t('product.items.item1.subtitle'),
            image: "/images/product_press_main.png"
        },
        {
            id: 2,
            title: t('product.items.item2.title'),
            subtitle: t('product.items.item2.subtitle'),
            image: "/images/product_chemical_polishing.png"
        },
        {
            id: 3,
            title: t('product.items.item3.title'),
            subtitle: t('product.items.item3.subtitle'),
            image: "/images/product_step_polishing.png"
        },
        {
            id: 4,
            title: t('product.items.item4.title'),
            subtitle: t('product.items.item4.subtitle'),
            image: "/images/product_lapping.png"
        },
        {
            id: 5,
            title: t('product.items.item5.title'),
            subtitle: t('product.items.item5.subtitle'),
            image: "/images/product_wiresaw.png"
        }
    ];

    return (
        <section id="product_area" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 tracking-wide">
                            {t('product.title')} <span className="text-accent">.</span>
                        </h2>
                    </motion.div>

                    <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                        <Plus size={24} />
                    </button>
                </div>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="group relative cursor-pointer w-full md:w-[calc((100%-4rem)/3)]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-gray-50 relative rounded-lg border border-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Plus icon on hover */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary shadow-lg">
                                        <Plus size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Desktop text below image */}
                            <div className="hidden md:block mt-6 group-hover:translate-x-2 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-gray-800 mb-1">{product.title}</h3>
                                <p className="text-gray-500 font-light">{product.subtitle}</p>
                            </div>

                            {/* Mobile overlay text */}
                            <div className="md:hidden mt-4">
                                <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                                <p className="text-sm text-gray-500">{product.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
