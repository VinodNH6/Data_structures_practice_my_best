
const createLinkedList = require('../operations/CreateLinkedList.js');
const traversal = require('../operations/Traversal.js');



const items = [8, 9, 4, 2, 5, 6, 1];
const head = createLinkedList(items);
traversal(head);


const subItems = [2, 5, 6];
const sublist_head = createLinkedList(subItems);
traversal(sublist_head);



const find_lists_identical = (list1, list2) => {
    while(list1 != null && list2 != null) {
        
        if(list1.data == list2.data) {
            //do nothing
        } else {
            return false;
        }

        list1 = list1.next;
        list2 = list2.next;
    }
    
    return true;
}




const sll_search_sublist = (head, sublist_head) => {

    if(head != null && sublist_head != null) {

        let list1 = null;
        let list2 = null;

        let current = head;
        while(current != null) {
            console.log(current.data);

            if(current.data == sublist_head.data) {
                console.log("Search Found...");
                list1 = current;
                list2 = sublist_head;
                break;
            }

            current = current.next;
        }

        if(list1 && list2) {
            return find_lists_identical(list1, list2);
        } else {
            return false;
        }
        
    } else {
        return false;
    }

}

const found = sll_search_sublist(head, sublist_head);
console.log("SUB LIST FOUND ? - ", found);





// https://www.geeksforgeeks.org/sublist-search-search-a-linked-list-in-another-list/?ref=rp

