const isStringRotation = require('./string-rotation')

describe('isStringRotation', () => {
    it('returns true if "erbottlewat" is rotation of "waterbottle"', () => {
        const [s1, s2] = ["waterbottle", "erbottlewat"];
        expect(isStringRotation(s1,s2)).toBe(true);
    });
    
    it('has extra letter and returns false if "erbottlewate" is rotation of "waterbottle"', () => {
        const [s1, s2] = ["waterbottle", "erbottlewate"];
        expect(isStringRotation(s1,s2)).toBe(false);
    });

    it('is missing letter and returns false if "erbottlewate" is rotation of "waterbottle"', () => {
        const [s1, s2] = ["waterbottle", "erbottlewate"];
        expect(isStringRotation(s1,s2)).toBe(false);
    });
});
