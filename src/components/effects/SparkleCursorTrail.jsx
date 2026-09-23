import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SparkleCursorTrail() {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            // Distance threshold so sparkles spawn only when moving mouse
            const distance = Math.hypot(clientX - lastX, clientY - lastY);

            if (distance > 25) {
                lastX = clientX;
                lastY = clientY;

                const newSparkle = {
                    id: `${Date.now()}-${Math.random()}`,
                    x: clientX,
                    y: clientY,
                    size: Math.random() * 14 + 10, // Size between 10px - 24px
                    rotation: Math.random() * 90 - 45, // Slight random tilt
                    color: Math.random() > 0.5 ? '#047857' : '#A7F3D0', // Teal & Mint accent
                };

                setSparkles((prev) => [...prev.slice(-15), newSparkle]); // Keep max 16 sparkles on screen
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const removeSparkle = (id) => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <AnimatePresence>
                {sparkles.map((sparkle) => (
                    <motion.div
                        key={sparkle.id}
                        initial={{
                            opacity: 0.9,
                            scale: 0.2,
                            x: sparkle.x - sparkle.size / 2,
                            y: sparkle.y - sparkle.size / 2,
                            rotate: sparkle.rotation,
                        }}
                        animate={{
                            opacity: [0.9, 1, 0],
                            scale: [0.2, 1, 0.3],
                            y: sparkle.y - sparkle.size / 2 - 12, // Slight upward float
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        onAnimationComplete={() => removeSparkle(sparkle.id)}
                        className="absolute"
                        style={{
                            width: sparkle.size,
                            height: sparkle.size,
                            color: sparkle.color,
                        }}
                    >
                        {/* 4-Pointed Sparkle SVG */}
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-full h-full drop-shadow-xs"
                        >
                            <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
                        </svg>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}