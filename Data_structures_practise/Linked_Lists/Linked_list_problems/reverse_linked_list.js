const createLinkedList = require('../operations/CreateLinkedList.js');
const traversal = require('../operations/Traversal.js');


const loopItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];     
const head = createLinkedList(loopItems);
traversal(head);

const reverse_linked_list = (head) => {
    console.log(head);

    let current = head;     //current pointer.
    let previous = null;    //previous pointer.

    while(current != null) {
        console.log(current.data);

        let temp_nextNode = current.next;
        
        if(previous == null) {
            current.next = null;
        }
        if(previous != null) {
            current.next = previous;
        }

        previous = current;
        current = temp_nextNode;
    }

    // console.log(head);
    // console.log(previous);

    return previous;

    // you can update head pointer also....
    // head = previous;
    // return head;
}

console.log('# REVERSING LINKED LIST.....');
const reversedlist = reverse_linked_list(head);
traversal(reversedlist);