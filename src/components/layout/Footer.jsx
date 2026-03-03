import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-xl font-bold bg-premium-gradient bg-clip-text text-transparent">
                    AM.
                </div>

                <div className="text-white/40 text-sm">
                    © {new Date().getFullYear()} Ankit Meena. All rights reserved.
                </div>

                <div className="flex items-center gap-8">
                    <a href="https://github.com/Ankitmina25" className="text-sm font-medium text-white/50 hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/ankit-meena77/" className="text-sm font-medium text-white/50 hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
