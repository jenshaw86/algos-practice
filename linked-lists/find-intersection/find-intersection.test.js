const findIntersection = require('./find-intersection')
const ll = require('../linked-list-implementation/linked-list-implementation')

describe('findIntersection', () => {
    it('returns the intersecting node on two linked lists of equal length', () => {
        const l1 = ll.create([1,2,3,4,5,6,7]);
        const l2 = ll.create([8,9,0]);
        const intersectingNode = l1.head.next.next.next;
        l2.head.next.next.next = intersectingNode;
        expect(findIntersection(l1,l2)).toBe(intersectingNode);
    });

    it('returns the intersecting node on two linked lists of unequal length', () => {
        const l1 = ll.create([1,2,3,4,5,6,7]);
        const l2 = ll.create([8,9,0]);
        const intersectingNode = l1.head.next.next.next;
        l2.head.next = intersectingNode;

        expect(findIntersection(l1,l2)).toEqual(intersectingNode);
    });

    it('returns null if two linked lists of equal length do not intersect', () => {
        const l1 = ll.create([1,2,3,4,5,6,7]);
        const l2 = ll.create([1,2,3,4,5,6,7]);

        expect(findIntersection(l1,l2)).toBe(null);
    });

    it('returns null if two linked lists of unequal length do not intersect', () => {
        const l1 = ll.create([1,2,3,4,5,6,7]);
        const l2 = ll.create([8,9,0])

        expect(findIntersection(l1,l2)).toBe(null);
    });

    it('returns null if the head of one linked list is already null', () => {
        const l1 = ll.create([]);
        const l2 = ll.create([8,9,0])

        expect(findIntersection(l1,l2)).toBe(null);
    });
});
