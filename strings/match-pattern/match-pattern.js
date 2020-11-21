const matchPattern = (s,p) => {
    const a = p.split('*');
    console.log(a)

    let subStr = s;
    let i = 0;

    while (i < a.length) {
        if (a[i]) {
            if (subStr.indexOf(a[i]) >= 0) {
                subStr = subStr.slice(subStr.indexOf(a[i]) + a[i].length);
            } else {
                return false;
            }
        }
        i++;
    }
    return true;
}

module.exports = matchPattern;