import { useState, useEffect } from 'react';
import { Menu, Globe, X, ChevronDown } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
    {
        title: "회사 소개",
        href: "/company",
        submenu: [
            { title: "인사말", href: "/company/greetings" },
            { title: "연혁", href: "/company/history" },
            { title: "조직도", href: "/company/organization" },
            { title: "오시는길", href: "/company/location" },
        ]
    },
    { title: "제품 소개", href: "#" },
    { title: "사업 소개", href: "#" },
    { title: "고객 지원", href: "#" }
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    useEffect(() => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-sm ${isScrolled || isMenuOpen || location.pathname !== '/'
                        ? 'bg-white/95 shadow-sm border-b border-gray-100'
                        : 'bg-transparent'
                    } ${isMenuOpen || location.pathname !== '/' ? 'text-gray-900' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 h-20 flex justify-between items-center relative z-50">
                    <div className="flex items-center gap-2 z-50">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold tracking-tighter transition-colors text-gray-900 group">
                            <span className="text-primary">IST</span>
                            <span className={`transition-colors ${isScrolled || isMenuOpen || location.pathname !== '/' ? 'text-gray-900' : 'text-white'}`}>korea</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <div key={item.title} className="relative group">
                                <Link
                                    to={item.href}
                                    className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-primary ${isScrolled || isMenuOpen || location.pathname !== '/' ? 'text-gray-600' : 'text-white/90'
                                        }`}
                                >
                                    {item.title}
                                    {item.submenu && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.submenu && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[160px] py-2">
                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.title}
                                                    to={sub.href}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                                                >
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4 z-50">
                        <button className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isScrolled || isMenuOpen || location.pathname !== '/'
                                ? 'bg-primary text-white hover:bg-primary/90 shadow-md'
                                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                            }`}>
                            <Globe size={18} />
                            <span>EN</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden p-1 transition-colors ${isScrolled || isMenuOpen || location.pathname !== '/' ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'
                                }`}
                        >
                            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-white pt-24 pb-12 flex flex-col overflow-y-auto"
                    >
                        <div className="container mx-auto px-6 flex flex-col">
                            <div className="flex flex-col gap-6">
                                {menuItems.map((item) => (
                                    <div key={item.title}>
                                        <div className="flex items-center justify-between" onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}>
                                            <Link
                                                to={item.href}
                                                className="text-3xl font-bold text-gray-900 hover:text-primary transition-colors flex items-center gap-4"
                                            >
                                                {item.title}
                                            </Link>
                                            {item.submenu && (
                                                <ChevronDown
                                                    size={24}
                                                    className={`text-gray-400 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                                                />
                                            )}
                                        </div>

                                        {/* Mobile Submenu */}
                                        <AnimatePresence>
                                            {item.submenu && activeDropdown === item.title && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden bg-gray-50 rounded-lg mt-4"
                                                >
                                                    <div className="p-4 flex flex-col gap-3">
                                                        {item.submenu.map((sub) => (
                                                            <Link
                                                                key={sub.title}
                                                                to={sub.href}
                                                                className="text-lg text-gray-600 hover:text-primary px-4 py-2 rounded hover:bg-white transition-colors"
                                                            >
                                                                {sub.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Info (Mobile) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-12 pt-12 border-t border-gray-200 flex flex-col gap-6 text-gray-500 text-sm"
                            >
                                <div className="space-y-1">
                                    <p className="font-bold text-gray-900">Contact</p>
                                    <p>054-461-6608</p>
                                    <p>istkorea@istkorea.kr</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-bold text-gray-900">Address</p>
                                    <p>경북 구미시 1공단로2길 17 (공단동)</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
