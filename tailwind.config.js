/** @type {import('tailwindcss').Config} */
// import App from './src/App'
module.exports = {
  content: [
    "./src/App.tsx",
    "./src/components/Nav.tsx",
    "./src/components/Button.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Red-Rose"],
      },
      height: {
        128: "35rem",
      },
    },
  },
  plugins: [],
};
