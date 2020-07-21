// eslint-disable-next-line
const tailwindcss = require("tailwindcss");
// Tells postcss to use tailwindcss and autoprefixer plugins when
// creating out css/scss files
module.exports = {
  // Autoprefixer is a CSS post processor. It combs through compiled CSS files to add or remove vendor prefixes like -webkit and -moz after checking it against caniuse.com
  // eslint-disable-next-line
  plugins: [tailwindcss("tailwind.config.js"), require("autoprefixer")]
};
