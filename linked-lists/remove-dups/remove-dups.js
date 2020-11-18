const ll = require('../linked-list-implementation/linked-list-implementation');

const removeDups = head => {
    if (!head) return null;

    const hash = {};
    hash[head.val] = 1;

    let curr = head;

    while(curr) {
        if (curr.next) {
            if (hash[curr.next.val]) {
                curr.next = curr.next.next;
            } else {
                hash[curr.next.val] = 1;
            }
        }
        console.log(curr.val)
        curr = curr.next
    }

    return head
}

const list = ll.create([1,2,3,1,3,4,5,1,3,6])
removeDups(list.head)