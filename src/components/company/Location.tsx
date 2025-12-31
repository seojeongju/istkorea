import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Location = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto py-12 px-6"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">오시는 길</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">IST KOREA 본사 및 공장 위치를 안내해 드립니다.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Map Section */}
                <div className="lg:col-span-2 h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
                    {/* Placeholder for Map - In real app, integrate Kakao Map or Google Map */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.673895781685!2d128.3846665763661!3d36.10309857245453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565c6359df3f7cd%3A0xe10437d043c75d4a!2z6rK97IOB67aB64-EIOq1rOuvuOyLnCDqs7Xri6jrj5kgMeqzteuLqOuhnDLquLggMTc!5e0!3m2!1sko!2skr!4v1709600000000!5m2!1sko!2skr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Company Location"
                    ></iframe>
                </div>

                {/* Info Section */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 h-full flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">(주)아이에스티코리아</h3>
                            <p className="text-gray-500">본사 및 1공장</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-blue-50 text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">주소</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        경북 구미시 1공단로2길 17<br />
                                        (공단동 264-16)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-blue-50 text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">연락처</h4>
                                    <p className="text-gray-600">Tel: 054-461-6608</p>
                                    <p className="text-gray-600">Fax: 054-463-6608</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-blue-50 text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">이메일</h4>
                                    <p className="text-gray-600">istkorea@istkorea.kr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
