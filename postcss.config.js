module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano')({
        preset: 'default'
      })
    ]
  };

  module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            'postcss-loader'
          ]
        }
      ]
    }
  };