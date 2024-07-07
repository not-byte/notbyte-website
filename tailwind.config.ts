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
      aspectRatio: {
        "21/9": "21 / 9",
      },
      backgroundImage: {
        colors:
          "linear-gradient(30deg, rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%)",
        darkModeColors:
          "linear-gradient(30deg, rgba(90,42,37,1.00) 0%, rgba(59,29,69,1.00) 40%, rgba(100,36,37,1.00) 69%, rgba(90,42,37,1.00) 100%)",
      },
      borderColor: {
        colors:
          "linear-gradient(90deg, rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%)",
      },
      screens: {
        smMax: { max: "768px" },
        usm: "420px",
        "2xl": "1536px",
        wqhd: "2560px",
        "4k": "3840px",
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
        ".text-gradient-colors": {
          backgroundImage:
            "linear-gradient(30deg, rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%)",
          color: "transparent",
          backgroundClip: "text",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
    plugin(function ({ addComponents, theme }) {
      // Creating class names for every position+size variant
      let classList: string[] = [];
      const sizeChart = {
        default: 2,
        sm: 1,
        lg: 4,
        xl: 8,
        xs: 0.5,
        md: 1.5,
      };
      const sizeList = Object.keys(sizeChart).slice(1);
      const positionList = ["br", "bl", "tr", "tl"];

      positionList.forEach((position) => {
        let prefix = ".corner-";
        classList.push(prefix + position);
        sizeList.forEach((size) => {
          classList.push(`${prefix}${position}-${size}`);
        });
      });

      const baseAfter = {
        content: "''",
        position: "absolute",
        transform: "rotate(45deg)",
      };

      function getStyle(after: any) {
        return {
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
          "&::after": after,
        };
      }

      // Processing styling based on class params
      function processArgs(position: any, sizing?: any) {
        let sides = [
          position[0] == "b" ? "bottom" : "top",
          position[1] == "r" ? "right" : "left",
        ];
        let settings = {
          width: "",
          aspectRatio: "1/1",
        };

        if (!sizing)
          // @ts-ignore
          settings["width"] = `${sizeChart.default}rem`;
        // @ts-ignore
        else settings["width"] = `${sizeChart[sizing]}rem`;

        sides.forEach((el) => {
          if (!sizing)
            // @ts-ignore
            settings[el] = `-${sizeChart.default / 2}rem`;
          // @ts-ignore
          else settings[el] = `-${sizeChart[sizing] / 2}rem`;
        });

        return settings;
      }

      // Getting arguments from class params
      function getArgs(className: any) {
        let args: Array<string | null> = className.substring(8).split("-");
        if (args.length == 1) args.push(null);

        return args;
      }

      // Creating an object containing every combination of class name and styling
      let processedClassList = {};
      classList.forEach((className: any) => {
        let args = getArgs(className);
        let customAfter = processArgs(args[0], args[1]);
        // @ts-ignore
        processedClassList[className] = getStyle({
          ...baseAfter,
          ...customAfter,
        });
      });

      function getBgColor(value: string) {
        return {
          "&::after": {
            backgroundColor: value,
          },
        };
      }

      // Creating class names and their values for every established color variant
      let processedColorsList = {};
      const themeColors = theme("colors");
      if (themeColors) {
        Object.entries(themeColors).forEach((entry) => {
          let prefix = ".corner-";
          const key = entry[0];
          const value = entry[1];
          if (typeof themeColors[key] === "object") {
            Object.entries(value).forEach((entry2) => {
              // @ts-ignore
              processedColorsList[`${prefix}${key}-${entry2[0]}`] = getBgColor(
                entry2[1] as string
              );
            });
          } // @ts-ignore
          else processedColorsList[prefix + key] = getBgColor(value);

          processedColorsList;
        });
      }

      addComponents({
        // Deconstructing class combinations inside this object
        ...processedClassList,
        ...processedColorsList,
      });
    }),
    plugin(function ({ addComponents }: { addComponents: any }) {
      addComponents({
        ".chipped-corner": {
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
          "&::after": {
            content: "''",
            width: "4rem",
            height: "4rem",
            position: "absolute",
            left: "-2rem",
            bottom: "-2rem",
            transform: "rotate(45deg)",
          },
        },
        ".chipped-corner-night": {
          "&::after": {
            backgroundColor: "rgba(15,16,19,1.00)",
          },
        },
        ".chipped-corner-white": {
          "&::after": {
            backgroundColor: "white",
          },
        },
      });
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
