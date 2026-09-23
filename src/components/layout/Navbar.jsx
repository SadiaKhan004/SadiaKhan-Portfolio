import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Publications', href: '#publications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-[#FAFAF9]/90 backdrop-blur-md border-t border-stone-300 border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">

                    {/* 1. LEFT: Stylized Monogram Logo (PORT / FOLIO) */}
                    <a href="#home" className="flex flex-col items-center group focus:outline-none">
                        <div className="flex items-center gap-[2px] text-stone-900 font-extrabold tracking-widest text-xl leading-none font-sans">
                            <span>S</span>
                            <span className="inline-block w-8 h-4 border-2 border-stone-900 rounded-full my-auto mx-[1px] transition-colors group-hover:border-[#047857]" />
                            <span>K</span>
                        </div>
                        {/* <span className="text-[10px] tracking-[0.35em] text-stone-700 font-semibold uppercase leading-tight -mt-[1px] group-hover:text-[#047857] transition-colors">
                            FOLIO
                        </span> */}
                    </a>

                    {/* 2. CENTER: Desktop Navigation with Animated Teal Underline */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative py-2 text-stone-700 hover:text-[#047857] text-sm font-medium tracking-wide transition-colors duration-200 group"
                            >
                                {link.name}
                                {/* Animated Bottom Underline Indicator */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#047857] rounded-full transition-all duration-300 ease-out group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* 3. RIGHT: Subtitle Text + High-Visibility Neural Node Matrix */}
                    {/* Right Header Element: Subtitle + Neural Node Matrix */}
                    <div className="hidden lg:flex flex-col items-end pt-2">
                        <p className="text-[11px] font-medium leading-tight text-stone-800 text-right max-w-[150px]">
                            Engineering end-to-end AI solutions and intelligent LLM workflows
                        </p>

                        <div className="mt-2 w-24 h-8 relative flex items-center justify-end">
                            <svg viewBox="0 0 120 40" className="w-full h-full fill-none">
                                {/* Background Connecting Graph Edges */}
                                <path d="M10 20 L35 10 L65 28 L95 12 L112 20" stroke="#E7E5E4" strokeWidth="0.8" strokeDasharray="2 2" />
                                <path d="M35 10 L65 10 L95 28" stroke="#F5F5F4" strokeWidth="0.8" />

                                {/* Static Network Nodes */}
                                <circle cx="10" cy="20" r="2" className="fill-stone-400" />
                                <circle cx="35" cy="10" r="2" className="fill-stone-400" />
                                <circle cx="65" cy="28" r="2" className="fill-stone-400" />
                                <circle cx="95" cy="12" r="2" className="fill-stone-400" />

                                {/* Active Emerald Glowing Node */}
                                <circle cx="112" cy="20" r="2.5" className="fill-[#047857]" />
                                <circle cx="112" cy="20" r="5" stroke="#047857" strokeWidth="0.75" className="animate-ping opacity-40" />
                            </svg>
                        </div>
                    </div>

                    {/* 4. MOBILE: Hamburger Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-stone-800 hover:text-[#047857] focus:outline-none transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* 5. MOBILE MENU DROPDOWN */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-stone-200 bg-[#FAFAF9] px-6 py-6 space-y-4">
                    <nav className="flex flex-col space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-stone-800 hover:text-[#047857] hover:bg-[#ECFDF5] px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}