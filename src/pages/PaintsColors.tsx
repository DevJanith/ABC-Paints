const PaintsColors = () => {
    const colors = [
        { name: "Royal Gold", hex: "#FFD700" },
        { name: "Ocean Blue", hex: "#0077BE" },
        { name: "Crimson Red", hex: "#DC143C" },
        { name: "Forest Green", hex: "#228B22" },
        { name: "Slate Grey", hex: "#708090" },
        { name: "Ivory White", hex: "#FFFFF0" },
        { name: "Midnight Black", hex: "#191970" },
        { name: "Burnt Orange", hex: "#CC5500" },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">Paints & Colors</h1>
                <p className="text-gray-600 dark:text-gray-400">Discover our vibrant color palette.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {colors.map((color) => (
                    <div key={color.name} className="group cursor-pointer">
                        <div
                            className="h-32 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-transform transform group-hover:scale-105"
                            style={{ backgroundColor: color.hex }}
                        />
                        <div className="mt-2 text-center">
                            <p className="font-medium text-gray-900 dark:text-white">{color.name}</p>
                            <p className="text-xs text-gray-500">{color.hex}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-sm text-gray-500">Note: Actual colors may vary due to screen resolution. Visit our showroom for physical swatches.</p>
            </div>
        </div>
    );
};

export default PaintsColors;
