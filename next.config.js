const withPWA = require("next-pwa")({
  dest: "public",
  disable:
    process.env.NODE_ENV === "development" 
  // delete two lines above to enable PWA in production deployment
  // add your own icons to public/manifest.json
  // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
});
/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
  config.module.rules.push({
    test: /\.(mp3)$/,
    use: {
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/sounds/',
        outputPath: 'static/sounds/',
        name: '[name].[ext]',
        esModule: false
      }
    }
  })

  

  return config
}}

withPWA({
  swcMinify: true,
  eslint: {
    dirs: ["src"],
  },
  compress: true,
})
