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
加载的有用资源是数据，例如 JSON 文件、CSV、TSV 和 XML
要导入 CSV、TSV 和 XML，可以使用csv-loader和xml-loader
```
npm install --save-dev csv-loader xml-loader
```