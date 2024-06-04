/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mxs': '320px',
      'mmd': '375px',
      'mxl': '435px',
      'tab': '768px',
      'lap': '1024px',
      'lapl': '1440px',
      'desk': '2560px'
    }

  },
  plugins: [],
}