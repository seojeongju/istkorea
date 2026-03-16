import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Table } from 'lucide-react';

export const Slicing = () => {
    const { t } = useTranslation();

    const sicData = [
        { material: 'SiC', inch: '2"', mm: 50, thickness: '0.4 ~ 5.0', tolerance: '±0.03', roughness: '1.5 ~ 3.0', price: '별도협의' },
        { material: 'SiC', inch: '3"', mm: 75, thickness: '0.5 ~ 10.0', tolerance: '±0.03', roughness: '1.5 ~ 3.0', price: '별도협의' },
        { material: 'SiC', inch: '4"', mm: 100, thickness: '0.5 ~ 10.0', tolerance: '±0.03', roughness: '2.0 ~ 3.5', price: '별도협의' },
        { material: 'SiC', inch: '6"', mm: 150, thickness: '0.7 ~ 15.0', tolerance: '±0.05', roughness: '2.5 ~ 4.5', price: '별도협의' },
        { material: 'SiC', inch: '8"', mm: 200, thickness: '0.8 ~ 20.0', tolerance: '±0.08', roughness: '3.0 ~ 6.0', price: '별도협의' },
    ];

    const glassData = [
        { material: 'Glass', inch: '2"', mm: 50, thickness: '0.07 ~ 10.0', tolerance: '±0.03', roughness: '0.8 ~ 1.5', price: '개발중' },
        { material: 'Glass', inch: '3"', mm: 75, thickness: '0.1 ~ 20.0', tolerance: '±0.03', roughness: '1.0 ~ 2.0', price: '별도협의' },
        { material: 'Glass', inch: '4"', mm: 100, thickness: '0.2 ~ 20.0', tolerance: '±0.05', roughness: '1.0 ~ 2.0', price: '별도협의' },
        { material: 'Glass', inch: '6"', mm: 150, thickness: '0.3 ~ 30.0', tolerance: '±0.07', roughness: '1.5 ~ 2.5', price: '별도협의' },
        { material: 'Glass', inch: '8"', mm: 200, thickness: '1.2 ~ 50.0', tolerance: '±0.10', roughness: '2.0 ~ 3.5', price: '별도협의' },
    ];

    const TableComponent = ({ data, title }: { data: any[], title: string }) => (
        <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                {title} Cutting Specifications
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-bold text-center border-r border-gray-200">소재</th>
                            <th className="px-6 py-4 font-bold text-center border-r border-gray-200">직경 (Inch)</th>
                            <th className="px-6 py-4 font-bold text-center border-r border-gray-200">직경 (mm)</th>
                            <th className="px-6 py-4 font-bold text-center border-r border-gray-200">절단 두께 범위 (mm)</th>
                            <th className="px-6 py-4 font-bold text-center border-r border-gray-200">절단 공차 (mm)</th>
                            <th className="px-6 py-4 font-bold text-center border-r border-gray-200">조도 (Ra, ㎛)</th>
                            <th className="px-6 py-4 font-bold text-center">대략 단가 (원/장)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-center font-semibold text-gray-900 border-r border-gray-100">{row.material}</td>
                                <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-100">{row.inch}</td>
                                <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-100">{row.mm}</td>
                                <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-100">{row.thickness}</td>
                                <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-100">{row.tolerance}</td>
                                <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-100">{row.roughness}</td>
                                <td className="px-6 py-4 text-center text-gray-600 font-medium">{row.price === '개발중' ? <span className='text-accent'>{row.price}</span> : row.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Header */}
            <div className="bg-gray-950 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/10 z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('business_pages.slicing.title')}</h1>
                        <p className="text-gray-400 text-xl max-w-2xl whitespace-pre-line">
                            {t('business_pages.slicing.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Product Navigation Mock (to align with Semiconductor) */}
            <div className="sticky top-20 z-40 bg-white shadow-md border-b border-gray-100 mb-16">
                <div className="container mx-auto px-6">
                    <div className="flex overflow-x-auto no-scrollbar gap-2 py-4">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 bg-primary text-white shadow-lg scale-105">
                            <Table size={20} />
                            Test Cutting Specifications
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Tables Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-10">
                        <TableComponent data={sicData} title="SiC" />
                        <TableComponent data={glassData} title="Glass" />
                        
                        {/* Sample Test Note */}
                        <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                            <p className="text-primary font-medium flex items-center gap-2">
                                <span className="text-lg">*</span> 
                                테스트 가공(Sample Test): "고객사 보유 소재에 대한 Test Cutting 서비스를 제공합니다."
                            </p>
                        </div>
                    </div>

                    {/* Caveats Section */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-1 h-5 bg-gray-400 rounded-full"></div>
                            주의사항 및 안내
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400 font-bold">※</span>
                                <p>상기 사양은 DWS 절단 기준 As-cut 조건입니다. (AS-CUT : 절단 직후, 추가 연마 공정이 적용되지 않은 상태)</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400 font-bold">※</span>
                                <p>원형(Ø) 및 사각 블록 소재 대응 가능</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400 font-bold">※</span>
                                <p>0.1, 0.2 (T) 절단 장비 개발중</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400 font-bold">※</span>
                                <p>대구경 또는 최소 두께 조건은 공정 안정성 검토 후 진행됩니다.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400 font-bold">※</span>
                                <p>조도, 두께 공차 및 단가는 소재 특성, 수량, 공정 조건에 따라 변동될 수 있습니다.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400 font-bold">※</span>
                                <p>상세 사양 및 견적은 별도 문의 바랍니다.</p>
                            </li>
                        </ul>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};
