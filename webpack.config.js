module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    mode: 'development',
    module: {
      rules: [
        {
          resolve: { extensions: ['.js', '.jsx'] },
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ["@babel/plugin-transform-runtime"],
              presets: ['@babel/preset-react', '@babel/preset-env']
            },
          },
        },
      ],
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/client/dist'
    }
  };
  