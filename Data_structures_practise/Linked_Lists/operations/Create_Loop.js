
const createLoop = (head, loopItem) => {
    let current = head;
    let loopNode = null;
    let lastNode = null;
    while(current != null) {
        console.group(current.data, " -> ");
        if(current.data == loopItem) {
            loopNode = current;
        }
        lastNode = current;
        current = current.next;
    }

    lastNode.next = loopNode;       //point last node to any other node in linked list.... it creates loop..
}

module.exports = createLoop;