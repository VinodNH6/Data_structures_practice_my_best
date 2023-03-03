// we need to make the last or Loop node’s next pointer to NULL.

const removeLoop = (head, slow) => {
    let current = head;
    while(current != null) {
        console.log(current.data);
        if(current == slow) {
            current.next = null;
        }
        current = current.next;
    }
    
}

module.exports = removeLoop;