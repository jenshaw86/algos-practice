// Verify if an element exists in an array

const findElementInArray = (arr, el) => {
    arr.sort((a,b) => a-b)
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while(left <= right) {
        mid = Math.round((right + left)/2);
        if (el === arr[mid]) {
            return true;
        } else if (el < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}

module.exports = findElementInArray;