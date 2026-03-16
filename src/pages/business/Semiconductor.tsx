import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { FlaskConical, CircleDot, Scissors, Ruler, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Semiconductor = () => {
    const { t } = useTranslation();

    const products = useMemo(() => [
        {
            id: 'chemical-polishing',
            image: '/images/semicon_chemical.png',
            icon: <FlaskConical size={20} />,
            titleKey: 'chemical_polishing'
        },
        {
            id: 'lapping-machine',
            image: '/images/semicon_lapping.png',
            icon: <CircleDot size={20} />,
            titleKey: 'lapping_machine'
        },
        {
            id: 'wire-saw-600n',
            image: '/images/semicon_wire_600n.png',
            icon: <Scissors size={20} />,
            titleKey: 'wire_saw_600n'
        },
        {
            id: 'wire-saw-600s',
            image: '/images/semicon_wire_600s.png',
            icon: <Ruler size={20} />,
            titleKey: 'wire_saw_600s'
        },
        {
            id: 'slicing',
            image: '',
            icon: <Scissors size={20} />,
            titleKey: 'slicing' // Handled conditionally
        }
    ], []);

    const sicData = useMemo(() => [
        { material: 'SiC', inch: '2"', mm: 50, thickness: '0.4 ~ 5.0', tolerance: '±0.03', roughness: '1.5 ~ 3.0', priceKey: 'price_tbd' },
        { material: 'SiC', inch: '3"', mm: 75, thickness: '0.5 ~ 10.0', tolerance: '±0.03', roughness: '1.5 ~ 3.0', priceKey: 'price_tbd' },
        { material: 'SiC', inch: '4"', mm: 100, thickness: '0.5 ~ 10.0', tolerance: '±0.03', roughness: '2.0 ~ 3.5', priceKey: 'price_tbd' },
        { material: 'SiC', inch: '6"', mm: 150, thickness: '0.7 ~ 15.0', tolerance: '±0.05', roughness: '2.5 ~ 4.5', priceKey: 'price_tbd' },
        { material: 'SiC', inch: '8"', mm: 200, thickness: '0.8 ~ 20.0', tolerance: '±0.08', roughness: '3.0 ~ 6.0', priceKey: 'price_tbd' },
    ], []);

    const glassData = useMemo(() => [
        { material: 'Glass', inch: '2"', mm: 50, thickness: '0.07 ~ 10.0', tolerance: '±0.03', roughness: '0.8 ~ 1.5', priceKey: 'price_dev' },
        { material: 'Glass', inch: '3"', mm: 75, thickness: '0.1 ~ 20.0', tolerance: '±0.03', roughness: '1.0 ~ 2.0', priceKey: 'price_tbd' },
        { material: 'Glass', inch: '4"', mm: 100, thickness: '0.2 ~ 20.0', tolerance: '±0.05', roughness: '1.0 ~ 2.0', priceKey: 'price_tbd' },
        { material: 'Glass', inch: '6"', mm: 150, thickness: '0.3 ~ 30.0', tolerance: '±0.07', roughness: '1.5 ~ 2.5', priceKey: 'price_tbd' },
        { material: 'Glass', inch: '8"', mm: 200, thickness: '1.2 ~ 50.0', tolerance: '±0.10', roughness: '2.0 ~ 3.5', priceKey: 'price_tbd' },
    ], []);

    const SlicingTable = ({ data, title }: { data: any[], title: string }) => {
        const tPath = 'business_pages.semiconductor.products.slicing.table';
        return (
            <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-primary rounded-full"></div>
                    {title} {t(`${tPath}.cutting_specs`)}
                </h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-bold text-center border-r border-gray-200">{t(`${tPath}.material`)}</th>
                                <th className="px-6 py-4 font-bold text-center border-r border-gray-200">{t(`${tPath}.diameter_inch`)}</th>
                                <th className="px-6 py-4 font-bold text-center border-r border-gray-200">{t(`${tPath}.diameter_mm`)}</th>
                                <th className="px-6 py-4 font-bold text-center border-r border-gray-200">{t(`${tPath}.thickness_range`)}</th>
                                <th className="px-6 py-4 font-bold text-center border-r border-gray-200">{t(`${tPath}.tolerance`)}</th>
                                <th className="px-6 py-4 font-bold text-center border-r border-gray-200">{t(`${tPath}.roughness`)}</th>
                                <th className="px-6 py-4 font-bold text-center">{t(`${tPath}.price_approx`)}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, idx) => (
                                <tr key={idx} className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-semibold text-gray-900 border-r border-gray-100">{row.material}</td>
                                    <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-100">{row.inch}</td>
                                    <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-100">{row.mm}</td>
                                    <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-100">{row.thickness}</td>
                                    <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-100">{row.tolerance}</td>
                                    <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-100">{row.roughness}</td>
                                    <td className="px-6 py-4 text-center text-gray-600 font-medium">
                                        {row.priceKey === 'price_dev' ? (
                                            <span className='text-accent'>{t(`${tPath}.price_dev`)}</span>
                                        ) : (
                                            t(`${tPath}.price_tbd`)
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const [searchParams] = useSearchParams();
    const [activeProductId, setActiveProductId] = useState(products[0].id);

    useEffect(() => {
        const productParam = searchParams.get('product');
        if (productParam && products.some(p => p.id === productParam)) {
            setActiveProductId(productParam);
        } else {
            // If no valid product parameter, reset to the first product if we navigated from empty search
            if (!productParam && activeProductId !== products[0].id) {
                setActiveProductId(products[0].id);
            }
        }
        window.scrollTo(0, 0);
    }, [searchParams, products]);

    const activeProductRaw = products.find(p => p.id === activeProductId) || products[0];

    const activeProduct = activeProductId === 'slicing' ? null : {
        ...activeProductRaw,
        name: t(`business_pages.semiconductor.products.${activeProductRaw.titleKey}.name`),
        subtitle: t(`business_pages.semiconductor.products.${activeProductRaw.titleKey}.subtitle`),
        description: t(`business_pages.semiconductor.products.${activeProductRaw.titleKey}.desc`),
        specs: t(`business_pages.semiconductor.products.${activeProductRaw.titleKey}.specs`, { returnObjects: true }) as { label: string; value: string }[],
        features: t(`business_pages.semiconductor.products.${activeProductRaw.titleKey}.features`, { returnObjects: true }) as string[],
        options: t(`business_pages.semiconductor.products.${activeProductRaw.titleKey}.options`, { returnObjects: true }) as string[]
    };

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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('business_pages.semiconductor.title')}</h1>
                        <p className="text-gray-400 text-xl max-w-2xl whitespace-pre-line">
                            {t('business_pages.semiconductor.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Product Navigation */}
            <div className="sticky top-20 z-40 bg-white shadow-md border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex overflow-x-auto no-scrollbar gap-2 py-4">
                        {products.map((product) => {
                            const productName = t(`business_pages.semiconductor.products.${product.titleKey}.name`);
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
                        key={activeProductId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeProduct ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                                            {activeProduct.specs && activeProduct.specs.map((item, index) => (
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
                                                {activeProduct.features && activeProduct.features.map((item, index) => (
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
                                                {activeProduct.options && activeProduct.options.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                                                        <span className="text-sm text-gray-500 leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="max-w-6xl mx-auto">
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold mb-2">{t('business_pages.semiconductor.products.slicing.name')}</h2>
                                    <p className="text-gray-500 whitespace-pre-line">{t('business_pages.semiconductor.products.slicing.subtitle')}</p>
                                </div>
                                {/* Tables Section */}
                                <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-10">
                                    <SlicingTable data={sicData} title="SiC" />
                                    <SlicingTable data={glassData} title="Glass" />
                                    
                                    {/* Sample Test Note */}
                                    <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                                        <p className="text-primary font-medium flex items-center gap-2">
                                            <span className="text-lg">*</span> 
                                            {t('business_pages.semiconductor.products.slicing.notes.sample_test')}
                                        </p>
                                    </div>
                                </div>

                                {/* Caveats Section */}
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-5 bg-gray-400 rounded-full"></div>
                                        {t('business_pages.semiconductor.products.slicing.notes.caveats_title')}
                                    </h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        {[1, 2, 3, 4, 5, 6].map((num) => (
                                            <li key={num} className="flex items-start gap-2">
                                                <span className="text-gray-400 font-bold">※</span>
                                                <p>{t(`business_pages.semiconductor.products.slicing.notes.c${num}`)}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};


