class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

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

    delete(item) {
        if(this.head == null) {
            console.log("No nodes. So can't delete......");
            return null;
        }
        
        let current = this.head;
        let previous = this.head;
        while(current != null) {
            if(current.data == item) {
                previous.next = current.next;
                return;    //end loop once item is found....
            }
            previous = current;
            current = current.next;
        }
    }

    search(item) {
        if(this.head == null) {
            console.log('no item found.');
            return null;
        }

        let current = this.head;
        while(current != null) {
            if(current.data == item) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    traverse_linkedList() {
        let current = this.head;
        while(current != null) {
            console.group(current.data, " -> ");
            current = current.next;
        }
    }
}



const createLinkedList = () => {
    const items = [8, 9, 4, 2, 5, 6, 1];
    const ll = new LinkedList();
    
    console.log('INSERTING....');
    let head = null;
    for(let k = 0; k<items.length; k++) {
        head = ll.insert(items[k]);    
    }

    console.log('Linked List - CREATED....');
    console.log("HEAD: ", head);
    console.log("TAIL: ", ll.getTail());

    ll.traverse_linkedList(head);

    console.log('DELETING....');
    ll.delete(2);

    ll.traverse_linkedList(head);

    console.log('SEARCHING....');
    const foundNode = ll.search(5);
    console.log(foundNode);
}


createLinkedList();