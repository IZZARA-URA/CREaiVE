
import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {

      },
      fontFamily: {
        // Pro
        pro: ["SanFranciscoPro", "sans-serif"],
        //  ProDisplay
        proDisplayBold: ["SanFranciscoProDisplay_Bold", "sans-serif"],
        proDisplayHeavy: ["SanFranciscoProDisplay_Heavy", "sans-serif"],
        proDisplayLight: ["SanFranciscoProDisplay_Light", "sans-serif"],
        proDisplayMedium: ["SanFranciscoProDisplay_Medium", "sans-serif"],
        proDisplayRegular: ["SanFranciscoProDisplay_Regular", "sans-serif"],
        proDisplaySemibold: ["SanFranciscoProDisplay_Semibold", "sans-serif"],
        proDisplayThin: ["SanFranciscoProDisplay_Thin", "sans-serif"],
        // ProText
        proTextBold: ["SanFranciscoProText_Bold", "sans-serif"],
        proTextHeavy: ["SanFranciscoProText_Heavy", "sans-serif"],
        proTextLight: ["SanFranciscoProText_Light", "sans-serif"],
        proTextMedium: ["SanFranciscoProText_Medium", "sans-serif"],
        proTextRegular: ["SanFranciscoProText_Regular", "sans-serif"],
        proTextSemibold: ["SanFranciscoProText_Semibold", "sans-serif"],
        proTextThin: ["SanFranciscoProText_Thin", "sans-serif"],

      },
      colors: {
        primary: {
          0: "#782a90",
          100: "#e4d4e9",
          200: "#c9aad3",
          300: "#ae7fbc",
          400: "#9355a6",
          500: "#782a90",
          600: "#602273",
          700: "#481956",
          800: "#30113a",
          900: "#18081d"
        },
        secondary: {
          0: "#0e113f",
          100: "#cfcfd9",
          200: "#9fa0b2",
          300: "#6e708c",
          400: "#3e4165",
          500: "#0e113f",
          600: "#0b0e32",
          700: "#080a26",
          800: "#060719",
          900: "#03030d"
        },
        complementary: {
          0: "#47c2cb",
          100: "#daf3f5",
          200: "#b5e7ea",
          300: "#91dae0",
          400: "#6cced5",
          500: "#47c2cb",
          600: "#399ba2",
          700: "#2b747a",
          800: "#1c4e51",
          900: "#0e2729"
        },
        neutrals: {
          100: "#fefefe",
          200: "#fdfdfd",
          300: "#fcfcfc",
          400: "#fbfbfb",
          500: "#fafafa",
          600: "#c8c8c8",
          700: "#969696",
          800: "#646464",
          900: "#323232"
        },
        success: {
          0: "#4caf50",
          100: "#4caf50",
          200: "#45a049",
          300: "#357b38",
        },
        warning: {
          0: "#ff9800",
          100: "#ffddaa",
          200: "#ffba55",
          300: "#b36a00",
        },
        error: {
          0: "#ef5350",
          100: "#fac6c5",
          200: "#f48c8a",
          300: "#cb1613",
        }
      },
    },
  },
  plugins: [],
};
export default config;
