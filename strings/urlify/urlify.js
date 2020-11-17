// Solution 1
// const urlify = s => s.replace(/\s/g, '%20')

// Solution 2
const urlify = (s,l) => {
    let arr = s.split('');

    let p1 = l - 1;
    let p2 = arr.length - 1;

    while(p1 !== p2) {
        if (arr[p1] === ' ') {
            arr[p2] = '0';
            arr[p2 - 1] = '2';
            arr[p2 - 2] = '%';
            p2 -= 3;
        } else {
            arr[p2] = arr[p1];
            p2--;
        }
        p1--;
    }

    return arr.join('')
}

module.exports = urlify