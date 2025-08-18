/**
 * 比较两个版本号的大小
 * @param {string} v1 版本号1
 * @param {string} v2 版本号2
 * @returns {number} v1 > v2 返回 1，v1 < v2 返回 -1，相等返回 0
 */
function compareVersion(v1, v2) {
    const arr1 = v1.split('.').map(Number);
    const arr2 = v2.split('.').map(Number);
    const len = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
        const num1 = arr1[i] || 0;
        const num2 = arr2[i] || 0;
        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }
    return 0;
}

// 示例
console.log(compareVersion('1.2.3', '1.2.4')); // -1
console.log(compareVersion('1.2.3', '1.2.3')); // 0
console.log(compareVersion('1.2.3', '1.2'));   // 1
console.log(compareVersion('1.10.1', '1.9.9')); // 1