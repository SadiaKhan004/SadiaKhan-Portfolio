
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="relative w-full py-20 sm:py-32 bg-[#FAFAF9] text-[#1C1917]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. HEADING: "About ↘" */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-2 sm:gap-3"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1C1917] font-sans">
                        About
                    </h2>
                    {/* <ArrowDownRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#047857] stroke-[2.5] translate-y-1" /> */}
                    {/* Add this once in your global CSS or a <style> tag in this component */}
                    <style>{`
  @keyframes arrow-shimmer-sweep {
    0%   { mask-position: -150% 0; -webkit-mask-position: -150% 0; }
    60%  { mask-position: 150% 0; -webkit-mask-position: 150% 0; }
    100% { mask-position: 150% 0; -webkit-mask-position: 150% 0; }
  }
  .arrow-shimmer {
    mask-image: linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.9) 48%, rgba(255,255,255,0.9) 52%, transparent 65%);
    -webkit-mask-image: linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.9) 48%, rgba(255,255,255,0.9) 52%, transparent 65%);
    mask-size: 300% 100%;
    -webkit-mask-size: 300% 100%;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    animation: arrow-shimmer-sweep 2.6s ease-in-out infinite;
  }
`}</style>

                    <motion.div
                        className="relative inline-flex"
                        animate={{
                            filter: [
                                'drop-shadow(0 0 0px rgba(4,120,87,0.4))',
                                'drop-shadow(0 0 8px rgba(4,120,87,0.55))',
                                'drop-shadow(0 0 0px rgba(4,120,87,0.4))',
                            ],
                        }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        {/* Base arrow, solid color */}
                        <ArrowDownRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#047857] stroke-[2.5] translate-y-1" />

                        {/* Shimmer overlay — same icon, brighter color, masked to a moving diagonal band */}
                        <ArrowDownRight
                            className="arrow-shimmer absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#6EE7B7] stroke-[2.5] translate-y-1"
                        />
                    </motion.div>
                </motion.div>

                {/* 2. HORIZONTAL DIVIDER LINE */}
                <div className="w-full h-[1px] bg-stone-300 my-8 sm:my-12" />

                {/* 3. SPACIOUS & UNCLUTTERED LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-4">

                    {/* LEFT COLUMN: QUIET ANCHOR LABEL (MINIMAL) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:space-y-0"
                    >
                        <div className="space-y-2">
                            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#047857] uppercase">
                                01 . Background
                            </span>
                            <p className="text-xs font-mono text-stone-500 uppercase tracking-widest pt-1">
                                Software & AI Engineer
                            </p>
                        </div>

                        <div className="hidden lg:block text-xs font-mono text-stone-400 space-y-1">
                            <p>NED UNIVERSITY '26</p>
                            <p>KARACHI, PAKISTAN</p>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: REFINED BIO TYPOGRAPHY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="lg:col-span-8 space-y-8 text-base sm:text-lg lg:text-xl text-stone-700 font-normal leading-relaxed"
                    >
                        <p>
                            Hi, I'm Sadia Khan, a Software & AI Engineer based in Pakistan. Focused on Generative AI and cloud backend architecture, my passion for research and engineering fuels my drive to turn complex operational challenges into sleek, production-grade automated solutions.
                        </p>

                        <p>
                            Building something intelligent?
                            <a href="#contact" class="contact-link text-[#047857]">Let's connect </a>
                            and bring it to life!
                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}