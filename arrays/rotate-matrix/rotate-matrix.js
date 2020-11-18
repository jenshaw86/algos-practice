const rotateMatrix = matrix => {
    // transpose
        for(let i = 0; i < matrix.length; i++) {
            for (let j = i; j < matrix.length; j++) {
                if (i !== j) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            }
        }
    
        // flip/reverse
        for (let i = 0; i < matrix.length; i++) {
            let [l, r] = [0, matrix.length - 1];

            while(l < r) {
                [matrix[i][l], matrix[i][r]] = [matrix[i][r], matrix[i][l]]
                l++;
                r--;
            }
        }
        return matrix;
}

module.exports = rotateMatrix;