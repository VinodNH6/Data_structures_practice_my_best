const createLinkedList = require('../operations/CreateLinkedList.js');
const traversal = require('../operations/Traversal.js');



const items = [8, 9, 4, 2, 5, 6, 1];     

const head = createLinkedList(items);
traversal(head);

const print_middle_node = (head) => {
    let slow = head;
    let fast = head;
    while(slow != null && fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow);
    console.log(fast);
}

print_middle_node(head);

// Time Complexity: O(N), As we are traversing the list only once.
// Auxiliary Space: O(1), As constant extra space is used.



/*
Solution 1:  [hashmap]
===========
- store all elements in hashmap
- return middle element

Time Complexity: O(n), for traversing.
Auxiliary Space: O(n), for Vector.



Solution 2: [count of nodes]
===========
- traverse and count no. of nodes.
- now traverse again till count/2

Time Complexity: O(n) where n is no of nodes in linked list
Auxiliary Space: O(1)



Solution 3: [slow & fast pointers]
==========
- see above.

*/