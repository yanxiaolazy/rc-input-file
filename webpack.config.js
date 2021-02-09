const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'rc-input-file': path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './lib'),
    publicPath: './lib',
    libraryTarget: 'umd',
    library: 'RcInputFile',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', "@babel/preset-react"]
						}
					}
        ],
        include: path.resolve(__dirname, './src')
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
        ],
        include: path.resolve(__dirname, './src')
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    react: 'react'
  }
}