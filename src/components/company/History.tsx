import { motion } from 'framer-motion';

const historyData = [
    {
        year: "2010 ~ 2013", events: [
            "중국 상하이 전시회 CPL, CGL LINE 출품",
            "중국 코일시트 그라인딩 장치 특허출원",
            "중국 광저우 전시회 CPL, CGL LINE 출품",
            "슈퍼소재 융합제품화기술개발사업 (지식경제부)",
            "POSCO AST CPL 샌딩기 제작설치",
            "(주)삼성전자 광섬유용 SRD, SLD M/C 제작설치",
            "(주)석진철강 COIL POLISHING LINE 제작설치",
            "슈퍼섬유 경량소재 개발과제 체결 (지식경제부)",
            "BNG STEEL COIL GRINDING LINE 제작설치"
        ]
    },
    {
        year: "2007 ~ 2009", events: [
            "중국 HSSM 그룹 COIL POLISHING LINE 제작설치",
            "POSCO (순천)마그네슘공장 HOT PRESS 제작설치",
            "(주)아주스틸 수세 및 건조기 제작설치",
            "(주)애드스테인리스 BUTTON SIDE NO.4 제작설치",
            "(주)아주스틸 AUTO LAY-UP SYSTEM 제작설치",
            "(주)이녹스 4단 HOT PRESS 제작설치",
            "POSCO C&C MCCL HOT PRESS 2LINE LAY UP 제작설치",
            "POSCO C&C MCCL HOT PRESS 2LINE 제작설치",
            "(주)아주스틸 VACUUM HOT PRESS SYSTEM 제작설치",
            "(주)웅진케미칼 WRPS VACUUM HOT PRESS (3,4호기) 제작설치",
            "(주)아주스틸 2단 진공 HOT PRESS SYSTEM 제작설치"
        ]
    },
    {
        year: "2005 ~ 2006", events: [
            "(주)대양금속 TURKEY 2공장 CPL 제작설치",
            "(주)선경스틸 HAIR LINE 설비 (4-HEAD) 제작설치",
            "(주)두산전자 20단 진공 PRESS 제작설치",
            "(주)두산전자 17단 Cold PRESS 제작설치",
            "(주)웅진케미칼 VACUUM HOT PRESS & LAY-UP SYSTEM 제작설치",
            "(주)아이에스티코리아 법인전환",
            "(주)웅진케미칼 VACUUM HOT PRESS & LAY-UP SYSTEM 제작설치",
            "(주)석진철강 포장기 LOADING 장치 제작설치",
            "(주)아주스틸 STS SHEET POLISHING LINE 제작설치",
            "(주)이노폴렉스 BELT SANDING M/C 제작설치"
        ]
    },
    {
        year: "2003 ~ 2004", events: [
            "기술혁신형 중소기업 INNO-BIZ 선정",
            "특허출원 (HAIR LINE 가공장치)",
            "휴대폰 외장 HAIR LINE 장비개발",
            "실용신안등록 (박형기판용 BELT SANDING)",
            "(주)현대자동차 성형분리판 제조용 HOT PRESS 제작설치",
            "ISO 9001 / 14001 인증 획득",
            "국내 최초 스테인레스 COIL POLISHING 가공용 WIDE BELT 개발",
            "벤처기업지정 (신기술기업)",
            "중국 지사 설립 (허페이)",
            "구미시 공단동 확장이전",
            "IST 설립 (2003년 12월 2일)"
        ]
    }
];

export const History = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto py-12 px-6"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">연혁</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">IST KOREA가 걸어온 혁신과 도전의 발자취입니다.</p>
            </div>

            <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:pl-0 space-y-12">
                {historyData.map((period, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-0"
                    >
                        <div className="md:flex items-start justify-between group">
                            {/* Year Marker */}
                            <div className="hidden md:block w-32 text-right pr-8 pt-1">
                                <span className="text-xl font-bold text-primary">{period.year.split(' ~ ')[0]}</span>
                                <span className="block text-sm text-gray-400 mt-1">~ {period.year.split(' ~ ')[1] || ''}</span>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-[-5px] md:left-auto md:right-auto md:left-1/2 md:-ml-[5px] w-3 h-3 rounded-full bg-white border-4 border-primary mt-2 z-10"></div>

                            {/* Mobile Year */}
                            <div className="md:hidden mb-2">
                                <span className="text-lg font-bold text-primary">{period.year}</span>
                            </div>

                            {/* Events */}
                            <div className="md:w-1/2 md:pl-10 pb-8">
                                <ul className="space-y-3">
                                    {period.events.map((event, i) => (
                                        <li key={i} className="text-gray-600 hover:text-gray-900 transition-colors cursor-default text-sm md:text-base leading-relaxed">
                                            - {event}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
