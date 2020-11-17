const isPalindrome = require('./is-palindrome')

describe('isPalindrome', () => {
    
    it('returns true if single word is palindrome', () => {
        expect(isPalindrome('tacocat')).toBe(true);
    })

    it('returns false if single word is not palindrome', () => {
        expect(isPalindrome('racketeer')).toBe(false);
    });

    it('returns true if sentence is palindrome with spaces included', () => {
        expect(isPalindrome('azzip pizza')).toBe(true);
    });

    it('returns false', () => {
        expect(isPalindrome('This is a string')).toBe(false);
    });

    it('returns true if sentence is palindrome with spaces removed', () => {
        expect(isPalindrome('a nut for a jar of tuna')).toBe(true);
    })

    it('returns true if sentence is palidrome with uppercase letters', () => {
        expect(isPalindrome('A nut for a jar of tuna')).toBe(true);        
    })

    it('returns true if palindrome has a period', () => {
        expect(isPalindrome('a nut for a jar of tuna.')).toBe(true);        
    })

    it('returns true', () => {
        expect(isPalindrome('Madam, I\'m Adam.')).toBe(true);
    });
});
