
const traversal = (head) => {
    let current = head;
    while(current != null) {
        console.group(current.data, " -> ");
        current = current.next;
    }
}

module.exports = traversal;