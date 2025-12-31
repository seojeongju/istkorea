import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Greetings } from '../components/company/Greetings';
import { History } from '../components/company/History';
import { Organization } from '../components/company/Organization';
import { Location } from '../components/company/Location';

const tabs = [
    { id: 'greetings', label: '인사말', component: Greetings },
    { id: 'history', label: '연혁', component: History },
    { id: 'organization', label: '조직도', component: Organization },
    { id: 'location', label: '오시는길', component: Location },
];

export const Company = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('greetings');

    // Sync URL path with active tab if needed, or simple hash based
    useEffect(() => {
        const path = location.pathname.split('/').pop();
        if (path && tabs.find(t => t.id === path)) {
            setActiveTab(path);
        }
    }, [location]);

    const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || Greetings;

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Page Header */}
            <div className="bg-gray-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-800 to-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">회사 소개</h1>
                    <p className="text-gray-400">IST KOREA의 어제와 오늘, 그리고 미래를 소개합니다.</p>
                </div>
            </div>

            {/* Sub Navigation */}
            <div className="border-b border-gray-200 sticky top-20 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-8 md:gap-12">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.id}
                                to={`/company/${tab.id}`}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-4 text-sm md:text-base font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-gray-500 hover:text-gray-800'
                                    }`}
                            >
                                {tab.label}
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
