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
                // Primary Scale (Aurora Core)
                primary: {
                    50: 'var(--color-primary-100)', // Mapping for safety
                    100: 'var(--color-primary-100)',
                    200: 'var(--color-primary-200)',
                    300: 'var(--color-primary-300)',
                    400: 'var(--color-primary-400)',
                    500: 'var(--color-primary-500)', // Base
                    600: 'var(--color-primary-600)',
                    700: 'var(--color-primary-700)',
                    800: 'var(--color-primary-800)',
                    900: 'var(--color-primary-900)',
                    DEFAULT: 'var(--color-primary-500)',
                    // Semantic Aliases
                    highlight: 'var(--color-highlight)', // Frost Mist
                },
                // Secondary Scale (Glacial Mint)
                secondary: {
                    50: 'var(--color-secondary-100)',
                    100: 'var(--color-secondary-100)',
                    500: 'var(--color-secondary-500)', // Base
                    900: 'var(--color-secondary-900)',
                    DEFAULT: 'var(--color-secondary-500)',
                },
                // Neutral Scale (Midnight Moss)
                neutral: {
                    50: 'var(--color-neutral-100)',
                    100: 'var(--color-neutral-100)',
                    500: 'var(--color-neutral-500)', // Base - Deep Forest
                    900: 'var(--color-neutral-900)',
                    DEFAULT: 'var(--color-neutral-500)',
                    // Extra
                    void: 'var(--color-void)',
                },

                // Mappings
                // "Accent/Light" => highlight => text_primary
                highlight: 'var(--color-highlight)',

                // Legacy / Compatibility Aliases
                background: 'var(--color-neutral-500)', // Main bg is now dark (Deep Forest)
                surface: 'var(--color-primary-900)',    // Darker surface (Aurora Core 900 or Neutral 900) - Using JSON 'surface' equivalent which was #001B17 (Primary 900)
                text: 'var(--color-highlight)',         // Primary text is Frost Mist
                'text-muted': 'var(--color-text-secondary)',

                // "Accent" usage in codebase often implies the pop color. in "Aurora Forest" that's Glacial Mint (Secondary) or Frost Mist.
                // Let's map 'accent' to Glacial Mint for buttons/highlights to keep "pop", or Frost Mist for text.
                // Given previous usage was secondary-like, let's map to Secondary 500.
                accent: 'var(--color-secondary-500)',
                'dark-slate': 'var(--color-neutral-900)',

                // Semantic Colors
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                danger: 'var(--color-danger)',
                destructive: 'var(--color-danger)',
            },
            boxShadow: {
                // Glow effects using Glacial Mint/Aurora colors
                // "shadow-color" var isn't fully supported in tailwind utilities without define.
                // Custom implementation of the requested glow: 0 0 20px rgba(72, 168, 154, 0.3)
                glow: '0 0 20px rgba(72, 168, 154, 0.3)',
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.2)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
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
