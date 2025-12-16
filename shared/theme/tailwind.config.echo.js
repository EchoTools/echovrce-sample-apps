/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        echo: {
          bg: "#121418", // Deep Gunmetal
          surface: "#1E2126", // Panel Grey
          text: "#E0E6ED", // Off-White
          muted: "#9AA0A6", // Text Secondary
          blue: {
            DEFAULT: "#00C2FF", // Electric Cyan
            dim: "#4F7A8C", // Muted Slate
          },
          orange: {
            DEFAULT: "#FF9000", // Reactor Orange
            dim: "#995A00", // Burnt Oxide
          },
        },
      },
    },
  },
};
