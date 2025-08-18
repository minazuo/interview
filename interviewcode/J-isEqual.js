// 比较object js
//使用 for...of 遍历 keys1，并检查 keys2.includes(key) 和 isEqual(obj1[key], obj2[key])，确保所有键和值都匹配。
function isEqual(obj1, obj2) {
    // 1. 快速判断：引用相同或值相同
    if(obj1 === obj2) return true

    // 处理null 或undefined
    if (obj1 == null || obj2 == null) return false;
 

    //处理数组 
    //先判断数组的长度
    if(Array.isArray(obj1) && Array.isArray(obj2)) {
        if(obj1.length != obj2.length) return false;
        for(let i = 0; i< obj1.length; i++) {
            if(!isEqual(obj1[i], obj2[i])) return false;
        }
        return true;
    }
    //处理对象
    //先判断对象的长度
    const keys1 = Object.keys(obj1);  //[1 2 3]
    const keys2 = Object.keys(obj2);  //[2,3,4]
    if(keys1.length !== keys2.length)  return false;
    for(let key of keys1) {
        if(!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
            return false
        }
    }

    return true;
}

console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(isEqual([1, 2, 3], [1, 2, 3])); // true
console.log(isEqual([1, 2, 3], [1, 2, 4])); // false
console.log(isEqual(null, null)); // true
console.log(isEqual(null, undefined)); // false
console.log(isEqual(1, 1)); // true
console.log(isEqual(1, 2)); // false