var src = './src-www';
var dest = './www';

module.exports = {
  less: {
    src: src + '/less',
    dest: dest + '/css'
  },
  html: {
    src: src + '/html',
    dest: dest
  },
  js: {
    src: src + '/js',
    dest: dest + '/js'
  },
  img: {
    src: src + '/assets/img',
    dest: dest + '/img'
  }
}
