/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Proxima Nova", system-ui, sans-serif'
      ],
      mono:[
        'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      ],
    },
    extend: {},
  },
  plugins: [],
}

