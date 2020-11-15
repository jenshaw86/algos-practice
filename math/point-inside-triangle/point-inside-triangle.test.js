const isPointInsideTriangle = require('./point-inside-triangle');

describe('isPointInsideTriangle', () => {
    it('returns true if point is located inside of the triangle', () => {
        const vertices = [[0,5], [0,0], [5,3]];
        const point = [0, 3];
        expect(isPointInsideTriangle(vertices, point)).toBe(true);
    });
})