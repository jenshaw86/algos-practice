const isStringRotation = (s1,s2) => {
    if (!s1.length || !s2.length) return false;
    if (s1.length !== s2.length) return false;

    return s1.concat(s1).indexOf(s2) > 0 ? true : false
}

module.exports = isStringRotation;