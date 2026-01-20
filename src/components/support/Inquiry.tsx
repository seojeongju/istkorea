import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { storage } from '../../services/storage';

export const Inquiry = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'product',
        content: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Save to storage
        const inquiries = storage.getInquiries();
        const newId = Math.max(...inquiries.map(i => i.id), 0) + 1;

        storage.saveInquiries([{
            id: newId,
            ...formData,
            date: new Date().toISOString().split('T')[0],
            status: 'pending'
        }, ...inquiries]);

        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', type: 'product', content: '' });
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center py-20"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4">{t('support.inquiry.success.title')}</h2>
                <p className="text-gray-600 mb-8">{t('support.inquiry.success.desc')}</p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                >
                    {t('support.inquiry.success.button')}
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
        >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">{t('support.inquiry.title')}</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">{t('support.inquiry.form.name')}</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder={t('support.inquiry.form.name_placeholder')}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">{t('support.inquiry.form.email')}</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder={t('support.inquiry.form.email_placeholder')}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('support.inquiry.form.phone')}</label>
                        <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder={t('support.inquiry.form.phone_placeholder')}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('support.inquiry.form.type')}</label>
                        <select
                            value={formData.type}
                            onChange={e => setFormData({ ...formData, type: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                            <option value="product">{t('support.inquiry.form.types.product')}</option>
                            <option value="tech">{t('support.inquiry.form.types.tech')}</option>
                            <option value="recruit">{t('support.inquiry.form.types.recruit')}</option>
                            <option value="other">{t('support.inquiry.form.types.other')}</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('support.inquiry.form.content')}</label>
                        <textarea
                            rows={5}
                            required
                            value={formData.content}
                            onChange={e => setFormData({ ...formData, content: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                            placeholder={t('support.inquiry.form.content_placeholder')}
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            {t('support.inquiry.form.submit')}
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};
