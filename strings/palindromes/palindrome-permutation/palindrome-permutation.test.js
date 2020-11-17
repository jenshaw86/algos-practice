const palindromePermutation = require('./palindrome-permutation')

describe('palindromePermutation', () => {
    it('returns true if string can be rearranged into a palindrome', () => {
        expect(palindromePermutation('tact coa')).toBe(true);
    });
    
    it('returns true if non-case-sensitive string can be rearranged into a palindrome', () => {
        expect(palindromePermutation('Tact coa')).toBe(true);
    });

    it('returns false if string cannot be rearranged into a palindrome', () => {
        expect(palindromePermutation('tactcoasof')).toBe(false);
    });

    it('returns true if string is empty', () => {
        expect(palindromePermutation('')).toBe(true);
    });

});
