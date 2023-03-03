
const createLinkedList = require('../operations/CreateLinkedList.js');
const traversal = require('../operations/Traversal.js');



// const items = [8, 9, 4, 2, 5, 6, 1];     //NOT sorted..
// const items = [1, 2, 3, 4, 5, 9, 7];     //NOT sorted..
const items = [1, 2, 3, 4, 5, 6, 7];        //YES sorted..

const head = createLinkedList(items);
traversal(head);


const checkIfSorted = (head) => {
    let current = head;
    let max = 0;
    while(current != null) {
        if(current.data > max) {
            max = current.data;
        }
        else {
            console.log('NOT sorted...');
            return;
        }
        console.log(current.data);
        current = current.next;
    }
    console.log('YES sorted...');
}

checkIfSorted(head);