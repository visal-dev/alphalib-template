/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "contact-us": "url('/assets/cover.jpg')",
      },
    },
  },
  plugins: [],
};
