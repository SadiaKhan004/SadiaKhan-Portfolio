
import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="w-full bg-[#FAFAF9] text-[#1C1917] border-t border-stone-300 py-12">

            {/* CONSTRAINED DESKTOP CONTAINER (max-w-5xl matches all previous sections) */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                {/* TOP FOOTER ROW */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-200">

                    {/* Brand Monogram */}
                    <a href="#home" className="flex flex-col items-center md:items-start group focus:outline-none">
                        <div className="flex items-center gap-[2px] text-stone-900 font-extrabold tracking-widest text-xl leading-none font-sans">
                            <span>S</span>
                            <span className="inline-block w-8 h-4 border-2 border-stone-900 rounded-full my-auto mx-[1px] transition-colors group-hover:border-[#047857]" />
                            <span>K</span>
                        </div>
                        <span className="text-[10px] tracking-[0.35em] text-stone-700 font-semibold uppercase leading-tight -mt-[1px] group-hover:text-[#047857] transition-colors">
                            2026
                        </span>
                    </a>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-white border border-stone-300 text-stone-700 hover:text-white hover:bg-[#047857] hover:border-[#047857] transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
                        title="Back to top"
                    >
                        <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                    </button>

                </div>

                {/* BOTTOM FOOTER COPYRIGHT */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-500 gap-3">
                    <p>© 2026 Sadia Khan. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}