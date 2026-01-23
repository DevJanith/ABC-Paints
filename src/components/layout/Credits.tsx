import { Mail, Phone, Github, Globe } from 'lucide-react';

const Credits = () => {
    return (
        <div className="bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                    {/* Developer Name */}
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">Developed by</span>
                        <span className="text-gray-300 font-medium">Janith Gamage © 2026</span>
                    </div>

                    {/* Contact Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="mailto:your.email@example.com"
                            className="flex items-center gap-1.5 hover:text-secondary transition-all duration-200 hover:scale-105"
                            title="Email"
                        >
                            <Mail size={14} />
                            <span className="hidden md:inline">Email</span>
                        </a>
                        <span className="text-gray-700">•</span>
                        <a
                            href="tel:+94123456789"
                            className="flex items-center gap-1.5 hover:text-secondary transition-all duration-200 hover:scale-105"
                            title="Phone"
                        >
                            <Phone size={14} />
                            <span className="hidden md:inline">Phone</span>
                        </a>
                        <span className="text-gray-700">•</span>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 hover:text-secondary transition-all duration-200 hover:scale-105"
                            title="GitHub"
                        >
                            <Github size={14} />
                            <span className="hidden md:inline">GitHub</span>
                        </a>
                        <span className="text-gray-700">•</span>
                        <a
                            href="https://yourportfolio.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 hover:text-secondary transition-all duration-200 hover:scale-105"
                            title="Portfolio"
                        >
                            <Globe size={14} />
                            <span className="hidden md:inline">Portfolio</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Credits;
