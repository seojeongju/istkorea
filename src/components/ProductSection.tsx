
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
            image: "https://images.unsplash.com/photo-1622612347101-5d928d157a9f?auto=format&fit=crop&q=80" // High tech machine
        },
        {
            id: 2,
            title: t('product.items.item2.title'),
            subtitle: t('product.items.item2.subtitle'),
            image: "https://images.unsplash.com/photo-1580835560944-77ce54013129?auto=format&fit=crop&q=80" // Clean room tech
        },
        {
            id: 3,
            title: t('product.items.item3.title'),
            subtitle: t('product.items.item3.subtitle'),
            image: "https://images.unsplash.com/photo-1581093458891-2f085eda94bd?auto=format&fit=crop&q=80" // Lab equipment
        }
    ];

    return (
        <section className="py-24 bg-white relative">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="group relative cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                {/* Plus icon on hover */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary shadow-lg">
                                        <Plus size={20} />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent text-white md:bg-none md:text-gray-900 md:relative md:p-0 md:mt-6">
                                    {/* Mobile overlay style / Desktop plain style split */}
                                    <div className="md:hidden">
                                        <h3 className="text-2xl font-bold mb-1">{product.title}</h3>
                                        <p className="text-sm opacity-80">{product.subtitle}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop text below image */}
                            <div className="hidden md:block mt-6 group-hover:translate-x-2 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-gray-800 mb-1">{product.title}</h3>
                                <p className="text-gray-500 font-light">{product.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
