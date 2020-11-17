const findIntersection = (l1,l2) => {
    if (!l1.head || !l2.head) return null;
    
    let [c1, c2] = [l1.head, l2.head];
    let [length1, length2] = [0,0];

    while (c1 || c2) {
        if (c1 === c2) {
            if (length1 === length2) {
                return c1;
            } else {
                break;
            }
        } else {
            if (!c1.next && !c2.next) {
                return null;
            } else if (!c1.next) {
                c2 = c2.next
                length2++;
            } else if (!c2.next) {
                c1 = c1.next
                length1++;
            } else {
                [c1, c2] = [c1.next, c2.next]
                length1++;
                length2++;
            }
        }
    }
    
    [c1, c2] = [l1.head, l2.head];
    
    while (c1 || c2) {
        while (length1 !== length2) {    
            if (length1 > length2) {
                c1 = c1.next;
                length1--;
            } else {
                c2 = c2.next;
                length2--;
            }
        }

        if (c1 === c2) return c1;
        
        [c1, c2] = [c1.next, c2.next];
    }
}

module.exports = findIntersection