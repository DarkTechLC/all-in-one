module.exports = {
  mode: 'jit',
  purge: ['./**/*.html', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        jump: 'jump 3s linear infinite alternate',
      },
      keyframes: {
        jump: {
          to: { transform: 'translateY(0)' },
          from: { transform: 'translateY(-10%)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
