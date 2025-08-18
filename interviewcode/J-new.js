function myNew(Constructor, ...args) {
    // 创建一个新对象，并将其原型指向 Constructor.prototype
    const obj = Object.create(Constructor.prototype);
    // 执行构造函数，将 this 指向新对象
    const result = Constructor.apply(obj, args);
    // 如果构造函数返回对象，则返回该对象，否则返回新对象
    return (typeof result === 'object' && result !== null) ? result : obj;
}

// 示例
function Person(name) {
    this.name = name;
}
const p = myNew(Person, 'Tom');
console.log(p.name); // 输出 Tom