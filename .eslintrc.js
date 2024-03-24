module.exports = {
  // 配置环境
  env: {
    // 因为我们的代码实在浏览器上面去运行的，所以需要配置为true，这样我们就可以使用一些浏览器的全局环境，比如window，document等，
    browser: true,
    node: true, // 如果设置为node为true，则表示在node环境下运行，那么我们就不能使用window和等浏览器的全局变量了
    es2021: true // 表示当前项目的es环境是一个2021的语法
  },
  // 继承：如果我们不想一条条的写配置，我们就可以使用继承的方式，使用一些已经配置好了的规则
  // 比如比较推荐的两个现成的规范：eslint-config-standard  eslint-cionfig-airbnb，我们只需要安装后，继承就可以使用配置了
  extends: ['standard', 'plugin:vue/strongly-recommended'],
  // 插件：提供对特殊语法的支持，也要做额外的rules，提供一套线程的规范，我们可以安装继承
  //   比如在vue中，我们的vue2只能定义单个template，这样的规则在rules是没有的吗，这时候就需要插件来支持了
  plugins: ['vue'],
  // 语法解析的配置
  parserOptions: {
    ecmaVerson: 6, // ecma的版本是ecma 6
    sourceType: 'module', // 模块化的语法是module
    // 一些ecma的特性
    ecmaFeature: {
      jsx: true // 如果项目里面使用了jsx语法，则设置为true，那么就会去检查jsx的语法
    }
  },
  // 重中之重，定义eslint的具体检查细节，需要的时候去官网查看规则
  rules: {
    // "no-console": 2,
  }
}
