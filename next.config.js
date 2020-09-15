const withReactSvg = require('next-react-svg')
const path = require('path')
 
module.exports={
  assetPrefix: '/ebenkb.github.io/',
  basePath: '/ebenkb.github.io'
}

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  }
})