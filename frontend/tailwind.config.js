// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      backgroundColor: {
        'primary': 'rgb(2, 6, 23)',
      //  'primary':'#001d4a',
      // 'primary':'gradient-to-r from-gray-900 via-indigo-800 to-slate-900',
      },
      colors: {
        'secondary': '#CA8A04',
        // 'secondary':'#74500f',
      },
      boxShadow: {
        'custom': '2px 2px 4px 2px #CA8A04',
      },
    },
  },
  plugins: [],
};
