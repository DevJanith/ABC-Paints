import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { fetchSellers } from '../services/api';
import type { Seller } from '../services/api';
import { MapPin, Phone, Navigation, Building2, Store } from 'lucide-react';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

// Fix for default marker icon in Leaflet with Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// Component to handle map view updates
function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

const Sellers = () => {
    const { t } = useTranslation();
    const [sellers, setSellers] = useState<Seller[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);
    const [mapCenter, setMapCenter] = useState<[number, number]>([7.8731, 80.7718]); // Default center (Sri Lanka)
    const [zoom, setZoom] = useState(7);

    useEffect(() => {
        const loadSellers = async () => {
            const data = await fetchSellers();
            setSellers(data);
            setLoading(false);
        };
        loadSellers();
    }, []);

    const handleSellerClick = (seller: Seller) => {
        setSelectedSeller(seller);
        setMapCenter([seller.latitude, seller.longitude]);
        setZoom(15);

        // Scroll map into view on mobile
        const mapElement = document.getElementById('map-container');
        if (mapElement && window.innerWidth < 768) {
            mapElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleGetDirections = (url: string) => {
        window.open(url, '_blank');
    };

    // Custom icons
    const officialIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const retailerIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50 dark:bg-gray-900">
            <SEO
                title={t('seo.sellers_title')}
                description={t('sellers.subtitle')}
            />
            <div className="container mx-auto px-4 h-[calc(100vh-120px)] flex flex-col md:flex-row gap-6">

                {/* List Section */}
                <div className="md:w-1/3 flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                        <h1 className="text-2xl font-bold dark:text-white mb-1">{t('sellers.title')}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('sellers.subtitle')}</p>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {sellers.length === 0 ? (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-10">{t('sellers.no_locations')}</p>
                        ) : (
                            sellers.map((seller) => (
                                <motion.div
                                    key={seller.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg cursor-pointer transition-all border ${selectedSeller?.id === seller.id
                                        ? 'border-secondary bg-secondary/5 dark:bg-secondary/10 shadow-md'
                                        : 'border-gray-200 dark:border-gray-700 hover:border-secondary hover:bg-gray-50 dark:hover:bg-gray-700'
                                        }`}
                                    onClick={() => handleSellerClick(seller)}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-gray-900 dark:text-white">{seller.name}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${seller.type === 'official'
                                            ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                            }`}>
                                            {seller.type === 'official' ? t('sellers.official') : t('sellers.retailer')}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                        <div className="flex items-start">
                                            <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>{seller.address}, {seller.city}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                                            <span>{seller.phone}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleGetDirections(seller.google_map_url);
                                        }}
                                        className="mt-3 w-full py-2 flex items-center justify-center text-sm font-medium text-secondary hover:bg-secondary/10 rounded-lg transition-colors"
                                    >
                                        <Navigation className="w-4 h-4 mr-2" />
                                        {t('common.get_directions')}
                                    </button>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>

                {/* Map Section */}
                <div id="map-container" className="md:w-2/3 h-[400px] md:h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                    <MapContainer
                        center={mapCenter}
                        zoom={zoom}
                        style={{ height: '100%', width: '100%' }}
                        scrollWheelZoom={true}
                    >
                        <ChangeView center={mapCenter} zoom={zoom} />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {sellers.map((seller) => (
                            <Marker
                                key={seller.id}
                                position={[seller.latitude, seller.longitude]}
                                icon={seller.type === 'official' ? officialIcon : retailerIcon}
                                eventHandlers={{
                                    click: () => handleSellerClick(seller),
                                }}
                            >
                                <Popup>
                                    <div className="p-2 min-w-[200px]">
                                        <h3 className="font-bold text-lg mb-1">{seller.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{seller.address}, {seller.city}</p>
                                        <div className="flex items-center gap-2 mb-2">
                                            {seller.type === 'official' ? <Building2 className="w-4 h-4 text-red-600" /> : <Store className="w-4 h-4 text-blue-600" />}
                                            <span className="text-sm font-medium capitalize">{seller.type === 'official' ? t('sellers.official') : t('sellers.retailer')}</span>
                                        </div>
                                        <button
                                            onClick={() => handleGetDirections(seller.google_map_url)}
                                            className="w-full py-2 bg-secondary text-gray-900 text-sm font-bold rounded hover:bg-secondary-light transition-colors"
                                        >
                                            {t('common.get_directions')}
                                        </button>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    {/* Map Legend */}
                    <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md z-[1000] text-xs">
                        <div className="flex items-center mb-2">
                            <span className="w-3 h-3 rounded-full bg-[#CB2B3E] mr-2"></span>
                            <span className="dark:text-white">{t('sellers.official')}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-[#2A81CB] mr-2"></span>
                            <span className="dark:text-white">{t('sellers.retailer')}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sellers;
