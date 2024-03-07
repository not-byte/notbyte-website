import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        colors:
          "linear-gradient(30deg, rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%)",
      },
      colors: {
        black: "rgba(0,0,0,1.00)",
        coral: "rgba(240,132,97,1.00)",
        indian: "rgba(234,86,87,1.00)",
        night: "rgba(15,16,19,1.00)",
        royal: "rgba(129,81,156,1.00)",
        white: "rgba(255,255,255,1.00)",
        grey: {
          lightest: "rgba(249,249,249,1.00)",
          lighter: "rgba(241,241,241,1.00)",
          light: "rgba(220,220,220,1.00)",
          DEFAULT: "rgba(128,128,128,1.00)",
          dark: "rgba(88,88,88,1.00)",
          darker: "rgba(68,68,68,1.00)",
          darkest: "rgba(38,38,38,1.00)",
        },

        azure: "rgba(0,127,255,1.00)",
        ruby: "rgba(224,17,95,1.00)",
        emerald: "rgba(4,120,87,1.00)",
        gold: "rgba(255,215,0,1.00)",
      },
      spacing: {
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
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
