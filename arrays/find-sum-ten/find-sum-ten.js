const findSumten = arr => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) { 
        let sum = arr[left] + arr[right]
        if (sum < 10) { 
            left++;
        } else if (sum > 10) {
            right--;
        } else {
            return [arr[left], arr[right]]
        }
    }
}

module.exports = findSumten