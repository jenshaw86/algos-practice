const findElementInArray = require ('./binary-search-implement')

describe('findElementInArray', () => {
    it('returns true if 1 exists in array', () => {
        const arr = [1,2,3,4,5];
        const el = 1;

        expect(findElementInArray(arr, el)).toBe(true);
    });

    it('returns true if 5 exists in array', () => {
        const arr = [1,2,3,4,5];
        const el = 5;

        expect(findElementInArray(arr, el)).toBe(true);
    });

    it('returns true if 111 exists in array', () => {
        const arr = [10, 14, 29, 3, 89, 16, 11, 2, 54, 73, 6, 1];
        const el = 11;

        expect(findElementInArray(arr, el)).toBe(true);
    });

    it('returns true if 10 exists in array', () => {
        const arr = [10, 14, 29, 3, 89, 16, 11, 2, 54, 73, 6, 1];
        const el = 10;

        expect(findElementInArray(arr, el)).toBe(true);
    });

    it('returns false if 88 doesn\'t exist in the array', () => {
        const arr = [10, 14, 29, 3, 89, 16, 11, 2, 54, 73, 6, 1];
        const el = 88;

        expect(findElementInArray(arr, el)).toBe(false);
    })
})