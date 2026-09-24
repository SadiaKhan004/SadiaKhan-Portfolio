
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            role: "Co-Founder & AI Engineer",
            company: "Hive",
            summary: "Architected a Generative AI social media automation platform for SMEs using AWS serverless infrastructure and multi-agent LLM workflows."
        },
        {
            role: "AI Engineering Intern",
            company: "Folio3 Software",
            summary: "Co-developed 'Coloryze', a multi-agent personal color analysis and fashion intelligence platform."
        }
    ];

    return (
        <section id="experience" className="relative w-full py-20 sm:py-28 bg-[#FAFAF9] text-[#1C1917] overflow-hidden">

            {/* CONSTRAINED DESKTOP CONTAINER (max-w-5xl matches About and Skills sections) */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* 1. HEADING: "Experience ↘" */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-2 sm:gap-3"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1C1917] font-sans">
                        Experience
                    </h2>

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

                        {/* Shimmer overlay */}
                        <ArrowDownRight
                            className="arrow-shimmer absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#6EE7B7] stroke-[2.5] translate-y-1"
                        />
                    </motion.div>
                </motion.div>

                {/* 2. HORIZONTAL DIVIDER LINE */}
                <div className="w-full h-[1px] bg-stone-300 my-8 sm:my-10" />

                {/* 3. CENTERED SINUSOIDAL WAVE */}
                <div className="relative mt-16 sm:mt-24">

                    {/* DEEP SINUSOIDAL WAVE SVG (DESKTOP / LAPTOP) */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-64 h-full pointer-events-none -z-0">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 200 300">
                            <path
                                d="M 100 20 C 260 80, -60 220, 100 280"
                                fill="none"
                                stroke="#047857"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                className="opacity-70"
                            />
                        </svg>
                    </div>

                    {/* MOBILE STRAIGHT DOTTED LINE */}
                    <div className="md:hidden absolute top-0 bottom-0 left-4 w-[2px] border-l-2 border-dashed border-[#047857]/40" />

                    {/* TWO ALTERNATING UNBOXED EXPERIENCES */}
                    <div className="space-y-20 sm:space-y-28">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                                    className="relative flex flex-col md:flex-row items-center w-full"
                                >
                                    {/* UNBOXED CONTENT BLOCK */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 lg:pr-16 md:text-right' : 'md:order-2 md:pl-12 lg:pl-16 md:text-left'}`}>
                                        <div className="space-y-2">
                                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C1917] font-sans tracking-tight">
                                                {exp.role}
                                            </h3>

                                            <p className="text-sm sm:text-base font-bold text-[#047857] font-sans">
                                                {exp.company}
                                            </p>

                                            <p className="text-sm sm:text-base text-stone-600 leading-relaxed pt-1">
                                                {exp.summary}
                                            </p>
                                        </div>
                                    </div>

                                    {/* EMPTY SPACER FOR ALTERNATING DESKTOP GRID */}
                                    <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}