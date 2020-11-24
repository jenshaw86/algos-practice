// Given an unsorted array, find the length of its longest consecutive sequence

// Input: [100, 4, 200, 1, 2, 3]
// Output: 4, because 1-2-3-4 is the longest consecutie sequence in the array

// Solution 1
// Time: O(n)
// Space: O(1)
const longestConsecutiveSequence = arr => {
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
        if (arr[i] === arr[i - 1] + 1) { 
            // If so, increment variable. Then compare value to max. If current value is greater than max, replace the max value with current. 
            currentLength++;
            maxLength = currentLength > maxLength ? currentLength : maxLength;
        } else {
            // Else, reset variable to 1
            currentLength = 1
        }
    }
    
    // After loop, return max length
    return maxLength;
}
