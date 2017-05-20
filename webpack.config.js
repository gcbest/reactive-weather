module.exports = {
  entry: './app/app.jsx',
    output: {
      path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      // need loaders because webpack cannot read jsx without them, it is expecting regular javascript
      loaders: [
          {
             loader: 'babel-loader',
              query: {
                 // take our files and parse them thru react and then turn them into es2015
                 presets: ['react', 'es2015']
              },
              // let webpack know which folders we want to have parsed
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/
          }
      ]
    }
};