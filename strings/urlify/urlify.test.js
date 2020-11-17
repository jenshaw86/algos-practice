const urlify = require('./urlify')

describe('urlify', () => {
    it('returns "Mr%20John%20Smith"', () => {
        const s = 'Mr John Smith    ';
        const l = 13
        const urlStr = 'Mr%20John%20Smith'
        expect(urlify(s, l)).toBe(urlStr);
    });
    
});
