const isPalindrome = str => {
    str = str.toLowerCase().replace(/\W/g, '');
    let l = 0;
    let r = str.length - 1;

    while(l <= (str.length - 1) /2) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
}

module.exports = isPalindrome;