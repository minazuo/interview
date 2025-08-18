// Problem:

// You’re given a list of click-through-rate (CTR) floats. Return the longest contiguous subarray where the absolute difference between max and min CTR does not exceed ε (tolerance).

// Input: [0.1, 0.15, 0.2, 0.21, 0.19], ε = 0.05
// Output: 3  # [0.15, 0.2, 0.21]
//最长连续子数组
function longestSubarray(arr,ε){
    let left = 0;
    let maxLength = 0;
    let result = [];
    let maxQueue = [];
    let minQueue = [];
    for (let right= 0; right < arr.length; right++) {
        while(maxQueue.length > 0 && arr[right] > arr[maxQueue[maxQueue.length-1]]) {
            maxQueue.pop();
        }
        maxQueue.push(right);

         while(minQueue.length > 0 && arr[right] < arr[minQueue[minQueue.length-1]]) {
            minQueue.pop();
        }
        minQueue.push(right);
        while(arr[maxQueue[0]] - arr[minQueue[0]] > ε) {
            left++;
            if(maxQueue.length > 0 && maxQueue[0] < left) {
                maxQueue.shift()
            }
             if(minQueue.length > 0 && minQueue[0] < left) {
                minQueue.shift()
            }
        }

        if(right-left+1 > maxLength){
            maxLength = right-left+1;
            result = arr.slice(left, right+1);
        }
    }
    return result;
}

console.log("#longestSubarray", longestSubarray([0.1, 0.15, 0.2, 0.21, 0.19],0.05))