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
        bg-white 
        border border-secondary/50 
        shadow-sm hover:shadow-md 
        rounded-3xl 
        p-8 
        transition-all 
        duration-300 
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
};
