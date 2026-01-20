import React from 'react';
import { motion } from 'framer-motion';

export const AuroraBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Removed dark overlay since we want the porcelain body background to show through, or use a light overlay */}
            <div className="absolute inset-0 bg-porcelain/50 backdrop-blur-[100px] z-10"></div>

            {/* Steel Blue Blob - Top Left */}
            <motion.div
                animate={{
                    x: [-20, 20, -20],
                    y: [-20, 20, -20],
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-tropical-teal rounded-full blur-[120px] opacity-20 mix-blend-multiply"
            />

            {/* Frozen Water / Cyan Blob - Bottom Right */}
            <motion.div
                animate={{
                    x: [20, -20, 20],
                    y: [20, -20, 20],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pearl-aqua rounded-full blur-[140px] opacity-30 mix-blend-multiply"
            />

            {/* Soft Cyan Blob - Center/Right drifting */}
            <motion.div
                animate={{
                    x: [-50, 50, -50],
                    y: [-30, 30, -30],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-tropical-teal rounded-full blur-[100px] opacity-20 mix-blend-multiply"
            />

            {/* Primary/Red Accent - Center/Left drifting (Subtle warmth) */}
            <motion.div
                animate={{
                    x: [30, -30, 30],
                    y: [30, -30, 30],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[30%] left-[10%] w-[450px] h-[450px] bg-pearl-aqua/50 rounded-full blur-[110px] opacity-20 mix-blend-multiply"
            />
        </div>
    );
};
