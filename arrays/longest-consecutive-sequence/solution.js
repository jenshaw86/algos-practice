// Given an unsorted array, find the length of its longest consecutive sequence

// Input: [100, 4, 200, 1, 2, 3]
// Output: 4, because 1-2-3-4 is the longest consecutie sequence in the array

// Solution 1
// Time: O(n)
// Space: O(1)
const longestConsecutiveSequence1 = arr => {
    if (!arr.length) return 0;
    
    // Create variable to count sequence length, assume if the array has a length of at least 1, its value begins at 1
    let currentLength = 1;
    
    // Create variable to track max length
    let maxLength = 1;

    // Sort the array
    arr.sort((a,b) => a - b);
    
    // Iterate through the array, beginning at index 1
    for (let i = 1; i < arr.length; i++) {
        // Check if the value at current index is one away from previous element. 
        if (arr[i] - arr[i - 1] === 1) { 
            // If so, increment variable. Then compare value to max. If current value is greater than max, replace the max value with current. 
            currentLength++;
            maxLength = currentLength > maxLength ? currentLength : maxLength;
        } else if (arr[i] - arr[i - 1] > 1) {
            // If difference is greater than 1, reset variable to 1
            currentLength = 1
        } // if values are identical, do nothing
    }
    
    // After loop, return max length
    return maxLength;
}

// Additional Questions
// What if there are repeat values in the array?



// Solution 2
const longestConsecutiveSequence2 = arr => {
    if (!arr.length) return 0;
    // create variable maxLength
    let maxLength = 1;
    // create variable currentLength
    let currentLength = 1;
    // create hash using array values, remove repeat keys
    let hash = {};
    let checkedAhead = false;

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) hash[arr[i]] = 1;
    }
    // iterate through keys in the hash
    for (let k in hash) {
        if (hash[k]) {
            k = parseInt(k);
            
            // on each key, find another that is one below, and then one above, then increment with each find, and then remove the key
            findApart(k + 1);
            removeKey(k);
            currentLength = 1;
        }
    }
    // this may be done recursively or iteratively
    return maxLength;
    // At end of hash loop, return maxLength
    function findApart(k) {
        if (hash[k]) {
            updateLengths();
            let nextIdx = checkedAhead ? k - 1 : k + 1
            findApart(nextIdx);
            removeKey(k);
            checkedAhead = true;
        }
    }

    function removeKey(k) {
        hash[k] = 0;
    }

    function updateLengths() {
        currentLength++;
        maxLength = currentLength > maxLength ? currentLength : maxLength;
    }
}

module.exports = {
    longestConsecutiveSequence1: longestConsecutiveSequence1,
    longestConsecutiveSequence2: longestConsecutiveSequence2
}