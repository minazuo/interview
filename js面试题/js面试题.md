##### 深拷贝和浅拷贝的区别
1.	浅拷贝对于引用类型，拷贝的引用地址，而非值本身。
Object.assign({}, {a:1});
扩展运算符
怎么实现深拷贝
1.	JSON.parse(JSON.stringify());
缺点：忽略undefined、Symbol、function、date类型会变成字符串
2.	StructuredClone()
缺点：无法拷贝function、Error对象、和dom节点
3.	手写 deepclone
处理边界情况：null undefined
处理循环引用
处理新容器：判断是数组还是对象，创建对应的空容器[]或{}
递归拷贝：遍历原始对象的属性，递归调用deepclone赋值给新容器
##### 节流和防抖的区别

节流：
固定时间内执行，保证一定时间内至少执行一次，类似公交车
适用场景
滚动加载scroll
搜索框实时建议
监听浏览器窗口的变化

防抖：
事件停止一段时间内执行，
适用场景：
input输入
窗口大小修改resize事件
拖拽事件

##### 原型和原型链以及new关键字
为什么会出现？
实现继承：
1. 对象访问父级/原型对象的属性方法
2．减少代码重复
节省内存：
1.	共享原型对象上的方法
2.	特别适用于大量实例对象
动态性
1.	运行时修改原型对象
2.	影响所有继承实例
是什么？
原型：prototype
Js的一种机制
对象通过它来继承属性和方法
实现对象间共享代码
原型链：prototype chain
由原型连接形成的链式结构
属性查找沿链条向上执行
实现基于原型的继承
怎么使用？
Prototype
Object.getPrototypeOf()
Object.setPrototypeOf()
Object.create()

New 关键字的运算机制
1.	创建一个全新的空对象
2.	链接原型-将prototype指向构造函数的prototype
3.	绑定this-构造函数内部的this指向新对象
4.	执行构造函数代码，初始化属性
5.	返回值规则
若无显示Return或返回基本类型->返回新对象
若显示返回对象->返回该对象


##### React的合成事件
16之前
React事件委托到document事件上
先执行document的捕获事件、父元素的原生捕获事件，子元素的捕获实践，子元素的冒泡事件，父元素的冒泡事件，
React模拟原生事件，通过dispatchEvent实现事件委托
执行父元素的react捕获事件，子元素的react捕获实践，子元素的react冒泡事件，父元素的react冒泡事件
最后执行document原生冒泡
17后
事件委托不再是document，而是容器oo
先全部执行捕获事件，先执行react事件，再执行原生事件
再全部执行冒泡事件，先执行原生事件，再执行react事件


