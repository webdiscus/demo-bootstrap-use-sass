const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    entry: {
      styles: `./src/sass/main.scss`,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    plugins: [
        new RemoveEmptyScriptsPlugin(), // removes unexpected empty js file generated for style file
        new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(css|sass|scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ]
    },
  };
};
