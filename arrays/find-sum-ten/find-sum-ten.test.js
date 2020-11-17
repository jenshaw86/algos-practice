const findSumTen = require('./find-sum-ten')

describe('findSumTen', () => {
    it('returns [2,8]', () => {
        const arr = [1, 2, 3, 4, 8, 10, 16, 21];
        expect(findSumTen(arr)).toEqual([2,8]);
    });
});
