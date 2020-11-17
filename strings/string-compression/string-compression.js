const compressString = s => {
    if (!s.length) return s;

    let compressedStr = ''
    let char = s.charAt(0);
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === char) {
            count++;
        } else {
            compressedStr += compressSection(char, count)
            char = s.charAt(i);
            count = 1;
        }
        
        if (i === s.length - 1) {
            compressedStr += compressSection(char, count)
        }
    }

    return compressedStr.length === s.length ? s : compressedStr

    function compressSection (char, count) {
        return count > 1 ? `${char}${count}` : char
    }
}

module.exports = compressString;