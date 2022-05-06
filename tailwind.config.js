const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f8ce02",
        },
        secondary: {
          DEFAULT: "#373633",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
