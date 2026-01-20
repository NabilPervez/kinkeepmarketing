import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";

    const variants = {
        primary: "bg-accent hover:bg-accent/90 text-dark-slate shadow-sm hover:shadow-md",
        secondary: "bg-secondary hover:bg-secondary/80 text-dark-slate border border-transparent",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary/5"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
