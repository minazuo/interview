/**
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

示例 1：
输入：x = 4
输出：2

示例 2：
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 
提示：
0 <= x <= 231 - 1
 */

function mySqrt(x) {
    if (x === 0 || x === 1) return x;
    let left = 1, right = x, ans = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

console.log("##", mySqrt(8))
// 请写出算法的时间复杂度和空间复杂度
// O(logx)
// 空间复杂度：
// O(1)
