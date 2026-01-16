import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const Greetings = () => {
    const { t } = useTranslation();

    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/semiconductor_bg_abstract.png"
                    alt="Semiconductor Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-6xl mx-auto px-6 md:px-12"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Title Section */}
                    <div className="lg:col-span-5 text-center lg:text-left">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            className="h-1 bg-primary mb-6 mx-auto lg:mx-0"
                        ></motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                            CEO MESSAGE
                        </h2>
                        <div className="relative inline-block">
                            <Quote className="absolute -top-4 -left-4 text-primary/20 w-12 h-12 transform -scale-x-100" />
                            <h3 className="text-2xl md:text-3xl font-serif text-gray-800 font-medium leading-relaxed italic z-10 relative">
                                "{t('company_page.greetings.quote_front')}<br />
                                <span className="text-primary font-bold not-italic">{t('company_page.greetings.quote_highlight')}</span>{t('company_page.greetings.quote_middle')}<br />
                                {t('company_page.greetings.quote_partner')}<br />
                                <span className="text-gray-900 border-b-4 border-primary/20">{t('company_page.greetings.quote_end')}</span>"
                            </h3>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/50">
                            <div className="space-y-6 text-gray-700 leading-loose text-lg font-light text-justify">
                                <p>
                                    <Trans i18nKey="company_page.greetings.p1" components={[<span className="font-bold text-gray-900" />]} />
                                </p>
                                <p>
                                    {t('company_page.greetings.p2')}
                                </p>
                                <p>
                                    <Trans i18nKey="company_page.greetings.p3" components={[<span className="text-primary font-bold inline-block mx-1" />]} />
                                </p>
                                <p>
                                    {t('company_page.greetings.p4')}
                                </p>
                                <p className="font-bold text-gray-900">
                                    {t('company_page.greetings.closing')}
                                </p>
                            </div>

                            <div className="mt-12 flex flex-col items-end border-t border-gray-200 pt-8">
                                <p className="text-lg font-bold text-gray-900 tracking-wider">{t('company_page.greetings.signature_title')}</p>
                                <div className="flex items-end gap-4 mt-2">
                                    <img src="/images/signature.png" alt="CEO Signature" className="h-16 opacity-70" onError={(e) => e.currentTarget.style.display = 'none'} />
                                    <p className="text-3xl font-serif text-primary font-bold mb-1">{t('company_page.greetings.ceo_name')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
