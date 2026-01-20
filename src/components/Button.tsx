import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";

    const variants = {
        primary: "bg-[#ef4444] hover:bg-[#dc2626] text-white shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]",
        secondary: "bg-stormy-teal/5 hover:bg-stormy-teal/10 text-stormy-teal border border-stormy-teal/5 backdrop-blur-sm",
        outline: "bg-transparent border border-stormy-teal/10 hover:bg-stormy-teal/5 text-stormy-teal hover:text-tropical-teal"
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
