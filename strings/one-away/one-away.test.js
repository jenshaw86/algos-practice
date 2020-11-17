const oneAway = require('./one-away')

describe('oneAway', () => {
    it('returns true  if pale is one character away from ple', () => {
        const s1 = 'pale';
        const s2 = 'ple';
        expect(oneAway(s1, s2)).toBe(true);    
    });
    
    it('returns true  if pales is one character away from pale', () => {
        const s1 = 'pales';
        const s2 = 'pale';
        expect(oneAway(s1, s2)).toBe(true);    
    });

    it('returns true  if pale is one character away from bale', () => {
        const s1 = 'pale';
        const s2 = 'bale';
        expect(oneAway(s1, s2)).toBe(true);    
    });

    fit('returns false if pale is more than one character away from bake', () => {
        const s1 = 'bake';
        const s2 = 'pale';
        expect(oneAway(s1, s2)).toBe(false);
    });

    it('returns false if bakers is more than one character away from bake', () => {
        const s1 = 'bakers';
        const s2 = 'bake';
        expect(oneAway(s1, s2)).toBe(false);
    });

    it('returns false if lock is more than one character away from locket', () => {
        const s1 = 'lock';
        const s2 = 'locket';
        expect(oneAway(s1, s2)).toBe(false);
    });
});
