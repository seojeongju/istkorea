import { Link } from 'react-router-dom';
import { Youtube, Mail, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div className="flex gap-8 mb-8 md:mb-0">
                        <Link to="/company" className="text-gray-600 hover:text-primary font-medium transition-colors">{t('footer.menu.company')}</Link>
                        <a href="/#product_area" className="text-gray-600 hover:text-primary font-medium transition-colors">{t('footer.menu.products')}</a>
                        <Link to="/business" className="text-gray-600 hover:text-primary font-medium transition-colors">{t('footer.menu.business')}</Link>
                        <Link to="/support/careers" className="text-gray-600 hover:text-primary font-medium transition-colors">{t('footer.menu.careers')}</Link>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                            <Youtube size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-200 my-8" />

                <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
                    <div className="space-y-2">
                        <p>
                            <span className="font-bold text-gray-700">{t('footer.info.company_name')}</span> &nbsp;|&nbsp;
                            {t('footer.info.ceo_label')}: {t('footer.info.ceo_name')} &nbsp;|&nbsp;
                            {t('footer.info.reg_no_label')}: {t('footer.info.reg_no')}
                        </p>
                        <p>
                            {t('footer.info.address_label')}: {t('footer.info.address')} &nbsp;|&nbsp;
                            {t('footer.info.tel_label')}: {t('footer.info.tel')} &nbsp;|&nbsp;
                            {t('footer.info.fax_label')}: {t('footer.info.fax')}
                        </p>
                        <p className="mt-4 opacity-60">{t('footer.info.copyright')}</p>
                    </div>

                    <div className="flex gap-6 mt-6 md:mt-0 items-center">
                        <Link to="/privacy-policy" className="hover:text-gray-900">{t('footer.links.privacy')}</Link>
                        <Link to="/terms-of-service" className="hover:text-gray-900">{t('footer.links.terms')}</Link>
                        <div className="w-px h-3 bg-gray-300 mx-1"></div>
                        <Link to="/admin/login" className="flex items-center gap-1 hover:text-primary transition-colors">
                            <Lock size={12} />
                            <span>{t('footer.links.admin')}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
