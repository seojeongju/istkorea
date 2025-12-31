
import { Youtube, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div className="flex gap-8 mb-8 md:mb-0">
                        <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">About Us</a>
                        <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">Product</a>
                        <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">Business</a>
                        <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">Community</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                            <Youtube size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-200 my-8" />

                <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
                    <div className="space-y-2">
                        <p>
                            <span className="font-bold text-gray-700">SAEHAN NANOTECH</span> &nbsp;|&nbsp;
                            CEO: Hong Gil-dong &nbsp;|&nbsp;
                            Business License: 123-45-67890
                        </p>
                        <p>
                            Address: 123, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea &nbsp;|&nbsp;
                            Tel: 02-1234-5678 &nbsp;|&nbsp;
                            Fax: 02-1234-5679
                        </p>
                        <p className="mt-4 opacity-60">© 2025 SAEHAN NANOTECH. All Rights Reserved.</p>
                    </div>

                    <div className="flex gap-6 mt-6 md:mt-0">
                        <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
