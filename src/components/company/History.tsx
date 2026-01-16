import { motion } from 'framer-motion';
import { Flag, Award, Zap, Building2, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const History = () => {
    const { t } = useTranslation();

    const historyData = [
        {
            period: "2010 ~ 2013",
            titleKey: "period1",
            icon: TrendingUp,
        },
        {
            period: "2007 ~ 2009",
            titleKey: "period2",
            icon: Zap,
        },
        {
            period: "2005 ~ 2006",
            titleKey: "period3",
            icon: Building2,
        },
        {
            period: "2003 ~ 2004",
            titleKey: "period4",
            icon: Flag,
        }
    ];
    return (
        <div className="max-w-7xl mx-auto py-16 px-6 min-h-screen bg-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-24"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
                    <Award size={16} />
                    <span>IST KOREA HISTORY</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    {t('company_page.history.main_title_1')} <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">{t('company_page.history.main_title_2')}</span>
                </h2>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    {t('company_page.history.description')}
                </p>
            </motion.div>

            <div className="relative">
                {/* Center Line for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 -translate-x-1/2"></div>

                {/* Mobile Line */}
                <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>

                <div className="space-y-24">
                    {historyData.map((item, index) => {
                        const Icon = item.icon;
                        const title = t(`company_page.history.${item.titleKey}.title`);
                        const eventsObj = t(`company_page.history.${item.titleKey}.events`, { returnObjects: true }) as Record<string, string>;
                        const events = Object.values(eventsObj);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Side */}
                                <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16">
                                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        <span className="text-4xl font-bold text-gray-200">{item.period.split(' ')[0]}</span>
                                        <div className="h-px bg-gray-200 w-12"></div>
                                    </div>

                                    <div className={`p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group
                                        ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}
                                    `}>
                                        <div className={`flex items-center gap-3 mb-6 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                            <div className="p-3 bg-blue-50 text-primary rounded-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <Icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                                                <p className="text-sm text-primary font-medium">{item.period}</p>
                                            </div>
                                        </div>

                                        <ul className="space-y-4">
                                            {events.map((event, i) => (
                                                <li key={i} className={`flex items-start gap-3 text-gray-600 leading-relaxed
                                                    ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'}
                                                `}>
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0 group-hover:bg-primary transition-colors`}></div>
                                                    <span className="flex-1">{event}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-white border-4 border-primary shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10"></div>
                                </div>

                                {/* Empty Side for layout balance */}
                                <div className="md:w-1/2"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-32 text-center"
            >
                <div className="inline-flex flex-col items-center">
                    <div className="w-px h-16 bg-gradient-to-b from-gray-200 to-transparent mb-4"></div>
                    <p className="text-gray-400 font-medium tracking-widest text-sm uppercase">To Be Continued</p>
                </div>
            </motion.div>
        </div>
    );
};
