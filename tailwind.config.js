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
                // New 'Calm Clarity' Palette
                'slate-teal': '#4A7C8C',
                'soft-mint': '#8FCBB3',
                'clean-white': '#FFFFFF',
                'mist-gray': '#F5F7F8',
                'dark-slate': '#2C3E50',

                // Semantic mappings
                primary: '#4A7C8C',
                secondary: '#F5F7F8',
                accent: '#8FCBB3',
                background: '#FFFFFF',
                surface: '#F5F7F8',
                text: '#2C3E50',
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
