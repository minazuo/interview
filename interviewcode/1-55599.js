// Problem:
// You’re given a run-length encoded string of numbers. For example:
// "3#5,2#9" → means 3 occurrences of 5, and 2 of 9 → output [5,5,5,9,9]

// Input: "3#5,2#9"
// Output: [5,5,5,9,9]

function decodeRunLength(str) {
    const result = [];
    const pairs = str.split(',');
    for (const pair of pairs) {
        const [count, value] = pair.split('#');
        for (let i = 0; i < Number(count); i++) {
            result.push(Number(value));
        }
    }
    return result;
}

const data = decodeRunLength("3#5,2#9");
console.log("#data", data)