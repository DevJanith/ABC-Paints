import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const ComingSoon = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-gray-900">
            <SEO
                title={t('coming_soon.title')}
                description={t('coming_soon.desc')}
            />

            {/* Logo */}
            {/* <img 
                src="/logo.png" 
                alt="ABC Paints" 
                className="h-20 sm:h-24 w-auto object-contain dark:brightness-0 dark:invert mb-8 transition-all"
            /> */}

            {/* Content */}
            <div className="text-center max-w-lg mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('coming_soon.title')}
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                    {t('coming_soon.desc')}
                </p>

                {/* Back to Home Button */}
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 dark:bg-secondary dark:text-gray-900 dark:hover:bg-secondary-light transition-colors shadow-sm"
                >
                    {t('coming_soon.btn')}
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;
