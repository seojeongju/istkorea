import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Greetings = () => {
    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/semiconductor_bg_abstract.png"
                    alt="Semiconductor Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-6xl mx-auto px-6 md:px-12"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Title Section */}
                    <div className="lg:col-span-5 text-center lg:text-left">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            className="h-1 bg-primary mb-6 mx-auto lg:mx-0"
                        ></motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                            CEO MESSAGE
                        </h2>
                        <div className="relative inline-block">
                            <Quote className="absolute -top-4 -left-4 text-primary/20 w-12 h-12 transform -scale-x-100" />
                            <h3 className="text-2xl md:text-3xl font-serif text-gray-800 font-medium leading-relaxed italic z-10 relative">
                                "초정밀 나노 기술의<br />
                                <span className="text-primary font-bold not-italic">새로운 지평</span>을 열어가는<br />
                                글로벌 파트너,<br />
                                <span className="text-gray-900 border-b-4 border-primary/20">IST KOREA</span>입니다."
                            </h3>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/50">
                            <div className="space-y-6 text-gray-700 leading-loose text-lg font-light text-justify">
                                <p>
                                    안녕하십니까? <span className="font-bold text-gray-900">(주)아이에스티코리아</span> 홈페이지를 방문해 주신여러분을 진심으로 환영합니다.
                                </p>
                                <p>
                                    2003년 설립 이래, 저희 IST KOREA는 끊임없는 기술 개발과 혁신을 통해
                                    디스플레이 및 반도체 관련 제조 장비 분야에서 독보적인 기술력을 축적해 왔습니다.
                                    특히 PCB/FPCB 제조 설비, 터치패널(TSP) 제조 설비, 그리고 2차 전지 관련 설비 분야에서
                                    고객 여러분께 최고의 품질과 최적의 솔루션을 제공하기 위해 노력하고 있습니다.
                                </p>
                                <p>
                                    저희는 단순한 장비 제조를 넘어, 고객의 생산성 향상과 가치 창출을 위한
                                    <span className="text-primary font-bold inline-block mx-1">'Total Engineering Solution Provider'</span>가 되고자 합니다.
                                    급변하는 시장 환경 속에서도 흔들리지 않는 기술력과 신뢰를 바탕으로,
                                    고객과 함께 성장하고 발전하는 든든한 파트너가 되겠습니다.
                                </p>
                                <p>
                                    앞으로도 지속적인 R&D 투자와 인재 양성을 통해 세계 최고의 경쟁력을 갖춘
                                    기술 선도 기업으로 도약할 것을 약속드립니다.
                                    여러분의 변함없는 관심과 성원을 부탁드립니다.
                                </p>
                                <p className="font-bold text-gray-900">
                                    감사합니다.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-col items-end border-t border-gray-200 pt-8">
                                <p className="text-lg font-bold text-gray-900 tracking-wider">(주)아이에스티코리아 대표이사</p>
                                <div className="flex items-end gap-4 mt-2">
                                    <img src="/images/signature.png" alt="CEO Signature" className="h-16 opacity-70" onError={(e) => e.currentTarget.style.display = 'none'} />
                                    <p className="text-3xl font-serif text-primary font-bold mb-1">금 병 철</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
