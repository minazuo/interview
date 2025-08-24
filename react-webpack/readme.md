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
 ##### webpack 优化：
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

##### tree shaking的原理：
1. 识别出模块中的副作用，避免删除它们。
2. 使用ES6模块的静态结构，分析模块之间的依赖关系，找出未使用的代码。
打包工具（如 Webpack）会从你的入口文件（如 index.js）开始，构建一个模块依赖图，然后分析每个模块的导出和导入，标记“活”代码，找出未使用的导出，从而实现 tree shaking。
3. 使用TerserPlugin或UglifyJsPlugin等插件，移除未使用的代码。
Terser 会对打包后的代码进行以下操作：
 作用域分析： Terser 会分析代码的作用域，了解变量的声明和使用情况。
 识别未使用变量： Terser 会发现那些被定义了但从未被使用的变量、函数或类。这些正是第一阶段中未被标记为“活的”代码。
 删除死代码： Terser 会直接从生成的代码文件中移除这些未使用的声明。

Tree Shaking 无法在 CommonJS 模块中有效工作，因为 CommonJS 模块是动态的，无法在编译时确定依赖关系。
很多库（如 Babel、TypeScript）为了兼容旧浏览器，会将 ESM 语法转换成 CommonJS 语法。一旦转换成 require 和 module.exports，Tree Shaking 就会失效


#### loader 和plugin的区别
Loader 的设计是链式调用的。当一个文件需要多个 Loader 处理时，它们的执行顺序是从右到左（或从下到上）。这就像一个流水线，每个 Loader 完成自己特定的转换任务，然后把结果交给下一个 Loader。最终，文件会被转换成最终的输出格式。
Plugin 通过监听 Webpack 构建生命周期中的钩子 来工作。Webpack 的 Compiler 和 Compilation 对象暴露了一系列事件，Plugin 可以订阅这些事件，并在事件触发时执行自定义逻辑。
Webpack 启动，创建 Compiler 对象。
它遍历 plugins 数组，对每个 Plugin 实例调用其 apply(compiler) 方法。
HtmlWebpackPlugin 的 apply 方法被执行。它内部会订阅 compiler 上的一个或多个钩子，比如 emit 钩子（这个钩子在 Webpack 将所有资源输出到 output 目录之前触发）。


##### compliler和compilation的区别
Compiler 对象：项目的“总指挥”
Compiler 代表了不可变的 Webpack 配置。当你运行 webpack 命令时，Webpack 会根据你的 webpack.config.js 文件创建一个 Compiler 实例。这个实例包含了你所有的配置信息（entry, output, module, plugins 等）。

它的主要工作包括：

启动构建：当你执行 compiler.run() 或 compiler.watch() 时，Compiler 就会启动一次构建流程。
创建 Compilation：这是它最重要的职责之一。在每次构建开始时，Compiler 会创建一个新的 Compilation 实例，并把构建任务交给它。
管理插件：Compiler 负责加载你配置的所有插件，并确保它们在正确的时机（通过 Tapable 的事件流）被调用。
监听文件变化：在 watch 模式下，Compiler 会监听文件系统的变化。一旦检测到文件变更，它会再次创建一个新的 Compilation 实例，执行增量构建。
提供全局钩子：它暴露了一些全局性的生命周期钩子，比如 run, watch-run, done, failed 等。这些钩子在整个构建流程中只触发一次或与构建的开始/结束相关。

Compilation 对象：单次构建的“施工队”
Compilation 对象包含了本次构建的所有信息。它是一个动态的、会随着构建过程不断变化的对象。每次构建，无论是全量构建还是增量构建，都会有一个全新的 Compilation 实例。

它的主要工作包括：

模块解析：从入口文件（entry）开始，递归地解析所有 import / require 的模块，构建出整个项目的模块依赖图。
资源管理：将所有模块（包括通过 Loader 转换后的非 JS 资源）都看作是 Webpack 的模块，并统一管理。
优化和封装：执行代码压缩、Tree Shaking、Scope Hoisting 等优化操作。
生成产物：将所有模块按照依赖关系和配置规则，打包成最终的 Chunk，并生成 Asset（即输出到 dist 目录的文件，如 bundle.js）。
提供构建过程钩子：它暴露了大量与构建过程紧密相关的钩子，比如 compile, make, seal, optimize, emit 等。插件通过监听这些钩子，可以在构建的各个阶段进行精细化的操作。