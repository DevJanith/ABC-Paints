import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const partners = [
    { id: 1, name: 'Maliban', logo: '/images/partners/partner_logo_1.png' },
    { id: 2, name: 'Dialog', logo: '/images/partners/partner_logo_2.png' },
    { id: 3, name: 'Wonder Pak', logo: '/images/partners/partner_logo_3.png' },
    // { id: 4, name: 'SteelCore', logo: '/images/partners/partner_logo_1.png' },
    // { id: 5, name: 'StudioArch', logo: '/images/partners/partner_logo_2.png' },
    // { id: 6, name: 'UrbanBuild', logo: '/images/partners/partner_logo_3.png' },
];

// Duplicate for seamless looping. Increase count if needed for very wide screens.
const duplicatedPartners = [...partners, ...partners, ...partners];

const TrustedPartners = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-white dark:bg-[#0a0a0a] border-y border-gray-100 dark:border-white/5 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-4 text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600"
                >
                    {t('home.trusted_partners.title')}
                </motion.h2>
            </div>

            <div className="relative flex items-center group">
                {/* Continuous marquee container */}
                <motion.div
                    className="flex shrink-0 gap-12 md:gap-24 items-center"
                    animate={{ x: ["0%", "-33.33%"] }} // Adjusted for tripling to ensure smoothness
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={`${partner.id}-${index}`}
                            className="group/card flex flex-col items-center justify-center transition-all duration-500 cursor-pointer px-8 py-6 rounded-2xl hover:bg-white dark:hover:bg-white/5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)] hover:-translate-y-1.5 border border-transparent hover:border-gray-100 dark:hover:border-white/10"
                        >
                            <img
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                className="h-12 md:h-16 w-auto object-contain brightness-110 mb-2 transition-transform duration-500 group-hover/card:scale-105"
                                loading="lazy"
                            />
                            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                                {partner.name}
                            </span>
                            {/* <div
                            key={`${partner.id}-${index}`}
                            className="flex flex-col items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer px-6"
                        >
                            <img
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                className="h-12 md:h-16 w-auto object-contain dark:invert brightness-110 mb-2"
                                loading="lazy"
                            />
                            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {partner.name}
                            </span>
                        </div> */}
                        </div>
                    ))}
                </motion.div>

                {/* Gradient masks for a premium feel */}
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .group:hover .flex {
                        animation-play-state: paused !important;
                    }
                `}} />
            </div>
        </section>
    );
};

export default TrustedPartners;
