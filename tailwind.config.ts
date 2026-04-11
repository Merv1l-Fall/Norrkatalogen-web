import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#BE1E2D",
          blue: "#1A2E44",
          "off-black": "#1A1C1F",
          "off-white": "#F9F9FD",
		  "hover-red": "#9a1825",
		  "hover-blue": "#162635",
		  "soft-gray": "#424242",
		  "blue-dark": "#162635",
		  "hover-white": "#d8d8d8",
        },
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
} satisfies Config;