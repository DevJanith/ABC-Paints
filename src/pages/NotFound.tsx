import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-gray-900">
            <SEO
                title={t('not_found.title')}
                description={t('not_found.desc')}
            />

            {/* Huge 404 Metric */}
            <div className="text-9xl font-extrabold text-gray-200 dark:text-gray-800 mb-8 select-none">
                404
            </div>

            {/* Content */}
            <div className="text-center max-w-lg mx-auto -mt-16 relative z-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('not_found.title')}
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                    {t('not_found.desc')}
                </p>

                {/* Back to Home Button */}
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 dark:bg-secondary dark:text-gray-900 dark:hover:bg-secondary-light transition-colors shadow-sm"
                >
                    {t('not_found.btn')}
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
