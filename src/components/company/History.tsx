import { motion } from 'framer-motion';
import { Flag, Award, Zap, Building2, TrendingUp, Calendar } from 'lucide-react';

const historyData = [
    {
        period: "2010 ~ 2013",
        title: "Global Expansion & R&D",
        icon: TrendingUp,
        events: [
            "중국 상하이, 광저우 전시회 CPL, CGL LINE 출품",
            "중국 코일시트 그라인딩 장치 특허출원",
            "슈퍼소재 융합제품화기술개발사업 선정 (지식경제부)",
            "POSCO AST, BNG STEEL 등 주요 대기업 설비 납품",
            "삼성전자, 석진철강 등 다수 기업 설비 제작/설치"
        ]
    },
    {
        period: "2007 ~ 2009",
        title: "Technological Innovation",
        icon: Zap,
        events: [
            "중국 HSSM 그룹 COIL POLISHING LINE 수출",
            "POSCO, 아주스틸, 이녹스 등 HOT PRESS 설비 다수 공급",
            "진공 PRESS 및 2차전지 관련 설비 기술력 인정",
            "POSCO C&C, 웅진케미칼 등 대형 프로젝트 수주"
        ]
    },
    {
        period: "2005 ~ 2006",
        title: "Growth & Corporation",
        icon: Building2,
        events: [
            "(주)아이에스티코리아 법인 전환",
            "대양금속 터키 공장, 두산전자 등 해외 및 국내 주요 설비 수주",
            "STS SHEET POLISHING, VACUUM HOT PRESS 기술 차별화",
            "이노폴렉스, 석진철강 등 다양한 산업군으로 사업 확장"
        ]
    },
    {
        period: "2003 ~ 2004",
        title: "Foundation & Certification",
        icon: Flag,
        events: [
            "IST 설립 (2003년 12월 2일) 및 구미공단 이전",
            "벤처기업, INNO-BIZ (기술혁신형 중소기업) 선정",
            "ISO 9001 / 14001 품질/환경경영시스템 인증 획득",
            "기업부설연구소 설립 및 특허/실용신안 다수 등록",
            "중국 허페이 지사 설립으로 글로벌 네트워크 구축"
        ]
    }
];

export const History = () => {
    return (
        <div className="max-w-7xl mx-auto py-16 px-6 min-h-screen bg-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-24"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
                    <Award size={16} />
                    <span>IST KOREA HISTORY</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    끊임없는 도전과 혁신의 <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">발자취를 소개합니다</span>
                </h2>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    2003년 설립 이래, 독보적인 기술력으로 세계 시장을 선도해 온 IST KOREA의 여정입니다.
                </p>
            </motion.div>

            <div className="relative">
                {/* Center Line for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 -translate-x-1/2"></div>

                {/* Mobile Line */}
                <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>

                <div className="space-y-24">
                    {historyData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Side */}
                                <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16">
                                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        <span className="text-4xl font-bold text-gray-200">{item.period.split(' ')[0]}</span>
                                        <div className="h-px bg-gray-200 w-12"></div>
                                    </div>

                                    <div className={`p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group
                                        ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}
                                    `}>
                                        <div className={`flex items-center gap-3 mb-6 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                            <div className="p-3 bg-blue-50 text-primary rounded-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <Icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                                <p className="text-sm text-primary font-medium">{item.period}</p>
                                            </div>
                                        </div>

                                        <ul className="space-y-4">
                                            {item.events.map((event, i) => (
                                                <li key={i} className={`flex items-start gap-3 text-gray-600 leading-relaxed
                                                    ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'}
                                                `}>
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0 group-hover:bg-primary transition-colors`}></div>
                                                    <span className="flex-1">{event}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-white border-4 border-primary shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10"></div>
                                </div>

                                {/* Empty Side for layout balance */}
                                <div className="md:w-1/2"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-32 text-center"
            >
                <div className="inline-flex flex-col items-center">
                    <div className="w-px h-16 bg-gradient-to-b from-gray-200 to-transparent mb-4"></div>
                    <p className="text-gray-400 font-medium tracking-widest text-sm uppercase">To Be Continued</p>
                </div>
            </motion.div>
        </div>
    );
};
