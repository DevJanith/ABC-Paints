import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations (we'll implement these later or inline simple ones for now)
const resources = {
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "about": "About Us",
                "products": "Products",
                "sellers": "Where to Buy",
                "paints": "Paints & Colors",
                "services": "Services",
                "calculator": "Cost Calculator",
                "contractors": "For Contractors",
                "contact": "Contact Us",
                "locations": "Locations"
            },
            "home": {
                "hero": {
                    "title1": "Advanced Waterproofing",
                    "title2": "& Premium Paints",
                    "subtitle": "Engineered for durability. Designed for beauty. The #1 choice for construction professionals in Sri Lanka.",
                    "cta_products": "Explore Products",
                    "cta_quote": "Get a Quote"
                },
                "features": {
                    "waterproofing": {
                        "title": "Waterproofing Experts",
                        "desc": "Specialized solutions for roofs, bathrooms, and walls that last for decades."
                    },
                    "paints": {
                        "title": "Premium Paints",
                        "desc": "Vibrant, long-lasting colors locally manufactured and international brands."
                    },
                    "service": {
                        "title": "Professional Service",
                        "desc": "Expert application services by certified contractors."
                    },
                    "range": {
                        "title": "Wide Range",
                        "desc": "From raw materials to finishing touches, we have it all."
                    }
                },
                "cta_section": {
                    "title": "Planning a Project?",
                    "desc": "Use our advanced cost calculator to estimate materials and budget for your next construction or renovation project.",
                    "btn": "Try Cost Calculator"
                },
                "trusted_partners": {
                    "title": "Our Trusted Partners"
                }
            },
            "sellers": {
                "title": "Where to Buy",
                "subtitle": "Find an official store or authorized retailer near you.",
                "no_locations": "No locations found.",
                "official": "Official Store",
                "retailer": "Authorized Retailer"
            },
            "contact": {
                "title": "Contact Us",
                "subtitle": "We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            },
            "common": {
                "loading": "Loading...",
                "error": "Something went wrong",
                "submit": "Submit",
                "submitting": "Submitting...",
                "required": "Required",
                "success": "Success!",
                "get_directions": "Get Directions"
            },
            "footer": {
                "about_desc": "Your trusted partner for specialized waterproofing solutions and premium paints in Sri Lanka.",
                "quick_links": "Quick Links",
                "contact_info": "Contact Info",
                "rights": "All rights reserved."
            },
            "seo": {
                "default_title": "Waterproofing & Premium Paints in Sri Lanka",
                "default_desc": "ABC Paints offers high-quality waterproofing solutions and premium paints for residential and commercial projects in Sri Lanka.",
                "home_title": "Home",
                "products_title": "Our Products",
                "products_desc": "Browse our range of waterproofing materials, exterior and interior paints.",
                "services_title": "Our Services",
                "calculator_title": "Cost Calculator",
                "contractors_title": "Contractor Registration",
                "contact_title": "Contact Us",
                "sellers_title": "Where to Buy"
            },
            "coming_soon": {
                "title": "Coming Soon",
                "desc": "This page is currently under development. We're working hard to bring you something amazing!",
                "btn": "Return to Home"
            },
            "not_found": {
                "title": "Page Not Found",
                "desc": "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
                "btn": "Back to Home"
            }
        }
    },
    si: {
        translation: {
            "nav": {
                "home": "මුල් පිටුව",
                "about": "අප ගැන",
                "products": "නිෂ්පාදන",
                "sellers": "මිලදී ගත හැකි ස්ථාන",
                "paints": "වර්ණ",
                "services": "සේවාවන්",
                "calculator": "පිරිවැය ගණක යන්ත්‍රය",
                "contractors": "කොන්ත්‍රාත්කරුවන් සඳහා",
                "contact": "අමතන්න",
                "locations": "ස්ථාන"
            },
            "home": {
                "hero": {
                    "title1": "උසස් ජල ආරක්ෂණය",
                    "title2": "සහ ප්‍රිමියම් තීන්ත",
                    "subtitle": "කල්පැවැත්ම සඳහා නිපදවා ඇත. අලංකාරය වෙනුවෙන් නිර්මාණය කර ඇත. ශ්‍රී ලංකාවේ ඉදිකිරීම් ශිල්පීන්ගේ අංක 1 තේරීම.",
                    "cta_products": "නිෂ්පාදන බලන්න",
                    "cta_quote": "මිල ගණන් ලබාගන්න"
                },
                "features": {
                    "waterproofing": {
                        "title": "ජල ආරක්ෂණ විශේෂඥයින්",
                        "desc": "වහලවල්, නානකාමර සහ බිත්ති සඳහා දශක ගණනක් පවතින විසඳුම්."
                    },
                    "paints": {
                        "title": "ප්‍රිමියම් තීන්ත",
                        "desc": "දේශීයව නිෂ්පාදිත සහ ජාත්‍යන්තර සන්නාමවල විචිත්‍රවත්, කල් පවතින වර්ණ."
                    },
                    "service": {
                        "title": "වෘත්තීය සේවාව",
                        "desc": "සහතික කළ කොන්ත්‍රාත්කරුවන් විසින් සපයනු ලබන විශේෂඥ සේවාවන්."
                    },
                    "range": {
                        "title": "පුළුල් පරාසය",
                        "desc": "අමුද්‍රව්‍යවල සිට අවසාන නිමාව දක්වා අප සතුව සියල්ල ඇත."
                    }
                },
                "cta_section": {
                    "title": "ව්‍යාපෘතියක් සැලසුම් කරනවාද?",
                    "desc": "ඔබගේ ඊළඟ ඉදිකිරීම් හෝ ප්‍රතිසංස්කරණ ව්‍යාපෘතිය සඳහා ද්‍රව්‍ය සහ අයවැය තක්සේරු කිරීමට අපගේ පිරිවැය ගණක යන්ත්‍රය භාවිතා කරන්න.",
                    "btn": "පිරිවැය ගණනය කරන්න"
                },
                "trusted_partners": {
                    "title": "අපගේ විශ්වාසවන්ත හවුල්කරුවන්"
                }
            },
            "sellers": {
                "title": "මිලදී ගත හැකි ස්ථාන",
                "subtitle": "ඔබට ආසන්නව පිහිටි නිල වෙළඳසැලක් හෝ බලයලත් අලෙවිකරුවෙකු සොයා ගන්න.",
                "no_locations": "ස්ථාන හමු නොවීය.",
                "official": "නිල වෙළඳසැල",
                "retailer": "බලයලත් අලෙවිකරු"
            },
            "contact": {
                "title": "අප අමතන්න",
                "subtitle": "අපව සම්බන්ධ කරගන්න. අපි ඔබට හැකි ඉක්මනින් ප්‍රතිචාර දක්වන්නෙමු."
            },
            "common": {
                "loading": "රැඳී සිටින්න...",
                "error": "දෝෂයක් සිදුවිය",
                "submit": "යොමු කරන්න",
                "submitting": "යොමු කරමින්...",
                "required": "අවශ්‍යයි",
                "success": "සාර්ථකයි!",
                "get_directions": "ගමන් මාර්ගය"
            },
            "footer": {
                "about_desc": "ශ්‍රී ලංකාවේ විශේෂිත ජල ආරක්ෂණ විසඳුම් සහ ප්‍රිමියම් තීන්ත සඳහා ඔබේ විශ්වාසවන්ත සහකරු.",
                "quick_links": "ක්ෂණික සබැඳි",
                "contact_info": "සම්බන්ධ වීමට",
                "rights": "සියලුම හිමිකම් ඇවිරිණි."
            },
            "seo": {
                "default_title": "ජල ආරක්ෂණය සහ තීන්ත - ශ්‍රී ලංකාව",
                "default_desc": "ABC Paints ශ්‍රී ලංකාවේ නිවාස සහ වාණිජ ව්‍යාපෘති සඳහා උසස් තත්ත්වයේ ජල ආරක්ෂණ විසඳුම් සහ තීන්ත පිරිනමයි.",
                "home_title": "මුල් පිටුව",
                "products_title": "අපගේ නිෂ්පාදන",
                "products_desc": "ජල ආරක්ෂණ ද්‍රව්‍ය, පිටත සහ අභ්‍යන්තර තීන්ත වර්ග පිරික්සන්න.",
                "services_title": "අපගේ සේවාවන්",
                "calculator_title": "පිරිවැය ගණක යන්ත්‍රය",
                "contractors_title": "කොන්ත්‍රාත්කරු ලියාපදිංචිය",
                "contact_title": "අප අමතන්න",
                "sellers_title": "මිලදී ගත හැකි ස්ථාන"
            },
            "coming_soon": {
                "title": "ඉක්මනින් බලාපොරොත්තු වන්න",
                "desc": "මෙම පිටුව දැනට සංවර්ධනය වෙමින් පවතී. අප ඔබට විශිෂ්ට යමක් ගෙන ඒමට මහන්සි වී වැඩ කරමින් සිටිමු!",
                "btn": "මුල් පිටුවට යන්න"
            },
            "not_found": {
                "title": "පිටුව හමු නොවීය",
                "desc": "ඔබ සොයන පිටුව ඉවත් කර තිබිය හැක, එහි නම වෙනස් කර ඇත, නැතහොත් තාවකාලිකව ලබා ගත නොහැක.",
                "btn": "මුල් පිටුවට යන්න"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        }
    });

i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
});

export default i18n;
