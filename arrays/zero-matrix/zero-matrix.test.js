const zeroMatrix = require('./zero-matrix')

describe('zeroMatrix', () => {
    it('returns zeroed matrix', () => {
        const matrix = [[1,2,3,4,5], [6,0,8,9,10], [11,12,0,14,15]];
        const zeroedMatrix= [[1,0,0,4,5],[0,0,0,0,0],[0,0,0,0,0]]
        expect(zeroMatrix(matrix)).toEqual(zeroedMatrix)
    });
    
});
