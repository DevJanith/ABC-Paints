import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand & Bio */}
                    <div className="col-span-1 md:col-span-1">
                        <img
                            src="/logo-white.png"
                            alt="ABC Paints"
                            className="h-10 w-auto mb-4 object-contain"
                        />
                        <p className="text-gray-400 text-sm">
                            {t('footer.about_desc')}
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-200">{t('footer.quick_links')}</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Waterproofing services</a></li>
                            <li><a href="#" className="hover:text-white">Roof Sealing</a></li>
                            <li><a href="#" className="hover:text-white">Wall Painting</a></li>
                            <li><a href="#" className="hover:text-white">Construction Consultation</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-lg font-semibold mb-4 text-gray-200">{t('footer.contact_info')}</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
                                <span>123 Main Street, Colombo, Sri Lanka</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 text-secondary flex-shrink-0" />
                                <span>+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 text-secondary flex-shrink-0" />
                                <span>info@abcpaints.lk</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} ABC Paints. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
