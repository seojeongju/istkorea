import { useState, useEffect } from 'react';
import { Menu, Globe, X, ArrowRight } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const menuItems = [
    { title: "회사 소개", href: "#" },
    { title: "제품 소개", href: "#" },
    { title: "사업 소개", href: "#" },
    { title: "고객 지원", href: "#" }
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY, scrollYProgress } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'
                    } ${isMenuOpen ? 'text-gray-900' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 h-20 flex justify-between items-center relative z-50">
                    <div className="flex items-center gap-2 z-50">
                        {/* Logo */}
                        <a href="#" className={`text-2xl font-bold tracking-tighter transition-colors ${isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'
                            }`}>
                            <span className="text-primary">IST</span>
                            <span className={isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}>korea</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className={`text-base font-medium transition-colors hover:text-primary ${isScrolled || isMenuOpen ? 'text-gray-600' : 'text-white/90'
                                    }`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4 z-50">
                        <button className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isScrolled || isMenuOpen
                                ? 'bg-primary text-white hover:bg-primary/90 shadow-md'
                                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                            }`}>
                            <Globe size={18} />
                            <span>EN</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden p-1 transition-colors ${isScrolled || isMenuOpen ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'
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
                        className="fixed inset-0 z-40 bg-white pt-24 pb-12 flex flex-col"
                    >
                        <div className="container mx-auto px-6 h-full flex flex-col justify-center">
                            <div className="flex flex-col gap-6 md:gap-8">
                                {menuItems.map((item, index) => (
                                    <motion.a
                                        key={item.title}
                                        href={item.href}
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                                        className="text-4xl md:text-6xl font-bold text-gray-900 hover:text-primary transition-colors flex items-center gap-4 group w-fit"
                                    >
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-8 text-accent">
                                            <ArrowRight size={32} />
                                        </span>
                                        {item.title}
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-12 md:mt-24 pt-12 border-t border-gray-200 flex flex-col md:flex-row gap-8 text-gray-500 text-sm"
                            >
                                <div className="space-y-1">
                                    <p className="font-bold text-gray-900">Contact</p>
                                    <p>054-461-6608</p>
                                    <p>istkorea@istkorea.kr</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-bold text-gray-900">Address</p>
                                    <p>경북 구미시 1공단로2길 17</p>
                                    <p>(공단동)</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-accent z-50"
                style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                initial={{ scaleX: 0 }}
            />
        </>
    );
};
