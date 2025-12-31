
import { Youtube, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div className="flex gap-8 mb-8 md:mb-0">
                        <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">회사소개</a>
                        <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">제품소개</a>
                        <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">사업영역</a>
                        <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">인재채용</a>
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
                            대표이사: 홍길동 &nbsp;|&nbsp;
                            사업자등록번호: 123-45-67890
                        </p>
                        <p>
                            주소: 서울특별시 강남구 테헤란로 123, 새한빌딩 4층 &nbsp;|&nbsp;
                            전화: 02-1234-5678 &nbsp;|&nbsp;
                            팩스: 02-1234-5679
                        </p>
                        <p className="mt-4 opacity-60">© 2025 SAEHAN NANOTECH. All Rights Reserved.</p>
                    </div>

                    <div className="flex gap-6 mt-6 md:mt-0">
                        <a href="#" className="hover:text-gray-900">개인정보처리방침</a>
                        <a href="#" className="hover:text-gray-900">이용약관</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
