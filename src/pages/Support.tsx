import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { News } from '../components/support/News';
import { Inquiry } from '../components/support/Inquiry';
import { Careers } from '../components/support/Careers';
import { useTranslation } from 'react-i18next';

const tabs = [
    { id: 'news', labelKey: 'header.submenu.news', component: News },
    { id: 'inquiry', labelKey: 'header.submenu.inquiry', component: Inquiry },
    { id: 'careers', labelKey: 'header.submenu.careers', component: Careers },
];

export const Support = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('news');

    useEffect(() => {
        const path = location.pathname.split('/').pop();
        if (path && tabs.find(t => t.id === path)) {
            setActiveTab(path);
        }
    }, [location]);

    const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || News;

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Page Header */}
            <div className="bg-gray-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-800 to-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('header.menu.support')}</h1>
                    <p className="text-gray-400">{t('support.desc')}</p>
                </div>
            </div>

            {/* Sub Navigation */}
            <div className="border-b border-gray-200 sticky top-20 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-8 md:gap-12">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.id}
                                to={`/support/${tab.id}`}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-4 text-sm md:text-base font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-gray-500 hover:text-gray-800'
                                    }`}
                            >
                                {t(tab.labelKey)}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="container mx-auto px-6 py-12">
                <ActiveComponent />
            </div>
        </div>
    );
};
