import { motion } from 'framer-motion';

const OrgBox = ({ title, role, sub }: { title: string, role?: string, sub?: boolean }) => (
    <div className={`
        relative p-4 rounded-lg bg-white shadow-md border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1
        ${sub ? 'w-full md:w-32 text-sm' : 'w-48'}
        ${title === "대표이사" ? 'bg-primary text-white border-primary' : 'text-gray-800'}
    `}>
        <h3 className={`font-bold ${title === "대표이사" ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
        {role && <p className={`text-xs mt-1 ${title === "대표이사" ? 'text-blue-100' : 'text-gray-500'}`}>{role}</p>}
    </div>
);

const Connector = ({ height = "h-8" }: { height?: string }) => (
    <div className={`w-[2px] ${height} bg-gray-300 mx-auto`}></div>
);

export const Organization = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto py-12 px-6"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">조직도</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">최적의 성과를 창출하는 전문적이고 효율적인 조직 시스템입니다.</p>
            </div>

            <div className="flex flex-col items-center">
                {/* CEO */}
                <OrgBox title="대표이사" role="CEO" />
                <Connector height="h-12" />

                {/* Level 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl relative">
                    {/* Horizontal Connector Line for branches */}
                    <div className="hidden md:block absolute top-[-1px] left-[16%] right-[16%] h-[2px] bg-gray-300 transform -translate-y-12"></div>

                    {/* Management */}
                    <div className="flex flex-col items-center">
                        <div className="w-[2px] h-12 bg-gray-300 -mt-12 hidden md:block"></div>
                        <OrgBox title="경영지원본부" />
                        <Connector />
                        <div className="flex flex-col gap-4 mt-2 w-full">
                            <OrgBox title="기획팀" sub />
                            <OrgBox title="재무/인사" sub />
                            <OrgBox title="총무" sub />
                        </div>
                    </div>

                    {/* Sales & R&D */}
                    <div className="flex flex-col items-center">
                        <div className="w-[2px] h-12 bg-gray-300 -mt-12 hidden md:block"></div>
                        <OrgBox title="기술연구소 / 영업" />
                        <Connector />
                        <div className="flex flex-col gap-4 mt-2 w-full">
                            <OrgBox title="국내영업" sub />
                            <OrgBox title="해외영업" sub />
                            <OrgBox title="R&D 개발" sub />
                            <OrgBox title="설계팀" sub />
                        </div>
                    </div>

                    {/* Production */}
                    <div className="flex flex-col items-center">
                        <div className="w-[2px] h-12 bg-gray-300 -mt-12 hidden md:block"></div>
                        <OrgBox title="생산본부" />
                        <Connector />
                        <div className="flex flex-col gap-4 mt-2 w-full">
                            <OrgBox title="생산관리" sub />
                            <OrgBox title="제조 1팀" sub />
                            <OrgBox title="제조 2팀" sub />
                            <OrgBox title="품질관리(QC)" sub />
                            <OrgBox title="CS팀" sub />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
