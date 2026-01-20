import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { storage, type CareerItem } from '../../services/storage'; // Fix import type
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Careers = () => {
    const { t } = useTranslation();
    const activeCareers = storage.getCareers().filter(c => c.status === 'open');
    const [selectedCareer, setSelectedCareer] = useState<CareerItem | null>(null);

    const coreValues = [
        { key: 'creative', icon: CheckCircle2 },
        { key: 'challenge', icon: CheckCircle2 },
        { key: 'professional', icon: CheckCircle2 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t('support.careers.title')}</h2>
                <p className="text-lg text-gray-600">{t('support.careers.desc')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {coreValues.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <item.icon className="text-primary w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t(`support.careers.values.${item.key}.title`)}</h3>
                        <p className="text-gray-500 break-keep">
                            {t(`support.careers.values.${item.key}.desc`)}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-12">
                <h3 className="text-2xl font-bold mb-6">{t('support.careers.list.title')}</h3>
                {activeCareers.length > 0 ? (
                    <div className="grid gap-4">
                        {activeCareers.map((career) => (
                            <div key={career.id} className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-bold">{career.type}</span>
                                        <span className="text-gray-500 text-sm">{career.department}</span>
                                    </div>
                                    <h4 className="text-xl font-bold">{career.title}</h4>
                                </div>
                                <div className="mt-4 md:mt-0 flex items-center gap-4">
                                    <span className="text-sm text-gray-500">{t('support.careers.list.deadline')}: {career.deadline}</span>
                                    <button
                                        onClick={() => setSelectedCareer(career)}
                                        className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                                    >
                                        {t('support.careers.list.detail')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        {t('support.careers.list.empty')}
                    </div>
                )}
            </div>

            {/* Job Detail Modal */}
            {selectedCareer && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in-up">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-gray-50">
                            <div>
                                <span className="text-primary text-sm font-bold mb-1 block">{selectedCareer.department} / {selectedCareer.type}</span>
                                <h3 className="text-2xl font-bold text-gray-900">{selectedCareer.title}</h3>
                            </div>
                            <button onClick={() => setSelectedCareer(null)} className="text-gray-400 hover:text-gray-900 p-2">✕</button>
                        </div>
                        <div className="p-8 overflow-y-auto prose max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: selectedCareer.content || `<p>${t('support.careers.detail.empty_content')}</p>` }} />
                        </div>
                        <div className="p-6 border-t border-gray-100 flex justify-end bg-gray-50">
                            <button
                                onClick={() => setSelectedCareer(null)}
                                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                            >
                                {t('support.careers.detail.close')}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">{t('support.careers.always.title')}</h3>
                        <p className="text-gray-400">{t('support.careers.always.desc')}</p>
                    </div>
                    <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 group">
                        {t('support.careers.always.button')}
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
