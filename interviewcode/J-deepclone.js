/**
 * 深拷贝对象，支持数组、对象、Date、RegExp、Set、Map等类型，并处理循环引用。
 * @param {*} obj 要拷贝的对象
 * @param {WeakMap} hash 用于处理循环引用
 * @returns {*} 深拷贝后的对象
 */
function deepclone(obj, hash = new WeakMap()) {
    // 基本类型和 null 直接返回
    if (obj === null || typeof obj !== 'object') return obj;
    // 循环引用处理
    if (hash.has(obj)) return hash.get(obj);
    // Date 类型
    if (obj instanceof Date) return new Date(obj);
    // RegExp 类型
    if (obj instanceof RegExp) return new RegExp(obj);
    // Set 类型
    if (obj instanceof Set) {
        const result = new Set();
        hash.set(obj, result);
        for (const value of obj) {
            result.add(deepclone(value, hash));
        }
        return result;
    }
    // Map 类型
    if (obj instanceof Map) {
        const result = new Map();
        hash.set(obj, result);
        for (const [key, value] of obj) {
            result.set(deepclone(key, hash), deepclone(value, hash));
        }
        return result;
    }
    // 数组或普通对象
    const cloneObj = Array.isArray(obj) ? [] : {};
    hash.set(obj, cloneObj);
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            cloneObj[key] = deepclone(obj[key], hash);
        }
    }
    return cloneObj;
}


const obj = {
    a: 1,
    b: { c: 2 },
    d: [3, 4],
    e: new Date(),
    f: new Set([5, 6]),
    g: new Map([['x', 7]]),
};
obj.self = obj; // 循环引用

const clone = deepclone(obj);

console.log(clone);
console.log(clone.self === clone); // true，循环引用也被正确处理