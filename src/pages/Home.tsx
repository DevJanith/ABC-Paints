import { ArrowRight, Shield, Droplets, PenTool, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Home = () => {
    const { t } = useTranslation();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex flex-col">
            <SEO
                title={t('seo.home_title')}
                description={t('seo.default_desc')}
            />
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {t('home.hero.title1')}
                        </span>
                        <span className="block text-secondary mt-2">{t('home.hero.title2')}</span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
                    >
                        {t('home.hero.subtitle')}
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Link to="/products" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-gray-900 font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center">
                            {t('home.hero.cta_products')} <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center justify-center">
                            {t('home.hero.cta_quote')}
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Shield className="w-10 h-10 text-secondary" />}
                            title={t('home.features.waterproofing.title')}
                            description={t('home.features.waterproofing.desc')}
                        />
                        <FeatureCard
                            icon={<Droplets className="w-10 h-10 text-brand-blue" />}
                            title={t('home.features.paints.title')}
                            description={t('home.features.paints.desc')}
                        />
                        <FeatureCard
                            icon={<PenTool className="w-10 h-10 text-brand-red" />}
                            title={t('home.features.service.title')}
                            description={t('home.features.service.desc')}
                        />
                        <FeatureCard
                            icon={<LayoutGrid className="w-10 h-10 text-green-500" />}
                            title={t('home.features.range.title')}
                            description={t('home.features.range.desc')}
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 dark:text-white">{t('home.cta_section.title')}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">{t('home.cta_section.desc')}</p>
                    <Link to="/calculator" className="inline-block px-8 py-3 bg-primary dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg hover:opacity-90 transition-opacity">
                        {t('home.cta_section.btn')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
);

export default Home;
