/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "win98-bg": "#008080",
        "win98-gray": "#c0c0c0",
        "win98-blue": "#000080",
        "win98-dark": "#868a8e",
        "win98-light": "#ffffff",
      },
      boxShadow: {
        "win98-out":
          "inset -1px -1px 0 #0a0a0a, inset 1px 1px 0 #ffffff, inset -2px -2px 0 #868a8e, inset 2px 2px 0 #c0c0c0",
        "win98-in":
          "inset -1px -1px 0 #ffffff, inset 1px 1px 0 #0a0a0a, inset -2px -2px 0 #c0c0c0, inset 2px 2px 0 #868a8e",
        "win98-window":
          "inset 1px 1px 0 #ffffff, inset -1px -1px 0 #0a0a0a, inset 2px 2px 0 #c0c0c0, inset -2px -2px 0 #868a8e",
      },
      fontFamily: {
        "ms-sans": ['"MS Sans Serif"', "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
};
