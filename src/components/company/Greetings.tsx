import { motion } from 'framer-motion';

export const Greetings = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto py-12 px-6"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">CEO 인사말</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                <h3 className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
                    "초정밀 나노 기술의 새로운 지평을 열어가는<br />
                    글로벌 파트너, IST KOREA입니다."
                </h3>
            </div>

            <div className="space-y-8 text-gray-600 leading-loose text-lg text-justify">
                <p>
                    안녕하십니까? (주)아이에스티코리아 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.
                </p>
                <p>
                    2003년 설립 이래, 저희 IST KOREA는 끊임없는 기술 개발과 혁신을 통해
                    디스플레이 및 반도체 관련 제조 장비 분야에서 독보적인 기술력을 축적해 왔습니다.
                    특히 PCB/FPCB 제조 설비, 터치패널(TSP) 제조 설비, 그리고 2차 전지 관련 설비 분야에서
                    고객 여러분께 최고의 품질과 최적의 솔루션을 제공하기 위해 노력하고 있습니다.
                </p>
                <p>
                    저희는 단순한 장비 제조를 넘어, 고객의 생산성 향상과 가치 창출을 위한
                    <strong>'Total Engineering Solution Provider'</strong>가 되고자 합니다.
                    급변하는 시장 환경 속에서도 흔들리지 않는 기술력과 신뢰를 바탕으로,
                    고객과 함께 성장하고 발전하는 든든한 파트너가 되겠습니다.
                </p>
                <p>
                    앞으로도 지속적인 R&D 투자와 인재 양성을 통해 세계 최고의 경쟁력을 갖춘
                    기술 선도 기업으로 도약할 것을 약속드립니다.
                    여러분의 변함없는 관심과 성원을 부탁드립니다.
                </p>
                <p>
                    감사합니다.
                </p>
            </div>

            <div className="mt-16 text-right">
                <p className="text-xl font-bold text-gray-900">(주)아이에스티코리아 대표이사</p>
                <img src="/images/signature.png" alt="CEO Signature" className="inline-block mt-4 h-12 opacity-50" onError={(e) => e.currentTarget.style.display = 'none'} />
                <p className="text-2xl font-serif text-primary mt-2">금 병 철</p>
            </div>
        </motion.div>
    );
};
