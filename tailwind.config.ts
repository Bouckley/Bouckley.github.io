import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "Cambria", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },

      // 1.25 major third, fluid via clamp so nothing needs a breakpoint override
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.65" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["clamp(1.25rem, 0.5vw + 1.1rem, 1.375rem)", { lineHeight: "1.4" }],
        "2xl": ["clamp(1.5rem, 1vw + 1.25rem, 1.75rem)", { lineHeight: "1.3" }],
        "3xl": ["clamp(1.875rem, 1.5vw + 1.5rem, 2.25rem)", { lineHeight: "1.2" }],
        "4xl": ["clamp(2.25rem, 2.5vw + 1.65rem, 3rem)", { lineHeight: "1.12" }],
        "5xl": ["clamp(2.75rem, 4vw + 1.75rem, 3.875rem)", { lineHeight: "1.06" }],
        "6xl": ["clamp(3.25rem, 6vw + 1.5rem, 4.75rem)", { lineHeight: "1.02" }],
      },

      colors: {
        border: "hsl(var(--border))",
        "border-strong": "hsl(var(--border-strong))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          raised: "hsl(var(--surface-raised))",
        },
        metric: "hsl(var(--metric))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      // Three steps only
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.625rem",
        md: "0.625rem",
        lg: "1rem",
        xl: "1.25rem",
      },

      transitionTimingFunction: {
        brand: "cubic-bezier(0.2, 0, 0, 1)",
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
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s cubic-bezier(0.2, 0, 0, 1)",
        "accordion-up": "accordion-up 0.2s cubic-bezier(0.2, 0, 0, 1)",
        "fade-up": "fade-up 0.3s cubic-bezier(0.2, 0, 0, 1) forwards",
        "fade-in": "fade-in 0.3s cubic-bezier(0.2, 0, 0, 1) forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
