const matchPattern = require('./match-pattern')

describe('matchPattern', () => {
    it('01 - returns true', () => {
        const s = "Hello World";
        const p = "He*rl*"

        expect(matchPattern(s,p)).toBe(true);
    });

    it('02 - returns false', () => {
        const s = "Star Wars";
        const p = "Sp*ar*"

        expect(matchPattern(s,p)).toBe(false);
    });
    
    it('03 - returns true', () => {
        const s = "Taco Bell";
        const p = "*co*ll*"

        expect(matchPattern(s,p)).toBe(true);
    });

    it('04 - returns true', () => {
        const s = "Mellow Yellow";
        const p = "*el*ll*"

        expect(matchPattern(s,p)).toBe(true);
    });

    it('05 - returns true', () => {
        const s = "Bet on Mets";
        const p = "*Be*"

        expect(matchPattern(s,p)).toBe(true);
    });

    it('05 - returns true', () => {
        const s = "Tall tale";
        const p = "*al*le"

        expect(matchPattern(s,p)).toBe(true);
    });

    it('06 - returns false', () => {
        const s = "Hello";
        const p = "*el*ll*"

        expect(matchPattern(s,p)).toBe(false);
    })
});
