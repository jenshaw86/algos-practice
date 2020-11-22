// Solution 1
// const matchPattern = (s,p) => {
//     const a = p.split('*');

//     let subStr = s;
//     let i = 0;

//     while (i < a.length) {
//         if (a[i]) {
//             if (subStr.indexOf(a[i]) >= 0) {
//                 subStr = subStr.slice(subStr.indexOf(a[i]) + a[i].length);
//             } else {
//                 return false;
//             }
//         }
//         i++;
//     }
//     return true;
// }

const matchPattern = (s,p) => {
    const a = p.split('*');

    if (a[0] === '') a.shift();
    if (a[a.length - 1] === '') a.pop();

    let i = 0;
    let j = 0;

    while(i < s.length) { 
        if (s.slice(i, i + a[j].length) === a[j]) {
            i += a[j].length;
            j++;      
            if (j >= a.length) return true;
        } else {
            i++;
        }
    }
    return false;
}
module.exports = matchPattern;