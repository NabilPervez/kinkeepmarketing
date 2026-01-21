import React from 'react';
import { motion } from 'framer-motion';

export const AuroraBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
            {/* Subtle overlay for matte feel - Darkened for contrast */}
            <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[100px] z-10"></div>

            {/* Slate Teal Blob - Top Left */}
            <motion.div
                animate={{
                    x: [-20, 20, -20],
                    y: [-20, 20, -20],
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[100px]"
            />

            {/* Soft Mint Blob - Bottom Right */}
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
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent rounded-full blur-[120px] opacity-20"
            />

            {/* Light Mist / Secondary Blob - Center/Right */}
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
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-secondary rounded-full blur-[80px] opacity-40 mix-blend-multiply"
            />

            {/* Another accents Blob - Center/Left */}
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
                className="absolute bottom-[30%] left-[10%] w-[450px] h-[450px] bg-accent/40 rounded-full blur-[90px] opacity-20 mix-blend-multiply"
            />
        </div>
    );
};
