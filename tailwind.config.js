/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        asm_dgreen: "rgb(57,61,50)",
        asm_mgreen: "rgb(73,84,67)",
        asm_lgreen: "rgb(88,106,83)",
        asm_white: "rgb(241,243,238)",
        asm_dbrown: "rgb(158,150,131)",
        asm_lbrown: "rgb(200,201,197)",
      },
    },
  },
  plugins: [],
};
