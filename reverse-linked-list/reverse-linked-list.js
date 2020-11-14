const ll = require('../linked-list-implementation/linked-list-implementation');

let values = [1,2,3,4,5];
let linkedList = ll.createLinkedList(values);

const reverseLinkedList = head => {
    let prev = null;
    let curr = head;
    let temp = null;

    while (curr !== null) {
        temp = curr.next ? curr.next : null;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
    console.log(prev);
}

reverseLinkedList(linkedList.head);