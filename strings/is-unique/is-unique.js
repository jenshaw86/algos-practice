// Solution 1

// const isUnique = str => {
//     if (!str.length) return true;
//     const hash = {};

//     for (let i = 0; i < str.length - 1; i++) {
//         if (hash[str[i]]) {
//             return false;
//         } else {
//             hash[str[i]] = 1;
//         }
//     }

//     return true;
// }

// Solution 2 - no hash

const isUnique = str => {
    if (!str.length) return true;

    let arr = str.split('').sort();

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) return false;
    }

    return true;
}

module.exports = isUnique