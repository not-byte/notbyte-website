import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #5D3B66, #E0B0FF)",
        "gradient-new":
          "linear-gradient(30deg, rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%)",
      },
      colors: {
        black: "rgba(0,0,0,1.00)",
        coral: "rgba(240,132,97,1.00)",
        indian: "rgba(234,86,87,1.00)",
        night: "rgba(15,16,19,1.00)",
        royal: "rgba(129,81,156,1.00)",
        white: "rgba(255,255,255,1.00)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      spacing: {
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
        ".text-shadow-md": {
          textShadow: "0 4px 6px rgba(0,0,0,0.1)",
        },
        ".text-shadow-lg": {
          textShadow: "0 10px 15px rgba(0,0,0,0.1)",
        },
        ".text-shadow-xl": {
          textShadow: "0 20px 25px rgba(0,0,0,0.1)",
        },
        ".text-shadow-2xl": {
          textShadow: "0 25px 50px rgba(0,0,0,0.25)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
  mode: "jit",
  variants: {
    extend: {
      opacity: ["disabled"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
      backgroundColor: [
        "responsive",
        "hover",
        "focus",
        "active",
        "group-hover",
      ],
    },
  },
};
export default config;
