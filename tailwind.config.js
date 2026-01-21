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
                    50: '#e8f3f2', // Mapped to 100 for safety, or slight lighten
                    100: '#e8f3f2',
                    200: '#cfe4e2',
                    300: '#9fc8c4',
                    400: '#579792',
                    500: '#186663', // Base
                    600: '#13524f',
                    700: '#0e3e3c',
                    800: '#092a29',
                    900: '#051615',
                    DEFAULT: '#186663',
                },
                // Secondary Scale (Sun-Washed Sand)
                secondary: {
                    50: '#f7f1eb', // Using 100 value
                    100: '#f7f1eb',
                    500: '#d2af94', // Base
                    900: '#4a3627',
                    DEFAULT: '#d2af94',
                },
                // Neutral Scale (Slate Sage)
                neutral: {
                    50: '#f0f2f2', // Using 100 val
                    100: '#f0f2f2',
                    200: '#dadddd', // Interpolated
                    300: '#c1c9c9', // Interpolated
                    400: '#b3bdbd', // Interpolated
                    500: '#a6b5b4', // Base
                    600: '#859190',
                    700: '#646d6c',
                    800: '#424848',
                    900: '#1d2625',
                    DEFAULT: '#a6b5b4',
                },
                // Interface Mappings
                background: '#F0F2F2', // Neutral 100 / Interface Background
                surface: '#FFFFFF',    // Interface Surface
                text: '#002D37',       // Midnight Abyss / Interface Text

                // Brand Mappings
                accent: '#8C7361',     // Driftwood
                'dark-slate': '#002D37', // Midnight Abyss (Legacy alias)

                // Semantic Colors
                success: '#346B5C',
                warning: '#B58E4F',
                danger: '#A34D41',
                destructive: '#A34D41',
            },
            boxShadow: {
                // Midnight Abyss Shadow: rgba(0, 45, 55, 0.15)
                sm: '0 1px 2px 0 rgba(0, 45, 55, 0.05)',
                DEFAULT: '0 1px 3px 0 rgba(0, 45, 55, 0.15), 0 1px 2px -1px rgba(0, 45, 55, 0.1)',
                md: '0 4px 6px -1px rgba(0, 45, 55, 0.15), 0 2px 4px -1px rgba(0, 45, 55, 0.1)',
                lg: '0 10px 15px -3px rgba(0, 45, 55, 0.15), 0 4px 6px -4px rgba(0, 45, 55, 0.1)',
                xl: '0 20px 25px -5px rgba(0, 45, 55, 0.15), 0 8px 10px -6px rgba(0, 45, 55, 0.1)',
                '2xl': '0 25px 50px -12px rgba(0, 45, 55, 0.25)',
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
