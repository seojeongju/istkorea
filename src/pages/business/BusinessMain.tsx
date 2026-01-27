import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Monitor } from 'lucide-react';

export const BusinessMain = () => {
    const { t } = useTranslation();

    const subPages = [
        {
            title: t('header.submenu.press'),
            path: "/business/press-line",
            image: "/images/product_press_main.png",
            desc: t('business.items.press.desc')
        },
        {
            title: t('header.submenu.polishing'),
            path: "/business/polishing-line",
            image: "/images/product_chemical_polishing.png",
            desc: t('business.items.polishing.desc')
        },
        {
            title: t('header.submenu.semicon'),
            path: "/business/semiconductor",
            image: "/images/product_wiresaw.png",
            desc: t('business.items.semicon.desc')
        },
        {
            title: t('header.submenu.fiber'),
            path: "/business/fiber-optics",
            image: "/images/product_step_polishing.png",
            desc: t('business.items.fiber.desc')
        }
    ];

    const applications = [
        {
            icon: <Cpu className="w-10 h-10 text-primary" />,
            title: t('business_main.applications.items.0.title'),
            desc: t('business_main.applications.items.0.desc')
        },
        {
            icon: <Zap className="w-10 h-10 text-primary" />,
            title: t('business_main.applications.items.1.title'),
            desc: t('business_main.applications.items.1.desc')
        },
        {
            icon: <Monitor className="w-10 h-10 text-primary" />,
            title: t('business_main.applications.items.2.title'),
            desc: t('business_main.applications.items.2.desc')
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Header */}
            <div className="bg-gray-950 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/50 z-0"></div>
                {/* Background Image Placeholder if available */}
                {/* <img src="/images/business_bg.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30 z-[-1]" /> */}
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('header.menu.business')}</h1>
                        <p className="text-gray-300 text-xl max-w-2xl mx-auto whitespace-pre-line">
                            {t('business_main.title')}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Business Areas - Quick Navigation */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                            Our Business
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                            {t('business_main.business_areas.title')}
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            {t('business_main.business_areas.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {subPages.map((page, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={page.path}
                                    className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full"
                                >
                                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center relative overflow-hidden">
                                        <img
                                            src={page.image}
                                            alt={page.title}
                                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <div className="p-6 bg-white relative">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-between group-hover:text-primary transition-colors">
                                            {page.title}
                                            <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                                            {page.desc}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight whitespace-pre-line">
                            {t('business_main.title')}
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed whitespace-pre-line">
                            {t('business_main.intro')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="/images/product_wiresaw.png"
                                alt="Multi Wire Saw"
                                className="w-full rounded-2xl shadow-xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 md:p-12 rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                {t('business_main.what_is.title')}
                            </h3>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>{t('business_main.what_is.desc1')}</p>
                                <p>{t('business_main.what_is.desc2')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                            {t('business_main.applications.subtitle')}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                            {t('business_main.applications.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {applications.map((app, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                            >
                                <div className="mb-6 p-4 bg-primary/5 rounded-xl inline-block">
                                    {app.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {app.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {app.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subpages Navigation */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
                        {t('business_main.subpages_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {subPages.map((page, index) => (
                            <Link
                                key={index}
                                to={page.path}
                                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="aspect-[4/3] bg-gray-50 p-6 flex items-center justify-center relative overflow-hidden">
                                    <img
                                        src={page.image}
                                        alt={page.title}
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center justify-between group-hover:text-primary transition-colors">
                                        {page.title}
                                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-2">
                                        {page.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
