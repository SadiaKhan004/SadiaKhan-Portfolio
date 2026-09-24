
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { projectsList } from '../../config/site';

export default function Projects() {
    // Single open accordion state (or null if all closed)
    const [expandedId, setExpandedId] = useState('hive');

    const toggleProject = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    return (
        <section id="projects" className="relative w-full py-20 sm:py-28 bg-[#FAFAF9] text-[#1C1917] overflow-hidden">

            {/* CONSTRAINED DESKTOP CONTAINER (max-w-5xl matches About, Skills & Experience) */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. SECTION HEADING: "Projects ↘" */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-2 sm:gap-3"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1C1917] font-sans">
                        Projects
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

                {/* 2. ACCORDION LIST CONTAINER */}
                <div className="border-t border-b border-stone-300 divide-y divide-stone-300 mt-10">
                    {projectsList.map((project) => {
                        const isExpanded = expandedId === project.id;

                        return (
                            <div key={project.id} className="group transition-colors duration-200">

                                {/* COLLAPSED ROW HEADER */}
                                <div
                                    onClick={() => toggleProject(project.id)}
                                    className="py-6 sm:py-8 flex items-center justify-between gap-4 cursor-pointer select-none"
                                >
                                    {/* Left: Project Title */}
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1C1917] group-hover:text-[#047857] transition-colors font-sans tracking-tight">
                                        {project.title}
                                    </h3>

                                    {/* Right: Tech Stack Tag Pills & Plus/Minus Button */}
                                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">

                                        {/* Uppercase Tag Pills */}
                                        <div className="hidden md:flex items-center gap-2">
                                            {project.tags.slice(0, 4).map((tag, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="px-3 py-1 rounded-full border border-stone-300 text-stone-700 bg-white text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase group-hover:border-[#A7F3D0] group-hover:bg-[#ECFDF5] group-hover:text-[#047857] transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Toggle Icon Button (+ / -) */}
                                        <button
                                            aria-label="Toggle Project Details"
                                            className="relative p-2 sm:p-2.5 rounded-full 
                                                       bg-white border border-stone-300
                                                       text-[#1C1917] 
                                                       group-hover:border-[#047857] group-hover:text-[#047857] group-hover:bg-[#ECFDF5]
                                                       transition-all duration-200"
                                        >
                                            {/* Continuous pulsing glow ring */}
                                            <motion.span
                                                aria-hidden="true"
                                                className="absolute inset-0 rounded-full pointer-events-none"
                                                animate={{
                                                    boxShadow: [
                                                        '0 0 0px 0px rgba(4,120,87,0.4)',
                                                        '0 0 8px 2px rgba(4,120,87,0.35)',
                                                        '0 0 0px 0px rgba(4,120,87,0.4)',
                                                    ],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: 'easeInOut',
                                                }}
                                            />

                                            <span className="relative z-10">
                                                {isExpanded ? (
                                                    <Minus className="w-5 h-5 stroke-[2]" />
                                                ) : (
                                                    <Plus className="w-5 h-5 stroke-[2]" />
                                                )}
                                            </span>
                                        </button>

                                    </div>
                                </div>

                                {/* EXPANDED DRAWER CONTENT */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                                                {/* LEFT COLUMN: NARRATIVE & DETAILS */}
                                                <div className="lg:col-span-7 space-y-6">

                                                    {/* Overview Paragraph */}
                                                    <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-normal">
                                                        {project.overview}
                                                    </p>

                                                    {/* Key Bullets */}
                                                    <ul className="space-y-2 pt-1">
                                                        {project.bullets.map((bullet, bIdx) => (
                                                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#047857] shrink-0" />
                                                                <span>{bullet}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* Mobile Tech Stack Pills */}
                                                    <div className="flex md:hidden flex-wrap gap-1.5 pt-2">
                                                        {project.tags.map((tag, tIdx) => (
                                                            <span
                                                                key={tIdx}
                                                                className="px-2.5 py-1 rounded-full border border-stone-300 bg-white text-stone-700 text-[10px] font-mono font-bold tracking-wider uppercase"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Live Demo / Link Button */}
                                                    <div className="pt-4">
                                                        <a
                                                            href={project.link}
                                                            target={project.link !== "#" ? "_blank" : "_self"}
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-sm font-extrabold tracking-widest text-[#1C1917] hover:text-[#047857] uppercase font-mono group/link border-b-2 border-[#1C1917] hover:border-[#047857] pb-1 transition-colors"
                                                        >
                                                            <span>{project.linkText}</span>
                                                            <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                        </a>
                                                    </div>

                                                </div>

                                                {/* RIGHT COLUMN: BROWSER-FRAMED PREVIEW CARD */}
                                                <div className="lg:col-span-5">
                                                    <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md group-hover:border-[#047857] transition-all bg-white">
                                                        {/* Fake browser chrome bar */}
                                                        <div className="flex items-center gap-1.5 px-4 py-3 bg-stone-100 border-b border-stone-200">
                                                            <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                                                            <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                                                            <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                                                        </div>

                                                        {/* Screenshot */}
                                                        <div className="relative aspect-[16/10] w-full bg-stone-100">
                                                            <img
                                                                src={project.image}
                                                                alt={project.title}
                                                                className="w-full h-full object-cover object-top"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}