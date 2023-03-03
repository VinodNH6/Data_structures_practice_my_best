
const createLinkedList = require('../operations/CreateLinkedList.js');
const traversal = require('../operations/Traversal.js');



const items = [8, 9, 4, 2, 5, 6, 1];
const head = createLinkedList(items);
traversal(head);


const findLength = (head) => {
    let current = head;
    let count = 0;

    while(current != null) {
        count = count + 1;
        console.log(current.data);
        current = current.next;
    }

    return count;
}

const len = findLength(head);
console.log("SLL length is: ", len);

// https://www.geeksforgeeks.org/find-length-of-a-linked-list-iterative-and-recursive/?ref=rp

