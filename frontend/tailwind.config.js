/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        garamond: ["var(--font-garamond)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#71B045", // Vibrant Green - primary brand color
          foreground: "#FFFFFF",
          50: "#F0F9ED",
          100: "#DBF2D5",
          200: "#C4EA9D",
          300: "#A8E078",
          400: "#8DD65E",
          500: "#71B045",
          600: "#5F9938",
          700: "#4D8232",
          800: "#3B6B2B",
          900: "#2A5524",
        },
        secondary: {
          DEFAULT: "#0F1023", // Dark Navy - secondary brand color
          foreground: "#FFFFFF",
          50: "#2A2B4F",
          100: "#25264A",
          200: "#202245",
          300: "#1B1C40",
          400: "#16173B",
          500: "#0F1023",
          600: "#0A0B18",
          700: "#05060D",
          800: "#030408",
          900: "#010103",
        },
        accent: {
          DEFAULT: "#71B045", // Using green as accent
          foreground: "#FFFFFF",
          50: "#F0F9ED",
          100: "#DBF2D5",
          200: "#C4EA9D",
          300: "#A8E078",
          400: "#8DD65E",
          500: "#71B045",
          600: "#5F9938",
          700: "#4D8232",
          800: "#3B6B2B",
          900: "#2A5524",
        },
        earth: {
          DEFAULT: "#8D6E63",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#8D6E63",
          600: "#6D4C41",
          700: "#5D4037",
          800: "#4E342E",
          900: "#3E2723",
        },
        forest: {
          DEFAULT: "#71B045",
          50: "#F0F9ED",
          100: "#DBF2D5",
          200: "#C4EA9D",
          300: "#A8E078",
          400: "#8DD65E",
          500: "#71B045",
          600: "#5F9938",
          700: "#4D8232",
          800: "#3B6B2B",
          900: "#2A5524",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
