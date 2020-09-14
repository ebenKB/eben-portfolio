const withReactSvg = require('next-react-svg')
const path = require('path')
 
module.exports={
  assetPrefix: '/eben-portfolio/',
  basePath: '/eben-portfolio'
}

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  }
})