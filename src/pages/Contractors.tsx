import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitContractorForm } from '../services/api';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

interface ContractorData {
    fullName: string;
    companyName: string;
    phone: string;
    location: string;
    workType: string;
}

const Contractors = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContractorData>();
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (data: ContractorData) => {
        setSubmitting(true);
        setError('');
        try {
            await submitContractorForm(data);
            setSuccess(true);
            reset();
        } catch (err) {
            setError('Failed to submit. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <SEO
                title={t('seo.contractors_title')}
                description="Join our network of professional contractors and get exclusive benefits."
            />
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4 dark:text-white">{t('seo.contractors_title')}</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Join our network of professional contractors. Get access to exclusive discounts, training, and job opportunities.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                    {success ? (
                        <div className="text-center py-10">
                            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Registration Successful!</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Thank you for registering. Our team will verify your details and contact you shortly.
                            </p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                            >
                                Register Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {error && (
                                <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center">
                                    <AlertCircle size={20} className="mr-2" />
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                                    <input
                                        {...register('fullName', { required: 'Name is required' })}
                                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <span className="text-xs text-red-500">{errors.fullName.message}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
                                    <input
                                        {...register('companyName')}
                                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        placeholder="ABC Constructions (Optional)"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                                    <input
                                        {...register('phone', { required: 'Phone is required', pattern: { value: /^[+0-9- ]+$/, message: 'Invalid phone' } })}
                                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        placeholder="+94 77 123 4567"
                                    />
                                    {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location / Base</label>
                                    <input
                                        {...register('location', { required: 'Location is required' })}
                                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        placeholder="Colombo, Kandy, etc."
                                    />
                                    {errors.location && <span className="text-xs text-red-500">{errors.location.message}</span>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Work Specialization</label>
                                <select
                                    {...register('workType', { required: 'Please select a specialization' })}
                                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    <option value="">Select Work Type</option>
                                    <option value="Waterproofing">Waterproofing</option>
                                    <option value="Painting">Painting (Residential/Commercial)</option>
                                    <option value="Construction">General Construction</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.workType && <span className="text-xs text-red-500">{errors.workType.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-3 bg-secondary text-gray-900 font-bold rounded-lg hover:bg-secondary-light transition-colors flex justify-center items-center"
                            >
                                {submitting ? <Loader2 className="animate-spin mr-2" /> : null}
                                {submitting ? 'Submitting...' : 'Register Now'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contractors;
