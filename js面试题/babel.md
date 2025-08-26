##### babel-loader
将 ES6+ 语法转换为 ES5 语法，使代码在旧版本的浏览器中也能运行。
JSX->JS语法
##### @babel/core
babel-loader仅仅识别出了jsx文件，内部核心转译功能需要@babel/core这个核心库
##### @babel/preset-env
比如const/let...转译为var，箭头函数转译为普通函数
##### @babel/plugin-transform-runtime
比如Promise/Generate等等
##### @babel/preset-react
将.jsx文件转化为js文件的同时将jsx标签转化为React.createElement的形式