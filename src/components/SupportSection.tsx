
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export const SupportSection = () => {
    return (
        <section className="relative py-24 bg-gray-100 overflow-hidden">
            {/* Background Image with blur */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-30 blur-sm"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80)' }} // Office background
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center bg-white/80 backdrop-blur-md p-12 rounded-lg shadow-sm border border-white/50">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            CUSTOMER SUPPORT <span className="text-accent">.</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light">
                            궁금한 점이 있으신가요?
                            <br />
                            <span className="text-base mt-2 block opacity-70">언제든지 문의해 주시면 친절히 답변 드리겠습니다.</span>
                        </p>
                    </motion.div>

                    <motion.button
                        className="mt-8 md:mt-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-lg group"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Plus size={32} className="group-hover:rotate-90 transition-transform duration-300" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};
