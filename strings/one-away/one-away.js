const oneAway = (s1,s2) => {
    const lengthDiff = Math.abs(s1.length - s2.length);
    if (lengthDiff > 1) return false;

    if (!lengthDiff) {
        return checkReplace(s1,s2);
    } else {
        return checkInjectOrRemove(s1,s2);
    }

    function checkReplace(s1, s2) {
        let foundMismatch = false;
        
        for (let i = 0; i < s1.length; i++) {
            if (s1.charAt(i) !== s2.charAt(i)) {
                if (foundMismatch) return false;
                foundMismatch = true;;
            }
        }

        return true;
    }

    function checkInjectOrRemove(s1, s2) {
        let l = s1.length > s2.length ? s1 : s2;
        let s = s1.length < s2.length ? s1 : s2;
        
        let i = 0;
        let j = 0;
        
        let foundMismatch = false;

        while (i < s.length && j < l.length) {
            if (s.charAt(i) !== l.charAt(j)) {
                if (foundMismatch) return false;
                foundMismatch = true;
                j++;
            }
            i++;
            j++;
        }

        return true;
    }
}

module.exports = oneAway;