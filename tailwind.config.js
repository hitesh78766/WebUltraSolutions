/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Balanced Brand Colors
        brand: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
        },
        // Soft Accent (Indigo/Violet)
        accent: {
          50: '#EEF0FF',
          100: '#D9DDFE',
          200: '#B4BCFD',
          300: '#8E9AFB',
          400: '#6978F7',
          500: '#5E6AD2',
          600: '#4F5AC0',
          700: '#4049A8',
          800: '#323A85',
          900: '#242B62',
        },
        // Slate - Balanced Neutrals
        slate: {
          50: '#F7F8FA',
          100: '#EDF0F4',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        'soft': '0 4px 20px -4px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 8px 32px -8px rgba(0, 0, 0, 0.06)',
        'soft-xl': '0 16px 48px -12px rgba(0, 0, 0, 0.08)',
        'glow-soft': '0 0 40px rgba(94, 106, 210, 0.12)',
        'card': '0 4px 20px -4px rgba(0, 0, 0, 0.04), 0 2px 8px -2px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 8px 32px -8px rgba(0, 0, 0, 0.06), 0 16px 48px -12px rgba(94, 106, 210, 0.08)',
        'elevated': '0 4px 24px -4px rgba(0, 0, 0, 0.06), 0 8px 24px -8px rgba(0, 0, 0, 0.04)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "aurora": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
          "25%": { transform: "translate(10%, -10%) scale(1.1)", opacity: "0.5" },
          "50%": { transform: "translate(-5%, 5%) scale(0.95)", opacity: "0.35" },
          "75%": { transform: "translate(-10%, -5%) scale(1.05)", opacity: "0.45" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-in": "slide-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "scroll-left": "scroll-left 30s linear infinite",
        "aurora": "aurora 20s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-aurora': 'linear-gradient(135deg, rgba(94, 106, 210, 0.15) 0%, rgba(124, 58, 237, 0.1) 50%, rgba(192, 38, 211, 0.08) 100%)',
        'gradient-text': 'linear-gradient(135deg, #5E6AD2 0%, #7C3AED 50%, #C026D3 100%)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'expo-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
