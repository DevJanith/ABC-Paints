import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../../config/site';

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
                            src="/logo.png"
                            alt="ABC Paints - Health Paint Expert"
                            className="h-10 sm:h-12 w-auto mb-4 object-contain"
                        // className="h-8 sm:h-12 w-auto object-contain dark:brightness-0 dark:invert transition-all"
                        />
                        <p className="text-gray-400 text-sm">
                            {t('footer.about_desc')}
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors"><Facebook size={20} /></a>
                            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors"><Instagram size={20} /></a>
                            {/* SVG for TikTok since Lucide doesn't have it built-in */}
                            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-8-8H7v15a4 4 0 0 1 0-8z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-200">{t('footer.quick_links')}</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Waterproofing services</a></li>
                            <li><a href="#" className="hover:text-white">Titanium Floor</a></li>
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
                                <span>{siteConfig.contact.address}</span>
                            </li>
                            <li className="flex items-start">
                                <Phone size={18} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
                                <div>
                                    {siteConfig.contact.phones.map((phone, i) => (
                                        <div key={i} className="mb-1 last:mb-0">
                                            <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors block">{phone}</a>
                                        </div>
                                    ))}
                                </div>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-green-500 flex-shrink-0">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                <a href={`https://wa.me/94${siteConfig.contact.whatsapp.substring(1)}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{siteConfig.contact.whatsapp}</a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 text-secondary flex-shrink-0" />
                                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a>
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
