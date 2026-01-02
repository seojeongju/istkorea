import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { storage } from '../services/storage';
import { useEffect } from 'react';
import { LayoutDashboard, Newspaper, Users, MessageSquare, LogOut, Menu, X, Home } from 'lucide-react';
import { useState } from 'react';

export const AdminLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        if (!storage.isAuthenticated()) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        storage.logout();
        navigate('/admin/login');
    };

    const menuItems = [
        { title: '대시보드', href: '/admin/dashboard', icon: LayoutDashboard },
        { title: '기업소식 관리', href: '/admin/news', icon: Newspaper },
        { title: '인재채용 관리', href: '/admin/careers', icon: Users },
        { title: '문의사항 관리', href: '/admin/inquiries', icon: MessageSquare },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
                <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">IST Admin</h1>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
                        <X size={24} />
                    </button>
                </div>
                <nav className="p-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.href
                                ? 'bg-primary text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                }`}
                        >
                            <item.icon size={20} />
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </nav>
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    >
                        <LogOut size={20} />
                        <span>로그아웃</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 z-40">
                    <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-gray-600">
                        <Menu size={24} />
                    </button>
                    <div className="flex items-center gap-4 ml-auto">
                        <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium">
                            <Home size={18} />
                            홈페이지 이동
                        </Link>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <span className="text-sm text-gray-500">Administrator</span>
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                </header>
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
