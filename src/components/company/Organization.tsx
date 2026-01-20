import { motion } from 'framer-motion';
import { Users, Briefcase, Settings, Target, Globe, PenTool, Cpu, Wrench, ShieldCheck, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Using any for icon type to avoid strict TypeScript mismatch with Lucide icons in this specific setup
const Card = ({ title, role, icon: Icon, type = "default", index = 0 }: { title: string, role?: string, icon?: any, type?: "ceo" | "division" | "team" | "default", index?: number }) => {
    const isCeo = type === "ceo";
    const isDivision = type === "division";

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.1, duration: 0.5 }
        }
    };

    if (isCeo) {
        return (
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl w-64 text-center border-4 border-white/20"
            >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <Users size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mt-4">{title}</h3>
                <p className="text-blue-200 text-sm mt-1 mb-2 tracking-widest uppercase font-semibold">{role}</p>
            </motion.div>
        );
    }

    if (isDivision) {
        return (
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 bg-white rounded-xl shadow-lg border-t-4 border-primary p-5 w-60 text-center group hover:-translate-y-1 transition-transform duration-300"
            >
                {Icon && (
                    <div className="w-12 h-12 mx-auto bg-blue-50 text-primary rounded-full flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon strokeWidth={2} size={24} />
                    </div>
                )}
                <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
            </motion.div>
        );
    }

    // Team Item
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 w-full"
        >
            <div className="w-2 h-2 rounded-full bg-primary/40 shrink-0"></div>
            {Icon && <Icon size={14} className="text-gray-400 shrink-0" />}
            <span className="text-sm font-medium text-gray-700">{title}</span>
        </motion.div>
    );
};

export const Organization = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto py-16 px-6 bg-gray-50/50 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Organization Chart</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">{t('company_page.organization.title')}</h2>
                <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg whitespace-pre-line">
                    {t('company_page.organization.desc')}
                </p>
            </motion.div>

            <div className="flex flex-col items-center relative">
                {/* Level 1: CEO */}
                <div className="relative mb-12">
                    <Card title={t('company_page.organization.cards.ceo')} role={t('company_page.organization.role_ceo')} type="ceo" />
                    <div className="absolute -bottom-12 left-1/2 w-px h-12 bg-gray-300 -translate-x-1/2"></div>
                </div>

                {/* Level 2: Divisions Container */}
                <div className="w-full relative px-4">
                    {/* Horizontal Line connecting divisions */}
                    <div className="hidden md:block absolute top-0 left-[16.6%] right-[16.6%] h-[2px] bg-gray-300"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full">
                        {/* 1. Management Division */}
                        <div className="flex flex-col items-center relative">
                            {/* Vertical line from top horizontal line to card */}
                            <div className="hidden md:block h-8 w-px bg-gray-300 mb-0"></div>

                            <Card title={t('company_page.organization.cards.div_mgmt')} type="division" icon={Briefcase} index={1} />

                            {/* Connector to children */}
                            <div className="h-8 w-px bg-gray-300 mt-0"></div>

                            {/* Children */}
                            <div className="w-full space-y-3 px-4 md:px-8">
                                <Card title={t('company_page.organization.cards.team_plan')} index={2} icon={Target} />
                                <Card title={t('company_page.organization.cards.team_fin')} index={3} icon={Users} />
                                <Card title={t('company_page.organization.cards.team_gen')} index={4} icon={Settings} />
                            </div>
                        </div>

                        {/* 2. R&D & Sales Division */}
                        <div className="flex flex-col items-center relative">
                            <div className="hidden md:block h-8 w-px bg-gray-300 mb-0"></div>

                            <Card title={t('company_page.organization.cards.div_rnd')} type="division" icon={PenTool} index={5} />

                            <div className="h-8 w-px bg-gray-300 mt-0"></div>

                            <div className="w-full space-y-3 px-4 md:px-8">
                                <Card title={t('company_page.organization.cards.team_dom')} index={6} icon={Briefcase} />
                                <Card title={t('company_page.organization.cards.team_ovs')} index={7} icon={Globe} />
                                <Card title={t('company_page.organization.cards.team_rnd')} index={8} icon={Cpu} />
                                <Card title={t('company_page.organization.cards.team_des')} index={9} icon={PenTool} />
                            </div>
                        </div>

                        {/* 3. Production Division */}
                        <div className="flex flex-col items-center relative">
                            <div className="hidden md:block h-8 w-px bg-gray-300 mb-0"></div>

                            <Card title={t('company_page.organization.cards.div_prod')} type="division" icon={Wrench} index={10} />

                            <div className="h-8 w-px bg-gray-300 mt-0"></div>

                            <div className="w-full space-y-3 px-4 md:px-8">
                                <Card title={t('company_page.organization.cards.team_pm')} index={11} icon={Settings} />
                                <Card title={t('company_page.organization.cards.team_mfg1')} index={12} icon={Wrench} />
                                <Card title={t('company_page.organization.cards.team_mfg2')} index={13} icon={Wrench} />
                                <Card title={t('company_page.organization.cards.team_qc')} index={14} icon={ShieldCheck} />
                                <Card title={t('company_page.organization.cards.team_cs')} index={15} icon={Headphones} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
