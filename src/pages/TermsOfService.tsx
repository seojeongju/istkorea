import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const TermsOfService = () => {
    const { t } = useTranslation();

    const sections = t('terms_of_service.sections', { returnObjects: true }) as { title: string; content: string }[];

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Header */}
            <div className="bg-gray-50 py-20 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('terms_of_service.title')}
                        </h1>
                        <p className="text-gray-500">
                            {t('terms_of_service.last_updated')}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg max-w-none text-gray-600"
                >
                    <p className="mb-12 leading-relaxed whitespace-pre-line">
                        {t('terms_of_service.intro')}
                    </p>

                    <div className="space-y-12">
                        {sections && sections.map((section, index) => (
                            <div key={index} className="scroll-mt-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {section.title}
                                </h3>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <p className="whitespace-pre-line leading-relaxed text-base">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
