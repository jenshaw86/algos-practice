const lcs = require('./solution');

describe('lcs1', () => {
    it('returns 4', () => {
        const arr = [100, 4, 200, 3, 2, 1];
        expect(lcs.longestConsecutiveSequence1(arr)).toBe(4);
    });
    
    it('returns 5', () => {
        const arr = [100, 4, 200, 4, 3, 5, 2, 1, 3, 100];
        expect(lcs.longestConsecutiveSequence1(arr)).toBe(5);
    });

    it('returns 6', () => {
        const arr = [100, 4, 200, 6, 3, 5, 2, 1];
        expect(lcs.longestConsecutiveSequence1(arr)).toBe(6);
    });
});

describe('lcs2', () => {
    it('returns 4', () => {
        const arr = [100, 4, 200, 3, 2, 1];
        expect(lcs.longestConsecutiveSequence2(arr)).toBe(4);
    });
    
    it('returns 5', () => {
        const arr = [100, 4, 200, 4, 3, 5, 2, 1, 3, 100];
        expect(lcs.longestConsecutiveSequence2(arr)).toBe(5);
    });

    it('returns 6', () => {
        const arr = [100, 4, 200, 6, 3, 5, 2, 1];
        expect(lcs.longestConsecutiveSequence2(arr)).toBe(6);
    });
});