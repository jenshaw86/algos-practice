class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null    ;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

const createLinkedList = values => {
    let nodes = values.map(val => new ListNode(val));

    nodes.forEach((node, i) => node.next = nodes[i + 1]);

    return new LinkedList(nodes[0]);
}

const values = [1,2,3,4,5];
let linkedList = createLinkedList(values);

console.log(linkedList);