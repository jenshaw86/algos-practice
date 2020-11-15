const ll = require('../linked-list-implementation/linked-list-implementation');


const mergeSortedList = (l1,l2) => {
    let [p1,p2] = [l1.head,l2.head];
    let temp;

    while(p2) {
        if (p1.val <= p2.val) {
            if (!p1.next) {
                p1.next = p2;
                p2 = p2.next;
            } else if (p1.next.val >= p2.val) {
                temp = p2;
                p2 = p2.next;
                temp.next = p1.next;
                p1.next = temp;
            } 
            p1 = p1.next
        } else if (p1.val > p2.val) {
            temp = p2;
            p2 = p2.next;
            temp.next = p1;
            p1 = temp;
            l1.head = p1;
        } else {
            p1 = p1.next;
        }
    }

    ll.read(l1.head);
}

l1 = ll.create([3,4,7])
l2 = ll.create([1,1,2,3,5,6,7,8])

console.log(mergeSortedList(l1,l2));
