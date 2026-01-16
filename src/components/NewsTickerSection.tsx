import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Newspaper } from 'lucide-react';
import { storage } from '../services/storage';
import { useTranslation } from 'react-i18next';

export const NewsTickerSection = () => {
    const { t } = useTranslation();
    const newsItems = storage.getNews().slice(0, 5); // Get latest 5 news

    return (
        <section className="bg-white border-y border-gray-100 py-4 overflow-hidden relative z-20 shadow-sm">
            <div className="container mx-auto px-6 flex items-center gap-6">

                {/* News Label */}
                <div className="flex items-center gap-2 text-primary font-bold shrink-0 z-10 bg-white pr-4 border-r border-gray-200">
                    <Newspaper size={18} className="text-secondary" />
                    <span className="text-gray-900 tracking-tight">{t('news.label')}</span>
                </div>

                {/* Ticker Content */}
                <div className="flex-1 overflow-hidden relative h-6 md:h-7">
                    <motion.div
                        className="flex items-center whitespace-nowrap"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30, // Adjust speed: higher is slower
                        }}
                    >
                        {/* Render duplicates for seamless loop */}
                        <div className="flex items-center gap-12 shrink-0 pr-12">
                            {newsItems.map((item) => (
                                <Link key={item.id} to="/support/news" className="flex items-center gap-3 group">
                                    <span className="text-gray-700 text-sm md:text-base font-medium group-hover:text-primary transition-colors cursor-pointer">
                                        {item.title}
                                    </span>
                                    <span className="text-gray-400 text-xs hidden lg:block">
                                        {item.date}
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center gap-12 shrink-0 pr-12">
                            {newsItems.map((item) => (
                                <Link key={`dup-${item.id}`} to="/support/news" className="flex items-center gap-3 group">
                                    <span className="text-gray-700 text-sm md:text-base font-medium group-hover:text-primary transition-colors cursor-pointer">
                                        {item.title}
                                    </span>
                                    <span className="text-gray-400 text-xs hidden lg:block">
                                        {item.date}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* More Button */}
                <Link to="/support/news" className="shrink-0 text-xs md:text-sm font-medium text-gray-500 hover:text-primary flex items-center gap-1 z-10 bg-white pl-4 ml-auto border-l border-gray-200">
                    <span className="hidden leading-none md:block">{t('news.more')}</span> <ChevronRight size={14} />
                </Link>
            </div>

            {/* Gradient masks for better visual Integration */}
            <div className="absolute top-0 bottom-0 left-[180px] w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 hidden md:block"></div>
            <div className="absolute top-0 bottom-0 right-[80px] w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 hidden md:block"></div>
        </section>
    );
};
