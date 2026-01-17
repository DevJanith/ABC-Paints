import axios from 'axios';

// Configuration
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

export interface Product {
    product_id: string;
    product_name: string;
    category: string;
    description: string;
    coverage: string;
    packaging: string;
    usage_area: string;
    product_owner: 'ABC' | 'OTHER';
    brand_name: string;
    image_url: string;
    is_active: boolean;
    price?: number;
    // Dynamic localized fields
    [key: string]: any;
}

export interface Seller {
    id: string;
    name: string;
    type: 'official' | 'retailer';
    address: string;
    phone: string;
    city: string;
    latitude: number;
    longitude: number;
    google_map_url: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
    // Mock data (Commented out for production as requested)
    /*
    if (SHEET_ID === 'YOUR_GOOGLE_SHEET_ID') {
        return [
            {
                product_id: 'P001',
                product_name: 'ABC Roof Seal Pro',
                category: 'Waterproofing',
                description: 'High performance elastomeric roof coating.',
                coverage: '45-55 sq.ft/l',
                packaging: '4L, 10L, 20L',
                usage_area: 'Roof',
                product_owner: 'ABC',
                brand_name: 'ABC Paints',
                image_url: 'https://placehold.co/600x400/1a1a1a/FFF?text=Roof+Seal',
                is_active: true,
                price: 15000
            },
            {
                product_id: 'P002',
                product_name: 'ABC Wall Guard',
                category: 'Exterior Paint',
                description: 'Weather resistant exterior emulsion.',
                coverage: '60 sq.ft/l',
                packaging: '4L, 10L',
                usage_area: 'Exterior Walls',
                product_owner: 'ABC',
                brand_name: 'ABC Paints',
                image_url: 'https://placehold.co/600x400/f5a623/000?text=Wall+Guard',
                is_active: true,
                price: 8500
            },
            {
                product_id: 'P003',
                product_name: 'Dulux Weathershield',
                category: 'Exterior Paint',
                description: 'Premium exterior paint from Dulux.',
                coverage: '55 sq.ft/l',
                packaging: '1L, 4L, 10L',
                usage_area: 'Exterior Walls',
                product_owner: 'OTHER',
                brand_name: 'Dulux',
                image_url: 'https://placehold.co/600x400/003366/FFF?text=Dulux',
                is_active: true,
                price: 12000
            }
        ];
    }
    */

    try {
        const response = await axios.get(`https://docs.google.com/spreadsheets/u/0/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Products`);
        const csvText = response.data;
        const lines = csvText.split('\n');
        const headers = lines[0].split(',').map((h: string) => h.replace(/"/g, '').trim());

        const products: Product[] = lines.slice(1).map((line: string) => {
            const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
            const entry: any = {};

            headers.forEach((header: string, index: number) => {
                let val = values[index] ? values[index].replace(/^"|"$/g, '') : '';
                entry[header] = val;
            });

            return {
                ...entry,
                is_active: entry.is_active === 'TRUE' || entry.is_active === 'true',
                price: entry.price ? parseFloat(entry.price) : undefined
            } as Product;
        });

        return products.filter(p => p.is_active);
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const fetchSellers = async (): Promise<Seller[]> => {
    try {
        const response = await axios.get(`https://docs.google.com/spreadsheets/u/0/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Locations`);
        const csvText = response.data;
        const lines = csvText.split('\n');
        const headers = lines[0].split(',').map((h: string) => h.replace(/"/g, '').trim());

        const sellers: Seller[] = lines.slice(1).map((line: string) => {
            const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
            const entry: any = {};

            headers.forEach((header: string, index: number) => {
                let val = values[index] ? values[index].replace(/^"|"$/g, '') : '';
                entry[header] = val;
            });

            return {
                id: entry.id,
                name: entry.name,
                type: entry.type as 'official' | 'retailer',
                address: entry.address,
                phone: entry.phone,
                city: entry.city,
                latitude: parseFloat(entry.latitude),
                longitude: parseFloat(entry.longitude),
                google_map_url: entry.google_map_url
            };
        });

        // Filter out invalid rows (e.g. missing lat/long)
        return sellers.filter(s => !isNaN(s.latitude) && !isNaN(s.longitude));
    } catch (error) {
        console.error('Error fetching sellers:', error);
        return [];
    }
};

export const submitContractorForm = async (data: any) => {
    /*
    if (APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_WEB_APP_URL') {
        console.log('Mock submission:', data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: true };
    }
    */

    // Use fetch with text/plain to avoid CORS Preflight (OPTIONS request)
    return fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({ type: 'CONTRACTOR', ...data })
    });
};

export const submitContactForm = async (data: any) => {
    /*
    if (APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_WEB_APP_URL') {
        console.log('Mock contact submission:', data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: true };
    }
    */

    // Use fetch with text/plain to avoid CORS Preflight (OPTIONS request)
    return fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({ type: 'CONTACT', ...data })
    });
};
