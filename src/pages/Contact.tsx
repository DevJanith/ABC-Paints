import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitContactForm } from '../services/api';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

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
                <div className="space-y-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full mr-4">
                                <Phone className="text-brand-blue" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1 dark:text-white">Call Us</h3>
                                <p className="text-gray-600 dark:text-gray-400">Mon-Fri from 8am to 5pm</p>
                                <a href="tel:+94112345678" className="text-lg font-semibold text-gray-900 dark:text-gray-200 block mt-2 hover:text-secondary">+94 11 234 5678</a>
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
                                <p className="text-gray-600 dark:text-gray-400">Our team will respond within 24 hours</p>
                                <a href="mailto:info@abcpaints.lk" className="text-lg font-semibold text-gray-900 dark:text-gray-200 block mt-2 hover:text-secondary">info@abcpaints.lk</a>
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
                                <p className="text-lg font-semibold text-gray-900 dark:text-gray-200 block mt-2">123 Main Street, Colombo 03</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    {success ? (
                        <div className="text-center py-20">
                            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                            <button onClick={() => setSuccess(false)} className="text-secondary hover:underline mt-4">Send another message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                                <input {...register("name", { required: true })} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                                <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="email@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                                <input {...register("phone", { required: true })} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Phone" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea {...register("message", { required: true })} rows={4} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="How can we help you?" />
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
