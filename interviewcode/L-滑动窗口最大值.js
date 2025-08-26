// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。

// 示例 1：
// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：
// 输入：nums = [1], k = 1
// 输出：[1]

// 提示：
// 1 <= nums.length <= 10
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = [];//存储下标，保证队列递减
    for(let i =0; i < nums.length; i++) {
        //移除队尾比当前元素小的
        while(deque.length && nums[i] >= nums[deque[deque.length -1]]) {
            deque.pop();
        }
        deque.push(i)
        //移除窗口外的元素
        if(deque[0]<= i-k) {
            deque.shift()
        }
        //记录窗口的最大值
        if(i >= k-1) {
            result.push(nums[deque[0]])
        }
    }
    return result;


}