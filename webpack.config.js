var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
      'main' : './src/view/main/index.js',
    },
    output: {
      publicPath: '/'
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins:[
      new HtmlWebPackPlugin({
        chunks:["main", "vendor"],
        template: "./src/view/main/index.html",
        filename: "index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader'
            }
            ]
          },
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:"babel-loader",
        options:{
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
          ], 
        }
      },
    },

    {
      test: /\.css$/,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
    },
    
  ]
  },
  resolve:{
    alias:{
       src: path.resolve(__dirname, "src"),
       components: path.resolve(__dirname, "src", "components")
    }
  },
  optimization: {
    splitChunks: {
       cacheGroups: {
          vendor: {
             test: /node_modules/,
             chunks: "initial",
             name: "vendor",
             enforce: true
          }
       }
    }
  }
}