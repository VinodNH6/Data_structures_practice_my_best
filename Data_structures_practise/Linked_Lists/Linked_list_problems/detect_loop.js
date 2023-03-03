const createLinkedList = require('../operations/CreateLinkedList.js');
const traversal = require('../operations/Traversal.js');
const createLoop = require('../operations/Create_Loop.js');
const removeLoop = require('./remove_loop.js');


const loopItems = [8, 1, 9, 4, 2, 3, 7, 2, 9];     
const head = createLinkedList(loopItems);
traversal(head);


console.log("# CREATING LOOP.......");
createLoop(head, 2);
// traversal(head);         //go into LOOP calls.... //expected..


const detect_loop_hashing = (head) => {
    let hash = {};
    
    let current = head;
    while(current != null) {
        console.log(current.data);

        if(hash[current.data] == current) {
            console.log("Loop detected...");
            break;
        } else {
            hash[current.data] = current;
        }

        current = current.next;
    }
}

console.log('# Solution 1: DETECING LOOP.......');
detect_loop_hashing(head);


const detect_loop = (head) => {
    let slow = head;
    let fast = head;
    while(slow != null && fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) {
            console.log('** Loop found **');
            // removeLoop(head, slow);     //remove Loop
            break;
        }
    }
    console.log(slow);
    console.log(fast);
}

console.log('# Solution 2: DETECING LOOP.......');
detect_loop(head);

// traversal(head);


// Link: https://www.javatpoint.com/detect-loop-in-a-linked-list

// Time Complexity: O(N), As we are traversing the list only once.
// Auxiliary Space: O(1), As constant extra space is used.



/*
Solution 1:  [hashmap]
===========
- Traverse the list individually and keep putting the node addresses in a Hash Table. 
- At any point, if NULL is reached then return false 
- If the next of the current nodes points to any of the previously stored nodes in  Hash then return true.

Time complexity: O(N), Only one traversal of the loop is needed.
Auxiliary Space: O(N), N is the space required to store the value in the hashmap.



Solution 2: [change Node structure]
===========
- Have a visited flag with each node.
- Traverse the linked list and keep marking visited nodes.
- If you see a visited node again then there is a loop.

Time complexity: O(N), Only one traversal of the loop is needed.
Auxiliary Space: O(1)



Solution 3: [slow & fast pointers]
==========
- see above.

//this is called as Floyd’s Cycle-Finding Algorithm:

*/