// Problem:
// You have a list of incoming API requests, each with a timestamp in seconds. You can batch requests only if they are within the same 10-second window. Return the minimum number of batches required.


// 07:18
// Input: [1, 2, 3, 13, 14, 25]
// Output: 3
// # Batches: [1,2,3], [13,14], [25]

function groupConsecutive(arr) {
    if(arr.length ===0) return [];
    arr.sort((a,b) => a-b);

    const result = [];
    let currentSequence = [arr[0]];
    for(let i =1; i<arr.length; i++) {
        if(arr[i] === arr[i-1]+1){
            currentSequence.push(arr[i]);
        } else {
            result.push(currentSequence);
            currentSequence = [arr[i]]
        }
    }
    result.push(currentSequence);
    console.log("# Batches:", result)
    return result.length;
}

console.log("#groupConsecutive", groupConsecutive([1, 2, 3, 13, 14, 25]))