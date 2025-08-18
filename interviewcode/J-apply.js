Function.prototype.myApply = function(context, args) {
    context = context || globalThis; // 如果 context 为 null/undefined，则默认全局对象
    const fnSymbol = Symbol('fn');
    context[fnSymbol] = this; // 将当前函数赋值到 context 上
    const result = args ? context[fnSymbol](...args) : context[fnSymbol]();
    delete context[fnSymbol]; // 清理属性
    return result;
};

// 示例
function test(a, b) {
    return this.x + a + b;
}