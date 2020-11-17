const palindromePermutation = s => {
    if (!s.length) return true;
    
    s = s.toLowerCase().replace(/\s/g, '');
    let hash = {};
    let oddCount = 0;

    for(let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]]--;
            oddCount--;
        } else if (hash[s[i]] === 0) {
            hash[s[i]]++;
            oddCount++;
        } else {
            hash[s[i]] = 1;
            oddCount++;
        }
    }

    return oddCount <= 1;
}

module.exports = palindromePermutation