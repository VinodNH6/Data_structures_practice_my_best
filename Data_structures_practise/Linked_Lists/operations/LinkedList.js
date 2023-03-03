const Node = require('./Node.js');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(item) {
        if(this.head == null) {
            const firstNode = new Node(item);
            this.head = firstNode;
            this.tail = firstNode;

            //create HEAD and TAIL once.
        } else {
            this.tail.next = new Node(item);
            this.tail = this.tail.next;

            //keep increasing TAIL.
        }

        return this.head;
    }

    getTail() {
        return this.tail;
    }
}

module.exports = LinkedList;