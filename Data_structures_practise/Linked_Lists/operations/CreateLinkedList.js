const LinkedList = require('./LinkedList.js');

// console.log(new Node(8).data);

const createLinkedList = (items) => {
    const ll = new LinkedList();
    
    console.log('INSERTING....');
    let head = null;
    for(let k = 0; k<items.length; k++) {
        head = ll.insert(items[k]);    
    }

    console.log('Linked List - CREATED....');
    console.log("HEAD: ", head);
    console.log("TAIL: ", ll.getTail());

    return head;
}

module.exports = createLinkedList;