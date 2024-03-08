const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const TerserPlugin = require("terser-webpack-plugin");

module.exports = withPWA({
  webpack: (config, { isServer }) => {
    // Code splitting
    config.optimization.splitChunks = {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    };

    // Minify and optimize the bundle
    if (!isServer) {
      config.optimization.minimize = true;

      // Initialize minimizer array if undefined
      config.optimization.minimizer = config.optimization.minimizer || [];

      // Set terserOptions
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        })
      );
    }

    // File loader for MP3 files
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/sounds/",
          outputPath: "static/sounds/",
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },
});
