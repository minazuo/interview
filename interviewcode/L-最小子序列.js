/**
Return the smallest subsequence in dictionary order of s, which contains all the different characters of s and only appears once.
返回字符串 s 的字典序最小子序列，该子序列包含 s 中所有不同的字符且每个字符只出现一次。
Example 1：
Input：s = "bcabc"
Output："abc"

Example 2：
Input：s = "cbacdcbc"
Output："acdb"
 
Tip：
1 <= s.length <= 1000
s is composed of lowercase English letters.
 */

var smallestSubsequence = function(s) {
    const count = {};
    const seen = new Set();
    const stack = [];
    for(const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for(const char of s) {
        if(seen.has(char)) {
            count[char]--;
            continue;
        }
        while(stack.length > 0 && char < stack[stack.length-1] && count[stack[stack.length-1]]>0) {
            const removeChar = stack.pop();
            seen.delete(removeChar);
        }
        stack.push(char);
        seen.add(char);
        count[char]--;
        
    }
    return stack.join('');
};
const s = "cbacdcbc";
console.log("####,",smallestSubsequence(s))

// 请写出算法的时间复杂度和空间复杂度
O(n)
// 空间复杂度：
O(1)
