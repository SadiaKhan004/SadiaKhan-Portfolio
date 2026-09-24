
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function Skills() {
    const [activeTab, setActiveTab] = useState('all');

    // Categorized skills with SVG icons matching the dark tile layout
    const skills = [
        // --- Generative AI & LLM Engineering ---
        {
            name: "MULTI-AGENT AI",
            category: "genai",
            icon: (
                <svg className="w-12 h-12 text-[#A7F3D0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="4" cy="6" r="2" />
                    <circle cx="20" cy="6" r="2" />
                    <circle cx="4" cy="18" r="2" />
                    <circle cx="20" cy="18" r="2" />
                    <path d="M6 7l3.5 3.5M18 7l-3.5 3.5M6 17l3.5-3.5M18 17l-3.5-3.5" />
                </svg>
            )
        },
        {
            name: "LANGGRAPH",
            category: "genai",
            icon: (
                <svg className="w-12 h-12 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12h18M12 3v18M7 7l10 10M17 7L7 17" />
                    <circle cx="12" cy="12" r="4" className="fill-[#38BDF8]/20" />
                </svg>
            )
        },
        {
            name: "LANGCHAIN",
            category: "genai",
            icon: (
                <svg className="w-12 h-12 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="4" width="6" height="6" rx="1" />
                    <rect x="14" y="14" width="6" height="6" rx="1" />
                    <path d="M10 7h4a3 3 0 013 3v4M14 17h-4a3 3 0 01-3-3v-4" />
                </svg>
            )
        },
        {
            name: "RAG & VECTOR DB",
            category: "genai",
            icon: (
                <svg className="w-12 h-12 text-[#F59E0B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5" />
                </svg>
            )
        },
        {
            name: "CHROMADB",
            category: "genai",
            icon: (
                <svg className="w-12 h-12 text-[#EC4899]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a9 9 0 000 18M12 7a5 5 0 000 10" />
                </svg>
            )
        },
        {
            name: "HUGGING FACE",
            category: "genai",
            icon: (
                <svg className="w-12 h-12 text-[#FBBF24]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-3 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-6.5 6a5.5 5.5 0 007 0 .5.5 0 01.7.7 6.5 6.5 0 01-8.4 0 .5.5 0 01.7-.7z" />
                </svg>
            )
        },
        {
            name: "AWS BEDROCK",
            category: "genai",
            icon: (
                <svg className="w-12 h-12 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.75 11.25L12 4.5l-6.75 6.75 1.5 1.5L12 7.5l5.25 5.25 1.5-1.5zM12 16.5l-5.25-5.25-1.5 1.5L12 19.5l6.75-6.75-1.5-1.5L12 16.5z" />
                </svg>
            )
        },

        // --- Programming & Core ML ---
        {
            name: "PYTHON",
            category: "ml",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12" />
            )
        },
        {
            name: "PYTORCH",
            category: "ml",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="w-12 h-12" />
            )
        },
        {
            name: "SCIKIT-LEARN",
            category: "ml",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" alt="scikit-learn" className="w-12 h-12" />
            )
        },
        {
            name: "EXPLAINABLE AI",
            category: "ml",
            icon: (
                <svg className="w-12 h-12 text-[#34D399]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            name: "GNNs & GRUs",
            category: "ml",
            icon: (
                <svg className="w-12 h-12 text-[#A78BFA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="12" cy="18" r="3" />
                    <path d="M8.5 7.5l7 0M7.5 8.5l3 7.5M16.5 8.5l-3 7.5" />
                </svg>
            )
        },
        {
            name: "OPENCV",
            category: "ml",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV" className="w-12 h-12" />
            )
        },
        {
            name: "PANDAS",
            category: "ml",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="w-12 h-12" />
            )
        },
        {
            name: "NUMPY",
            category: "ml",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="w-12 h-12" />
            )
        },

        // --- Cloud & Backend ---
        {
            name: "FASTAPI",
            category: "backend",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-12 h-12" />
            )
        },
        {
            name: "AWS SERVERLESS",
            category: "backend",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-12 h-12" />
            )
        },
        {
            name: "SUPABASE",
            category: "backend",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" alt="Supabase" className="w-12 h-12" />
            )
        },
        {
            name: "POSTGRESQL",
            category: "backend",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-12 h-12" />
            )
        },
        {
            name: "GITHUB & GIT",
            category: "backend",
            icon: (
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12 invert" />
            )
        },
    ];

    const filterTabs = [
        { id: 'all', label: 'All Stack' },
        { id: 'genai', label: 'Generative AI' },
        { id: 'ml', label: 'Core ML & Data' },
        { id: 'backend', label: 'Cloud & Backend' }
    ];

    const filteredSkills = activeTab === 'all'
        ? skills
        : skills.filter(s => s.category === activeTab);

    return (
        <section id="skills" className="relative w-full py-20 sm:py-28 bg-[#FAFAF9] text-[#1C1917] overflow-hidden">

            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ECFDF5] blur-3xl opacity-60 -z-10 pointer-events-none" />

            {/* CONSTRAINED DESKTOP CONTAINER (max-w-5xl matches About section) */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. HEADING: "Skills ↘" */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-2 sm:gap-3"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1C1917] font-sans">
                        Skills
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

                {/* 3. CATEGORY FILTER TABS */}
                <div className="flex flex-wrap items-center justify-start gap-8 sm:gap-10 md:gap-12 mb-10">
                    {filterTabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="group inline-flex flex-col items-start focus:outline-none cursor-pointer"
                            >
                                <span className={`text-xs sm:text-sm font-extrabold tracking-widest uppercase font-mono transition-colors duration-200 ${isActive ? 'text-[#047857]' : 'text-stone-700 group-hover:text-[#047857]'
                                    }`}>
                                    {tab.label}
                                </span>

                                <div className="w-full flex items-center pt-1.5">
                                    <div className={`h-[1.5px] w-full transition-colors duration-200 ${isActive ? 'bg-[#1C1917]' : 'bg-stone-300 group-hover:bg-[#1C1917]'
                                        }`} />
                                    <svg
                                        className={`w-2.5 h-2.5 -ml-1 shrink-0 transition-colors duration-200 ${isActive ? 'text-[#1C1917]' : 'text-stone-300 group-hover:text-[#1C1917]'
                                            }`}
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M2 1L8 5L2 9" />
                                    </svg>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* 4. DARK TILE SKILL GRID */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5"
                >
                    <AnimatePresence>
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                className="group relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#1C1917] text-white border border-stone-800 hover:border-[#047857] hover:shadow-[0_0_25px_rgba(4,120,87,0.25)] transition-all duration-300 min-h-[140px] sm:min-h-[160px]"
                            >
                                {/* Top Glow Accent on Hover */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#047857] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Icon */}
                                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-12">
                                    {skill.icon}
                                </div>

                                {/* Label */}
                                <span className="text-xs sm:text-sm font-bold tracking-wider text-stone-200 text-center uppercase group-hover:text-[#A7F3D0] transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}