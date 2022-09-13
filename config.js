/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    // 'sprite-svg',
    // 'sprite-png',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/global.scss',
    'src/scss/mixins.scss',
    '../../node_modules/swiper/swiper.scss',
    '../../node_modules/@fancyapps/ui/dist/fancybox.css',
    '../../node_modules/swiper/modules/pagination/pagination.scss',
    '../../node_modules/swiper/swiper-bundle.min.css',
    '../../node_modules/choices.js/public/assets/styles/choices.css',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    'src/fonts/*.{woff,woff2}': 'fonts/',
    'src/fonts/Inter-Regular.woff': 'fonts/',
    'src/fonts/Inter-Regular.woff2': 'fonts/',
    'src/fonts/Inter-SemiBold.woff': 'fonts/',
    'src/fonts/Inter-SemiBold.woff2': 'fonts/',
    // 'src/fonts/demo-empty-open-sans.woff2': 'fonts/',
    'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
