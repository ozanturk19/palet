import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":                  "#8b4f2d",
        "primary-container":        "#e69b73",
        "on-primary":               "#ffffff",
        "on-primary-container":     "#663212",
        "secondary":                "#77574d",
        "secondary-container":      "#fed3c7",
        "on-secondary":             "#ffffff",
        "tertiary":                 "#725a39",
        "tertiary-container":       "#c5a881",
        "on-tertiary":              "#ffffff",
        "background":               "#faf9f6",
        "surface":                  "#faf9f6",
        "surface-dim":              "#dbdad7",
        "surface-bright":           "#faf9f6",
        "surface-container-lowest": "#ffffff",
        "surface-container-low":    "#f4f3f1",
        "surface-container":        "#efeeeb",
        "surface-container-high":   "#e9e8e5",
        "surface-container-highest":"#e3e2e0",
        "on-background":            "#1a1716",
        "on-surface":               "#1a1716",
        "on-surface-variant":       "#5d4037",
        "outline":                  "#85736b",
        "outline-variant":          "#d8c2b8",
        "error":                    "#ba1a1a",
        "warm-cream":               "#fedcc7",
        "terracotta":               "#c4916d",
      },
      fontFamily: {
        headline: ["'Cormorant Garamond'", "Georgia", "serif"],
        body:     ["'Nunito'", "sans-serif"],
        label:    ["'Nunito'", "sans-serif"],
        logo:     ["'Cinzel'", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.2rem",
        lg: "0.4rem",
        xl: "0.8rem",
        full: "999px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
