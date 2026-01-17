import Calculator from '../components/Calculator';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const CalculatorPage = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto px-4 py-12">
            <SEO
                title={t('seo.calculator_title')}
                description="Estimate material quantity and cost for your construction project."
            />
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">{t('seo.calculator_title')}</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Planning a new project? Use our calculator to get an idea of the material quantity and cost required for your specific needs.
                </p>
            </div>
            <Calculator />
        </div>
    );
};

export default CalculatorPage;
