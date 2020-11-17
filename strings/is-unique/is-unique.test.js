const isUnique = require('./is-unique')

describe('isUnique', () => {
    it('returns true if string has no repeating characters', () => {
        const str = 'abcdefg';
        expect(isUnique(str)).toBe(true);
    });
    
    it('returns true if string is empty', () => {
        const str = '';
        expect(isUnique(str)).toBe(false);
    });
    
    it('returns false if string has any repeating characters', () => {
        const str = 'pizza';
        expect(isUnique(str)).toBe(false);
    });

});
