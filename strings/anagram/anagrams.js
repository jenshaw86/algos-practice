// Solution 1

// const isAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) return false;
//     if (str1.toLowerCase().split('').sort().join() !== str2.toLowerCase().split('').sort().join()) return false;

//     return true;
// }

// Solution 2
const isAnagram = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    [s1, s2] = [s1.toLowerCase(), s2.toLowerCase()]

    let freq = {};
    for (let i = 0; i < s1.length; i++) {
        if (freq[s1[i]]) {
            freq[s1[i]]++;
        } else {
            freq[s1[i]] = 1;
        }
    }

    for (let i = 0; i < s2.length; i++) {
        if(freq[s2[i]]) { 
            freq[s2[i]]--;
            if (freq[s2[i]] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;

}
module.exports = isAnagram