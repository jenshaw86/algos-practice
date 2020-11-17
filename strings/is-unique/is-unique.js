const isUnique = str => {
    if (!str.length) return false;
    const hash = {};

    for (let i = 0; i < str.length - 1; i++) {
        if (hash[str[i]]) {
            return false;
        } else {
            hash[str[i]] = 1;
        }
    }

    return true;
}

module.exports = isUnique