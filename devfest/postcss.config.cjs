const { join } = require('node:path');

module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.cjs')
    },
    autoprefixer: {}
  }
};
