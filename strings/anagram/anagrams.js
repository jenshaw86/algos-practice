const isPalindrome = require("../palindrome/is-palindrome")

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    if (str1.toLowerCase().split('').sort().join() !== str2.toLowerCase().split('').sort().join()) return false;

    return true;
}

module.exports = isAnagram