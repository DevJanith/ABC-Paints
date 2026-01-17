import { useState, useEffect, useMemo } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../services/api';
import ProductCard from './ProductCard';
import { Filter, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProductGrid = () => {
    const { t } = useTranslation();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Filters
    const [filterOwner, setFilterOwner] = useState<'ALL' | 'ABC' | 'OTHER'>('ALL');
    const [filterCategory, setFilterCategory] = useState<string>('ALL');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError(t('common.error'));
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, [t]);

    const categories = useMemo(() => {
        const cats = new Set(products.map(p => p.category));
        return ['ALL', ...Array.from(cats)];
    }, [products]);

    const filteredProducts = products.filter(product => {
        const matchesOwner = filterOwner === 'ALL' || product.product_owner === filterOwner;
        const matchesCategory = filterCategory === 'ALL' || product.category === filterCategory;
        const matchesSearch = product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesOwner && matchesCategory && matchesSearch;
    });

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 py-10">
                <p>{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-light"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div>
            {/* Controls */}
            <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">

                    {/* Search */}
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300"><Filter size={16} className="inline mr-1" /> Type:</span>
                            <select
                                value={filterOwner}
                                onChange={(e) => setFilterOwner(e.target.value as any)}
                                className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-secondary"
                            >
                                <option value="ALL">All Brands</option>
                                <option value="ABC">ABC Exclusive</option>
                                <option value="OTHER">Other Brands</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-secondary"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>
                                        {cat === 'ALL' ? 'All Categories' : cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.product_id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50 dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
                    <p className="text-gray-500 dark:text-gray-400">No products found for your selection.</p>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
