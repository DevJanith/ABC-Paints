import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitContactForm } from '../services/api';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { siteConfig } from '../config/site';

interface ContactData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const Contact = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, reset } = useForm<ContactData>();
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data: ContactData) => {
        setSubmitting(true);
        try {
            await submitContactForm(data);
            setSuccess(true);
            reset();
        } catch (err) {
            alert('Failed to send message. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <SEO
                title={t('seo.contact_title')}
                description={t('contact.subtitle')}
            />
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">{t('contact.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">{t('contact.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full mr-4">
                                <Phone className="text-brand-blue" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1 dark:text-white">Call Us</h3>
                                <p className="text-gray-600 dark:text-gray-400">Available during business hours</p>
                                <div className="mt-2 space-y-2">
                                    {siteConfig.contact.phones.map((phone, i) => (
                                        <a key={i} href={`tel:${phone}`} className="text-lg font-semibold text-gray-900 dark:text-gray-200 block hover:text-secondary">{phone}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                            <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1 dark:text-white">WhatsApp</h3>
                                <p className="text-gray-600 dark:text-gray-400">Chat with us instantly</p>
                                <a href={`https://wa.me/94${siteConfig.contact.whatsapp.substring(1)}`} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-900 dark:text-gray-200 block mt-2 hover:text-secondary">{siteConfig.contact.whatsapp}</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-full mr-4">
                                <Mail className="text-secondary" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1 dark:text-white">Email Us</h3>
                                <p className="text-gray-600 dark:text-gray-400">Our team will respond promptly</p>
                                <a href={`mailto:${siteConfig.contact.email}`} className="text-lg font-semibold text-gray-900 dark:text-gray-200 block mt-2 hover:text-secondary">{siteConfig.contact.email}</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                            <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-full mr-4">
                                <MapPin className="text-brand-red" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1 dark:text-white">Visit Us</h3>
                                <p className="text-gray-600 dark:text-gray-400">Sales Center & Showroom</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-gray-200 block mt-2">{siteConfig.contact.address}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold mb-4 dark:text-white">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue text-brand-blue transition-colors">
                                    <Facebook size={24} />
                                </a>
                                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-pink-50 dark:bg-pink-900/30 rounded-full hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 text-pink-600 transition-colors">
                                    <Instagram size={24} />
                                </a>
                                <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700/50 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-gray-800 dark:text-gray-200 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-8-8H7v15a4 4 0 0 1 0-8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 h-fit xl:sticky xl:top-24">
                    {success ? (
                        <div className="text-center py-20">
                            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                            <button onClick={() => setSuccess(false)} className="text-secondary hover:underline mt-4">Send another message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                                <input {...register("name", { required: true })} className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all dark:text-white" placeholder="Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all dark:text-white" placeholder="email@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                                <input {...register("phone", { required: true })} className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all dark:text-white" placeholder="Phone" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea {...register("message", { required: true })} rows={4} className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all dark:text-white resize-none" placeholder="How can we help you?" />
                            </div>
                            <button type="submit" disabled={submitting} className="w-full py-3 bg-secondary text-gray-900 font-bold rounded-lg hover:bg-secondary-light transition-colors flex justify-center items-center">
                                {submitting ? <Loader2 className="animate-spin mr-2" /> : <Send size={18} className="mr-2" />}
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
