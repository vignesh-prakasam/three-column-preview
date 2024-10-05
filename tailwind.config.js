/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.html", "./src/**/*.js" ],
  theme: {
    extend: {
      fontFamily: {
        "big-shoulders": ["Big Shoulders Display", "sans-serif"],
        "lexend-deca": ["Lexend Deca", "sans-serif"],
      },
      colors: {
        primary: {
          brightOrange: "hsl(31, 77%, 52%)",
          darkCyan: "hsl(184, 100%, 22%)",
          veryDarkCyan: "hsl(179, 100%, 13%)",
        },
        neutral: {
          transparentWhite: "hsla(0, 0%, 100%, 0.75)",
          veryLightGray: "hsl(0, 0%, 95%)",
        },
      },
    },
  },
  plugins: [],
}

/*
Add colors
### Primary

Bright orange: hsl(31, 77%, 52%)
Dark cyan: hsl(184, 100%, 22%)
Very dark cyan: hsl(179, 100%, 13%)

### Neutral

Transparent white (paragraphs): hsla(0, 0%, 100%, 0.75)
Very light gray (background, headings, buttons): hsl(0, 0%, 95%)

*/