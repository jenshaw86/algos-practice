const rotateMatrix = require('./rotate-matrix')

describe('rotateMatrix', () => {
    it('rotates 2x2 matrix', () => {
        const matrix = [[1,2],[3,4]];
        const rotated = [[3,1],[4,2]];
        expect(rotateMatrix(matrix)).toEqual(rotated);
    });
    
    it('rotates 3x3 matrix', () => {
        const matrix = [[1,2,3],[4,5,6],[7,8,9]];
        const rotated = [[7,4,1],[8,5,2],[9,6,3]];
        expect(rotateMatrix(matrix)).toEqual(rotated);
    });

    it('rotates 4x4 matrix', () => {
        const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
        const rotated = [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]];
        expect(rotateMatrix(matrix)).toEqual(rotated);
    });
    
    it('rotates 5x5 matrix', () => {
        const matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
        const rotated = [[21,16,11,6,1],[22,17,12,7,2],[23,18,13,8,3],[24,19,14,9,4],[25,20,15,10,5]];
        expect(rotateMatrix(matrix)).toEqual(rotated);
    });
});
