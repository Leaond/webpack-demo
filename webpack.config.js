// 一定要使用commonjs语法

// 引入eslint插件
// const ESLintWebpackPlugin = require('eslint-webpack-plugin')

// 引入mini-css-extract-plugin
const minicssplugin = require('mini-css-extract-plugin')

// 引入css压缩差劲啊
const minimizer = require('css-minimizer-webpack-plugin')

module.exports = {
  // webpack4之后需要指定开发模式mode:"development" | "production" | "none"
  mode: 'development',
  // entry指定入口文件、名字
  // entery:'./app.js',
  // entery:['./app.js',...],多入口
  entry: {
    app1: './app.js',
    app2: './app2.js' // 多入口和入口别名
  },
  // 出口的路径，出口路径必须以绝对路径的形式写
  output: {
    // __dirname表示当前所在的绝对路径
    path: __dirname + '/dist', // lujng
    filename: '[name].[hash:4].bundle.js' // 文件名,这里可以写死，也可以根据入口文件名动态命名,hash值
    // filename:'bundle.js'//文件名,这里可以写死，也可以根据入口文件名动态命名
  },
  resolve: {

  },
  devServer: {},
  //   压缩相关
  optimization: {
    splitChunks: {
      chunks: 'all', // all,sync,initial
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'vendor.js',
          chunks: 'all',
          minChunks: 1
        },
        common: {
          filename: 'common.js',
          chunks: 'all', // all,sync,initial
          minChunks: 2,
          minSize: 0
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  //   loader的写法：module对象黄总，使用rules数组包裹，里面一个对象就是一个loader
  module: {
    rules: [
      // loader格式，test表示匹配什么文件，loader表示使用那个loader
      {
        test: /\.js$/,
        // loader:"babel-loader",
        // use:[],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css/,
        use: [minicssplugin.loader, 'css-loader']
      },
      // {
      //   test: /\.(png|gif|svg|jpeg|jpe)$/,
      //   use: 'url-loader',
      //   options: {
      //     limit: 5000,
      //     name: '[name].[hash].[ext]'
      //   }
      // },
      {
        test: /\.(png|gif|svg|jpeg|jpe)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 5000
          }
        },
        generator: {
          filename: '[name].[hash].[ext]'
        }
      }
    ]
  },
  //   插件:用数组装，所有的插件都要用new plugins注册
  plugins: [
    // new plugins(),
    new minimizer(),
    new minicssplugin({
      filename: 'text.bundle.css'
    })
    // new ESLintWebpackPlugin() // 注册插件，关于eslint的配置我们可以传入一个对象进行配置，但是一般的做法是新建一个eslintrc.js文件作为eslint的配置文件
  ]
}
