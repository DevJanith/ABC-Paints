import type { Product } from '../services/api'; // Import type from services
import { Maximize2 } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import { getLocalizedValue } from '../utils/language';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { i18n } = useTranslation();

    // Resolve localized content
    const name = getLocalizedValue(product, 'product_name', i18n.language);
    const description = getLocalizedValue(product, 'description', i18n.language);
    const category = getLocalizedValue(product, 'category', i18n.language);
    // const usage = getLocalizedValue(product, 'usage_area', i18n.language); // Unused for now

    return (
        <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                    src={product.image_url}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${product.product_owner === 'ABC'
                        ? 'bg-secondary text-gray-900'
                        : 'bg-white text-gray-600'
                        }`}>
                        {product.product_owner === 'ABC' ? 'ABC Exclusive' : product.brand_name}
                    </span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                    <button className="p-2 bg-white rounded-full hover:bg-secondary transition-colors" title="View Details">
                        <Maximize2 size={18} className="text-gray-900" />
                    </button>
                </div>
            </div>

            <div className="p-5 flex-grow flex flex-col">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">{category}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">{description}</p>

                <div className="mt-auto border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between items-center text-xs text-gray-500">
                    <span>{product.coverage}</span>
                    <span>{product.packaging}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
