
import { motion } from 'framer-motion';
import { Microscope, Cpu, Settings, Zap } from 'lucide-react';

const technologies = [
    {
        icon: <Microscope size={32} />,
        title: "나노급 정밀 제어",
        description: "차세대 디스플레이 및 반도체 공정을 위한 나노미터 단위의 초정밀 코팅 및 제어 기술을 구현합니다."
    },
    {
        icon: <Cpu size={32} />,
        title: "첨단 제어 시스템",
        description: "독자적인 소프트웨어 알고리즘으로 양산 환경에서의 안정성과 재현성을 완벽하게 보장합니다."
    },
    {
        icon: <Settings size={32} />,
        title: "맞춤형 엔지니어링",
        description: "고객사의 특정 요구사항과 공정 파라미터에 최적화된 장비를 설계 및 제작하여 제공합니다."
    },
    {
        icon: <Zap size={32} />,
        title: "고속 정밀 공정",
        description: "품질과 수율을 타협하지 않으면서도 최대의 생산성을 발휘하는 최적화된 시스템입니다."
    }
];

export const TechSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        CORE TECHNOLOGY <span className="text-accent">.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        끊임없는 R&D와 혁신을 통해 세계 최고 수준의 기술 솔루션을 제공합니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm break-keep">
                                {tech.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
