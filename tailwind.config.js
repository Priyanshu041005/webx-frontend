module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#2563eb',   // blue-600
        accent: '#f59e0b'     // amber-500
      },
      backgroundImage: {
        'light-pattern': "url('/bg-light.svg')",
        'dark-pattern': "url('/bg-dark.svg')"
      }
    },
  },
  plugins: [],
};
