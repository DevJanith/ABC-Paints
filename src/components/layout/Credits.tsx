import { Mail, Phone, Github, Globe } from 'lucide-react';

const Credits = () => {
    return (
        <div className="bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 text-[10px] sm:text-xs text-gray-500">
                    {/* Developer Name */}
                    <div className="flex items-center gap-2 order-2 md:order-1">
                        <span className="text-gray-400">Developed by</span>
                        <span className="text-gray-300 font-medium">Janith Gamage © 2026</span>
                    </div>

                    {/* Contact Links */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-3 order-1 md:order-2">
                        <a
                            href="mailto:janithgamage1.ed@gmail.com"
                            className="flex items-center gap-1.5 hover:text-secondary transition-all duration-200 hover:scale-105"
                            title="Email"
                        >
                            <Mail size={14} />
                            <span className="md:inline">Email</span>
                        </a>
                        <span className="text-gray-700 hidden md:block">•</span>
                        <a
                            href="tel:+94718523525"
                            className="flex items-center gap-1.5 hover:text-secondary transition-all duration-200 hover:scale-105"
                            title="Phone"
                        >
                            <Phone size={14} />
                            <span className="md:inline">Phone</span>
                        </a>
                        <span className="text-gray-700 hidden md:block">•</span>
                        <a
                            href="https://github.com/DevJanith"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 hover:text-secondary transition-all duration-200 hover:scale-105"
                            title="GitHub"
                        >
                            <Github size={14} />
                            <span className="md:inline">GitHub</span>
                        </a>
                        <span className="text-gray-700 hidden md:block">•</span>
                        <a
                            href="https://janith-gamage.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 hover:text-secondary transition-all duration-200 hover:scale-105"
                            title="Portfolio"
                        >
                            <Globe size={14} />
                            <span className="md:inline">Portfolio</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Credits;
