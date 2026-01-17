import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../services/api';
import { Calculator as CalcIcon, RefreshCw } from 'lucide-react';

const Calculator = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // Inputs
    const [areaType, setAreaType] = useState('ROOF');
    const [areaSize, setAreaSize] = useState<number>(0);
    const [selectedProductId, setSelectedProductId] = useState<string>('');
    const [coats, setCoats] = useState<number>(2);

    // Results
    const [result, setResult] = useState<{ quantity: number, cost: number, packaging: string } | null>(null);

    useEffect(() => {
        fetchProducts().then(data => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    const handleCalculate = () => {
        const product = products.find(p => p.product_id === selectedProductId);
        if (!product || areaSize <= 0) return;

        // Parse coverage (e.g. "45-55 sq.ft/l" -> avg 50)
        // This is a naive parser for the demo. Real world needs structured data safely.
        let coverageVal = 50;
        const coverageMatch = product.coverage.match(/(\d+)/);
        if (coverageMatch) {
            coverageVal = parseInt(coverageMatch[0]);
        }

        // Logic: Total Area = Area * Coats
        // Liters needed = Total Area / Coverage
        const totalArea = areaSize * coats;
        const litersNeeded = totalArea / coverageVal;

        // Cost
        const price = product.price || 0;
        // Assuming price is per Unit (e.g. 4L or 10L pack). 
        // This logic is complex without standardized units. 
        // For demo, we assume price is per Liter or Unit and just show an estimate.
        // Let's assume price is per Liter for simplicity in this MVP.
        const estimatedCost = litersNeeded * (price / 4); // simplistic assumption: price is for 4L pack usually? 
        // improved: if we don't know unit, just say "Contact for price" or show quantity.
        // Let's rely on quantity mainly.

        setResult({
            quantity: Math.ceil(litersNeeded),
            cost: Math.ceil(estimatedCost),
            packaging: product.packaging
        });
    };

    const selectedProduct = products.find(p => p.product_id === selectedProductId);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-4xl mx-auto border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-6">
                <CalcIcon className="text-secondary mr-3" size={32} />
                <h2 className="text-2xl font-bold dark:text-white">Material Cost Estimator</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Form */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Area Type</label>
                        <select
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            value={areaType}
                            onChange={(e) => setAreaType(e.target.value)}
                        >
                            <option value="ROOF">Roof Waterproofing</option>
                            <option value="WALL">Wall Painting</option>
                            <option value="BATHROOM">Bathroom Waterproofing</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Area Size (sq.ft)</label>
                        <input
                            type="number"
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            value={areaSize}
                            onChange={(e) => setAreaSize(parseFloat(e.target.value))}
                            placeholder="e.g. 500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product</label>
                        <select
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            value={selectedProductId}
                            onChange={(e) => setSelectedProductId(e.target.value)}
                            disabled={loading}
                        >
                            <option value="">Select a product</option>
                            {products.filter(p => p.usage_area.toUpperCase().includes(areaType) || p.usage_area === 'Any').map(p => (
                                <option key={p.product_id} value={p.product_id}>{p.product_name}</option>
                            ))}
                            {/* If empty, show all or fallback */}
                            {products.length > 0 && products.map(p => (
                                <option key={'all-' + p.product_id} value={p.product_id}>{p.product_name} (All)</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Number of Coats</label>
                        <div className="flex items-center space-x-4">
                            <input
                                type="range"
                                min="1"
                                max="4"
                                value={coats}
                                onChange={(e) => setCoats(int(e.target.value))}
                                className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <span className="font-bold text-lg dark:text-white">{coats}</span>
                        </div>
                    </div>

                    <button
                        onClick={handleCalculate}
                        className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors flex items-center justify-center mt-4"
                        disabled={!selectedProductId || areaSize <= 0}
                    >
                        Calculate <RefreshCw size={18} className="ml-2" />
                    </button>
                </div>

                {/* Results */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 flex flex-col justify-center">
                    {!result ? (
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <p>Enter details to see estimate.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="text-center">
                                <p className="text-sm text-gray-500 uppercase tracking-wide">Estimated Quantity</p>
                                <p className="text-4xl font-bold text-secondary">{result.quantity} <span className="text-xl text-gray-400">Liters</span></p>
                                <p className="text-xs text-gray-400 mt-1">Based on {selectedProduct?.packaging} packaging</p>
                            </div>

                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
                                <p className="text-sm text-gray-500 uppercase tracking-wide">Estimated Cost</p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {result.cost > 0 ? `LKR ${result.cost.toLocaleString()}` : 'N/A'}
                                </p>
                                <p className="text-xs text-red-500 mt-2">* This is a rough estimate only. Prices may vary.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Helper
function int(val: string) { return parseInt(val, 10); }

export default Calculator;
