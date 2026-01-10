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
                background: {
                    light: '#f8fafc', // slate-50
                    dark: '#1E2130', // Deep Navy/Charcoal
                },
                brand: {
                    steel: '#4f7cac',
                    teal: '#c0e0de',
                    jet: '#162521',
                    iron: '#3c474b',
                    cyan: '#9eefe5',
                    primary: '#ef4444', // Red-500 equivalent for "Coral/Red"
                }
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
