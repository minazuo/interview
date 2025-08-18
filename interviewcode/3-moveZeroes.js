/**
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array. 

给定一个整数数组 nums，请将所有 0 移动到数组末尾，同时保持非零元素的相对顺序不变。 注意，必须在原地操作，不能拷贝数组。

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1 <= nums.length <= 104
-2^31 <= nums[i] <= 2^31 - 1
 */

function moveZeroes(nums) {
    let nonZeroIndex = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    for(let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};

let nums = [0,1,0,3,12]
moveZeroes(nums)
console.log("###case1,", nums);
console.log("#######123")
nums = [0]
moveZeroes(nums)
console.log("###case2,", nums);
// 请写出算法的时间复杂度和空间复杂度
// 时间复杂度：
O(n)
// 空间复杂度：
O(1)