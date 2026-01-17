import { Shield, Users, History, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto px-4 py-12">
            <SEO
                title={t('nav.about')}
                description={t('footer.about_desc')}
            />
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-6 dark:text-white">{t('nav.about')}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    We are Sri Lanka's leading provider of advanced waterproofing solutions and premium quality paints.
                    With over 15 years of excellence, we protect and beautify your structures.
                </p>
            </div>

            {/* Stats/Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <History className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 dark:text-white">15+ Years</h3>
                    <p className="text-gray-500 dark:text-gray-400">Industry Experience</p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 dark:text-white">10 Year Warranty</h3>
                    <p className="text-gray-500 dark:text-gray-400">On Waterproofing</p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 dark:text-white">5000+</h3>
                    <p className="text-gray-500 dark:text-gray-400">Happy Customers</p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <Trophy className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Award Winning</h3>
                    <p className="text-gray-500 dark:text-gray-400"> Service Quality</p>
                </div>
            </div>

            {/* Story Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="bg-gray-200 h-96 rounded-2xl overflow-hidden relative">
                    {/* Placeholder for About Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        [Image: Warehouse or Team]
                    </div>
                    <img src="https://placehold.co/800x600/1a1a1a/FFF?text=Our+Story" alt="Our Story" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Story</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <p>
                            Founded in 2010, ABC Paints began with a simple mission: to provide Sri Lankan homeowners and builders with
                            waterproofing solutions that actually last in our tropical climate.
                        </p>
                        <p>
                            Starting as a small specialized contractor, we grew into a full-scale manufacturer and distributor.
                            Today, we produce our own line of high-performance chemical coatings tailored for local conditions,
                            while partnering with global giants to offer the widest range of paints.
                        </p>
                        <p>
                            Our commitment to quality goes beyond products. We train hundreds of contractors annually,
                            ensuring that great products are matched with expert application.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
