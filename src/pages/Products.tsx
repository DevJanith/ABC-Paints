import ProductGrid from '../components/ProductGrid';

import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Products = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 py-8">
            <SEO
                title={t('seo.products_title')}
                description={t('seo.products_desc')}
            />
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('seo.products_title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    {t('seo.products_desc')}
                </p>
            </div>
            <ProductGrid />
        </div>
    );
};

export default Products;
