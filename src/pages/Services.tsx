import { Droplets, Home, Building2, PaintBucket, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Services = () => {
    const { t } = useTranslation();
    const services = [
        {
            icon: <Droplets size={40} className="text-blue-500" />,
            title: "Roof Waterproofing",
            description: "Complete sealing solutions for concrete slabs and tiled roofs. 10-year warranty guaranteed."
        },
        {
            icon: <Home size={40} className="text-secondary" />,
            title: "Wall Painting",
            description: "Interior and exterior painting services using premium weather-resistant paints."
        },
        {
            icon: <Hammer size={40} className="text-gray-500" />,
            title: "Bathroom Waterproofing",
            description: "Specialized coating systems for bathrooms, balconies, and wet areas to prevent leakages."
        },
        {
            icon: <Building2 size={40} className="text-purple-500" />,
            title: "Industrial Flooring",
            description: "Epoxy and PU flooring solutions for factories, warehouses, and car parks."
        },
        {
            icon: <PaintBucket size={40} className="text-red-500" />,
            title: "Color Mixing",
            description: "Expert advice on color selection and matching for your home or office."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <SEO
                title={t('seo.services_title')}
                description="Professional waterproofing and painting services in Sri Lanka."
            />
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">{t('nav.services')}</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    More than just products. We offer professional application and consultation services to ensure your project performs perfectly.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1">
                        <div className="mb-6">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                        <Link to="/contact" className="text-secondary font-semibold hover:underline">Get a Quote →</Link>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 lg:p-12 text-center">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Are you a Contractor?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Join our certified applicator network and grow your business.</p>
                <Link to="/contractors" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors">
                    Register as Contractor
                </Link>
            </div>
        </div>
    );
};

export default Services;
