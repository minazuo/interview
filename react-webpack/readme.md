#####  安装webpack相关依赖
```
npm install webpack webpack-cli webpack-dev-server webpack-merge -D
```
##### JSX的编译过程是怎样的？
```
A: JSX → Babel编译 → React.createElement() → 虚拟DOM对象 → 真实DOM
```

##### 创建一个webpack配置文件

##### 执行webpack命令
```
npx webpack --config webpack.config.js
```

##### 配置css 为了 JavaScript 模块中 import获取 CSS 文件
loader是链式调用的，从右向左执行，最后一个加载器返回javascript代码
能够import './style.css'进入依赖于该样式的文件html
 
```
npm install css-loader style-loader -D
```

##### 配置babel
```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader -D
```

##### 配置图片 可以在js css在引用图片文件

 
##### 配置字体，通过@font-face声明来合并字体文件

##### xml-loader可以加载xml文件，并且可以解析标签 csv-loader可以加载csv文件，并且可以解析标签
<!-- 加载的有用资源是数据，例如 JSON 文件、CSV、TSV 和 XML
要导入 CSV、TSV 和 XML，可以使用csv-loader和xml-loader -->
```
npm install --save-dev csv-loader xml-loader
```

##### 配置多入口文件
<!-- HtmlWebpackPlugin插件会自动生成html文件，并且会自动引入打包后的js文件 -->

##### 清空dist文件夹
/dist每次构建前清理文件夹
```
output: {
    clean: true,
},
```
##### 源映射 将三个源文件（a.js、b.js和c.js）打包成一个包（bundle.js），而其中一个源文件包含错误，则堆栈跟踪将指向bundle.js
  devtool: 'inline-source-map',

#####  //监视文件变化
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch", 
    "build": "webpack"
  },

#####  //热更新实时重新加载
  devServer: {
    static: './dist',
    hot: true,
  },


  #### 使用 webpack-dev-middleware 将 webpack 处理过的文件发送到服务器

 #### mini-css-extract-plugin：用于将 CSS 从主应用程序中分离出来。
 webpack 优化：
 压缩：
1. 使用TerserPlugin或UglifyJsPlugin等插件，压缩JavaScript代码，减少文件大小。
2. 使用css-minimizer-webpack-plugin插件，压缩CSS代码，减少文件大小。
 代码分块：
1. 多入口文件，dependOn，允许在块之间共享模块，从而减少重复代码。
2. splitChunks:  将公共依赖模块提取到单独chunk中，防止重复打包，优化加载时间。
    将第三方库（例如lodash或react）提取到单独的vendor代码块
3. 动态导入代码块，通过import()语法，将代码分割成多个chunk，按需加载。
4. 预获取：prefetch，资源在浏览器闲置时加载，提高性能。
   预加载：preload，在父chunk加载时并行加载，提高加载速度。

缓存：使用contenthash缓存文件，避免重复下载。

Tree Shaking：移除未使用的代码，减少打包体积。
1. sideEffects更有效，因为它允许跳过整个模块/文件和完整的子树。
sideEffects依赖于package.json中的sideEffects字段，或者通过配置文件指定。
2. usedExports依赖于terser来检测语句中的副作用，
treeshaking的问题：
1. CSS 未包含在内：组件渲染时没有样式
2. 全局 JavaScript 未运行：Polyfill 或全局配置未执行
3. 跳过初始化代码：注册组件或设置事件监听器的函数永远不会运行