/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Outfit', 'sans-serif'],
                display: ['Outfit', 'Inter', 'sans-serif'],
            },
            colors: {
                // Primary Scale (Deep Sea Teal)
                primary: {
                    50: '#eef6f7',
                    100: '#d7e9ec',
                    200: '#afd3d8',
                    300: '#81b7bf',
                    400: '#5597a1',
                    500: '#2c5d66', // Base
                    600: '#234e57',
                    700: '#1a3d45',
                    800: '#112b32',
                    900: '#081a1f',
                    // Semantic Aliases
                    light: '#CDE2EB', // Arctic Air / Accent
                    DEFAULT: '#2c5d66',
                },
                // Secondary Scale (Misty Slate)
                secondary: {
                    50: '#f4f8f9',
                    500: '#6f99a5', // Base
                    900: '#1a2a2e',
                    DEFAULT: '#6f99a5',
                },
                // Neutral Scale (Midnight Moss)
                neutral: {
                    50: '#f8fafb',
                    100: '#f1f4f5',
                    200: '#e2e8ea',
                    500: '#0b3238', // Base
                    900: '#041416',
                    // Semantic Aliases
                    surface: '#f8fafb',
                    border: '#e2e8ea',
                    text: '#041416',
                    DEFAULT: '#0b3238',
                },
                // Legacy / Compatibility Aliases
                background: '#f8fafb', // neutral-50
                text: '#041416',       // neutral-900
                accent: '#CDE2EB',     // primary-light / Arctic Air
                'dark-slate': '#041416', // neutral-900

                // Semantic Colors
                success: '#3E664B',
                warning: '#A68D5D',
                danger: '#7D3C3C',
                destructive: '#7D3C3C',
            },
            boxShadow: {
                // Custom shadows using the deep neutral color rgba(4, 20, 22, 0.3)
                sm: '0 1px 2px 0 rgba(4, 20, 22, 0.05)',
                DEFAULT: '0 1px 3px 0 rgba(4, 20, 22, 0.2), 0 1px 2px -1px rgba(4, 20, 22, 0.1)',
                md: '0 4px 6px -1px rgba(4, 20, 22, 0.3), 0 2px 4px -1px rgba(4, 20, 22, 0.15)',
                lg: '0 10px 15px -3px rgba(4, 20, 22, 0.3), 0 4px 6px -4px rgba(4, 20, 22, 0.15)',
                xl: '0 20px 25px -5px rgba(4, 20, 22, 0.3), 0 8px 10px -6px rgba(4, 20, 22, 0.15)',
                '2xl': '0 25px 50px -12px rgba(4, 20, 22, 0.5)',
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
            animation: {
                blob: "blob 7s infinite",
            },
        },
    },
    plugins: [],
}
