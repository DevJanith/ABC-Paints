import { MapPin } from 'lucide-react';
import { siteConfig } from '../config/site';

const Locations = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">Our Locations</h1>
                <p className="text-gray-600 dark:text-gray-400">Find a store near you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Main Shop */}
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                    <div className="h-64 bg-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585971665!2d79.80876117978283!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1645607000000!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <MapPin className="text-secondary mr-2" />
                            <h2 className="text-xl font-bold dark:text-white">Colombo Main Showroom</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 pl-8">{siteConfig.contact.address}</p>
                        <p className="text-sm font-semibold text-primary dark:text-gray-300 pl-8">Opening Hours</p>
                        <p className="text-sm text-gray-500 pl-8">Mon - Sun: 8:00 AM - 6:00 PM</p>
                    </div>
                </div>

                {/* Another Shop */}
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                    <div className="h-64 bg-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63321.0188669785!2d80.60943939626466!3d7.294544026388915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1645607000000!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <MapPin className="text-brand-red mr-2" />
                            <h2 className="text-xl font-bold dark:text-white">Kandy Branch</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 pl-8">45 Temple Road, Kandy</p>
                        <p className="text-sm font-semibold text-primary dark:text-gray-300 pl-8">Opening Hours</p>
                        <p className="text-sm text-gray-500 pl-8">Mon - Sat: 9:00 AM - 5:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;
