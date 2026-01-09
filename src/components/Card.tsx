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
        bg-white/5 
        backdrop-blur-xl 
        border border-white/10 
        shadow-lg 
        rounded-2xl 
        p-6 
        hover:bg-white/10 
        transition-all 
        duration-300 
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
};
