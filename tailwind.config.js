/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dtext: "var(--dark-text)",
        dbackground: "var(--dark-background)",
        dprimary: "var(--dark-primary)",
        dsecondary: "var(--dark-secondary)",
        daccent: "var(--dark-accent)",
        ltext: "var(--light-text)",
        lbackground: "var(--light-background)",
        lprimary: "var(--light-primary)",
        lsecondary: "var(--light-secondary)",
        laccent: "var(--light-accent)",
      },
    },
  },
  plugins: [],
};
