var build = './build';

var locations = {
  js: './js',
  scss: './scss',
  images: './img',
  node_modules: './node_modules'
}

module.exports = {
  locations: locations,
  scripts: {
    files: [
      locations.js + '/modernizr.js',
      locations.node_modules + '/jquery/dist/jquery.js',
      locations.js + '/app.js'
    ],
    dest: build,
    name: 'app.js'
  },
  css: {
    files: [
      locations.node_modules + '/font-awesome/css/font-awesome.css',
      build + '/css/app.css'
    ],
    name: 'app.css',
    dest: build + '/css/'
  },
  fonts: {
    src: [
      './node_modules/font-awesome/fonts/**'
    ],
    dest: build + '/fonts/'
  },
  scss: {
    src: locations.scss + '/app.scss',
    watch: locations.scss + '/**',
    dest: build + '/css/'
  },
  images: {
    src: [
      locations.images + '/**'
    ],
    dest: build + '/img'
  }
};
