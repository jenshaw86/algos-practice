const compressString = require('./string-compression')

describe('compressString', () => {
    it('1 - returns compressed string', () => {
        const s = 'aaabbbccddddaa';
        const newStr = 'a4b3c2d4a2';
        expect(compressString(s)).toBe(newStr);
    });
    
    it('2 - returns compressed string, some with no numbers', () => {
        const s = 'aaabccdddda';
        const newStr = 'a4bc2d4a';
        expect(compressString(s)).toBe(newStr);
    });

    it('3 - returns original string', () => {
        const s = 'abcdb';
        const newStr = s;
        expect(compressString(s)).toBe(newStr);
    });

    it('4 - returns original string if compressed string is of equal length', () => {
        const s = 'aabbcc';
        const newStr = s;
        expect(compressString(s)).toBe(newStr);
    });
});
