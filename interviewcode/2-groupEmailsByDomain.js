Problem:
// Given a  of emails, group them by domain name. Normalize each email before grouping:
// Remove anything after a + in the username
// Ignore dots . in the username
// Return a dictionary of {domain: [normalized_email1, ...]}

// Input:
// [
//   "john.doe+ads@gmail.com",
//   "john+newsletter@gmail.com",
//   "bob@yahoo.com",
//   "alice+bob@outlook.com",
//   "al.ice@outlook.com"
// ]
// Output:
// {
//   'gmail.com': ['johndoe@gmail.com'],
//   'yahoo.com': ['bob@yahoo.com'],
//   'outlook.com': ['alice@outlook.com']
// }

function groupEmailsByDomain(data) {
    const result = {};
    for (let email of data) {
        let [user, domain] = email.split('@');
        // 去除+及其后内容
        user = user.split('+')[0];
        // 去除所有点
        user = user.replace(/\./g, '');
        const normalizedEmail = `${user}@${domain}`;
        if (!result[domain]) {
            result[domain] = [];
        }
        // 保证每个域名下邮箱唯一
        if (!result[domain].includes(normalizedEmail)) {
            result[domain].push(normalizedEmail);
        }
    }
    return result;
}


const inputData = [
    "john.doe+ads@gmail.com",
    "john+newsletter@gmail.com",
    "bob@yahoo.com",
    "alice+bob@outlook.com",
    "al.ice@outlook.com"
]
console.log("output",groupEmailsByDomain(inputData))
// output {
//   'gmail.com': [ 'johndoe@gmail.com', 'john@gmail.com' ],
//   'yahoo.com': [ 'bob@yahoo.com' ],
//   'outlook.com': [ 'alice@outlook.com' ]
// }