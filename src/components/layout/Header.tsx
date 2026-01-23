import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import clsx from 'clsx';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'si' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);
    };

    const navItems = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.products'), path: '/products' },
        { name: t('nav.sellers'), path: '/sellers' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.calculator'), path: '/calculator' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    const LinkClass = ({ isActive }: { isActive: boolean }) =>
        clsx(
            "px-3 py-2 rounded-md text-sm font-medium transition-colors",
            isActive
                ? "text-primary dark:text-secondary font-bold bg-gray-100 dark:bg-gray-800"
                : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
        );

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex-shrink-0 flex items-center">
                            <img
                                src={isDark ? "/logo-white.png" : "/logo.png"}
                                alt="ABC Paints - Health Paint Expert"
                                className="h-10 sm:h-12 w-auto object-contain"
                            />
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        {navItems.map((item) => (
                            <NavLink key={item.path} to={item.path} className={LinkClass}>
                                {item.name}
                            </NavLink>
                        ))}

                        <div className="flex items-center space-x-2 ml-4 border-l pl-4 border-gray-200 dark:border-gray-700">
                            <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300" aria-label="Toggle Language">
                                <div className="flex items-center space-x-1">
                                    <Globe size={20} />
                                    <span className="text-sm font-semibold">{i18n.language === 'en' ? 'SI' : 'EN'}</span>
                                </div>
                            </button>
                            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300" aria-label="Toggle Theme">
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden space-x-4">
                        <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                            <span className="text-sm font-bold">{i18n.language === 'en' ? 'SI' : 'EN'}</span>
                        </button>
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-white max-w-xs transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => clsx(
                                    "block px-3 py-2 rounded-md text-base font-medium",
                                    isActive
                                        ? "text-primary dark:text-secondary bg-gray-100 dark:bg-gray-800"
                                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
