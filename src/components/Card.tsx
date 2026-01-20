import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`
        bg-white/60 
        backdrop-blur-md 
        border border-stormy-teal/5 
        shadow-lg 
        rounded-3xl 
        p-6 
        hover:scale-[1.02] 
        transition-all 
        duration-300 
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
};
