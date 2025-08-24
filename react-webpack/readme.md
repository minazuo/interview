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

##### 配置css 为了import从 JavaScript 模块中获取 CSS 文件
loader是链式调用的，从右向左执行，最后一个加载器返回javascript代码
能够import './style.css'进入依赖于该样式的文件html
 
```
npm install css-loader style-loader -D
```

##### 配置babel
```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader -D
```

##### 配置html模板
```