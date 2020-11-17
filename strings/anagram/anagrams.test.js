const isAnagram = require('./anagrams')

describe('isAnagram', () => {
    it('returns true if strings are anagrams', () => {
        const str1 = 'seat';
        const str2 = 'eats';
        expect(isAnagram(str1, str2)).toBe(true);
    });

    it('returns true if anagrams have mismatched caps', () => {
        const str1 = 'Sand';
        const str2 = 'Dans';
        expect(isAnagram(str1, str2)).toBe(true);
    });

    it('returns false if strings have different lengths', () => {
        const str1 = 'season';
        const str2 = 'seasons';
        expect(isAnagram(str1, str2)).toBe(false);
    });

    it('returns false if string are not anagrams', () => {
        const str1 = 'seas';
        const str2 = 'sees';
        expect(isAnagram(str1, str2)).toBe(false);
    });
});
