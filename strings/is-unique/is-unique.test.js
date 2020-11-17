const isUnique = require('./is-unique')

describe('isUnique', () => {
    it('returns true if string 1 is empty', () => {
        const str = '';
        expect(isUnique(str)).toBe(true);
    });

    it('returns true if string 2 has no repeating characters', () => {
        const str = 'abcdefg';
        expect(isUnique(str)).toBe(true);
    });
    
    it('returns true if string 3 has same characters with different cases', () => {
        const str = 'ABba';
        expect(isUnique(str)).toBe(true);
    })
    it('returns false if string has any repeating characters', () => {
        const str = 'pizza';
        expect(isUnique(str)).toBe(false);
    });


});
