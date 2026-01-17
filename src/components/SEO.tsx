import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEO = ({ title, description, image = '/hero.png', url, type = 'website' }: SEOProps) => {
    const { i18n } = useTranslation();
    const siteUrl = 'https://abcpaints.lk'; // Replace with actual domain
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
    const siteTitle = 'ABC Paints | Waterproofing & Premium Paints in Sri Lanka';

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | ABC Paints` : siteTitle}</title>
            <meta name="description" content={description} />
            <html lang={i18n.language} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content="ABC Paints" />
            <meta property="og:locale" content={i18n.language === 'en' ? 'en_US' : 'si_LK'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />

            {/* Canonical */}
            <link rel="canonical" href={fullUrl} />
        </Helmet>
    );
};

export default SEO;
