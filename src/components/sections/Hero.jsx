
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const bioText = "I build intelligent multi-agent systems, cloud serverless backends, and Generative AI applications that transform complex technical challenges into seamless digital experiences.";

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-screen min-h-[600px] max-h-[950px] w-full bg-[#FAFAF9] text-[#1C1917] flex flex-col justify-between py-6 px-6 sm:px-10 lg:px-16 overflow-hidden">

            {/* 1. EMERALD VERTICAL RECTANGLE CHUNK REVEAL ANIMATION */}
            <div className="absolute inset-0 z-40 flex pointer-events-none">
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: i * 0.1,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        style={{ transformOrigin: 'top' }}
                        className="flex-1 bg-[#047857] last:border-r-0"
                    />
                ))}
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#ECFDF5] blur-3xl opacity-80 -z-10 pointer-events-none" />

            {/* TOP HEADER ROW: SADIA KHAN */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="w-full z-10 pt-4 sm:pt-6"
            >
                <span className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-black text-[#047857] tracking-tight">
                    Sadia Khan
                </span>
            </motion.div>

            {/* MAIN CONTENT GRID */}
            <div className="my-auto py-2 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

                {/* LEFT: EDITORIAL HEADLINE (POSITIONED PRECISELY IN HIGHLIGHTED REGION) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="lg:col-span-6 space-y-0 pb-0 -translate-y-8 sm:-translate-y-16 lg:-translate-y-28"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[4.75rem] font-black tracking-light text-[#1C1917] font-sans uppercase leading-[0.9] select-none">
                        SOFTWARE <span className='text-[#047857]'>&</span>
                    </h1>
                    <h1 className="text-5xl ml-2 sm:ml-4 sm:text-6xl md:text-6xl lg:text-7xl xl:text-[4.75rem] font-black tracking-light text-[#1C1917] font-sans uppercase leading-[1.05] select-none">
                        AI ENGINEER
                    </h1>
                </motion.div>

                {/* RIGHT: INTEGRATED GEOMETRIC CROSSHAIR GRID */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="lg:col-span-6 relative pt-2 pl-4 sm:pl-6"
                >
                    {/* Horizontal Line */}
                    <div className="absolute top-0 -left-16 sm:-left-32 right-0 h-[1px] bg-stone-300" />

                    {/* Vertical Line */}
                    <div className="absolute -top-28 lg:-top-44 bottom-0 left-0 w-[1px] bg-stone-300" />

                    {/* 4-Point Star Flare Node */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10 text-[#047857]">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
                        </svg>
                    </div>

                    {/* ARROW BUTTON */}
                    <div className="absolute -bottom-4 right-0 sm:-bottom-8 lg:bottom-auto lg:top-4 lg:right-[100%] lg:pr-6 flex items-center gap-3 shrink-0">
                        <button
                            onClick={scrollToAbout}
                            aria-label="Scroll to About Section"
                            className="group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-[0_4px_16px_rgba(4,120,87,0.2),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:border-[#047857]/60 hover:bg-[#047857]/90 hover:text-white transition-colors duration-300 cursor-pointer active:scale-95 shrink-0 overflow-hidden"
                        >
                            <motion.span
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full"
                                style={{ boxShadow: '0 0 0 0 rgba(4,120,87,0.35)' }}
                                animate={{
                                    boxShadow: [
                                        '0 0 0 0 rgba(4,120,87,0.35)',
                                        '0 0 0 6px rgba(4,120,87,0)',
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                            />

                            <motion.span
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full mix-blend-overlay"
                                style={{
                                    background:
                                        'linear-gradient(115deg, transparent 30%, rgba(4,120,87,0.9) 48%, rgba(255,255,255,0.95) 52%, transparent 70%)',
                                }}
                                animate={{ x: ['-150%', '150%'] }}
                                transition={{ duration: 1.8, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                            />

                            <span
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/60 to-transparent pointer-events-none"
                            />

                            <ArrowDown className="relative z-10 w-5 h-5 stroke-[2.5] text-[#047857] group-hover:text-white group-hover:translate-y-0.5 transition-all duration-300" />
                        </button>
                    </div>

                    {/* BIO PARAGRAPH */}
                    <p className="text-xs sm:text-sm md:text-base font-normal text-stone-700 leading-relaxed font-sans pt-0.5 max-w-lg pb-16 lg:pb-0">
                        {bioText}
                    </p>

                </motion.div>

            </div>

            {/* BOTTOM DECORATIVE FOOTER LINE */}
            <div className="w-full border-t border-stone-300 z-10" />

        </section>
    );
}