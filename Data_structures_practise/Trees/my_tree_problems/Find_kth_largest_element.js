const create_binary_tree = require("../operations/CreateBinaryTree");



const inOrder_Traversal_STORE = (root, arr) => {
    if(root != null) {
        inOrder_Traversal_STORE(root.left, arr);
        // console.log(root.data);
        arr.push(root.data);
        inOrder_Traversal_STORE(root.right, arr);
    }
}





const n = 7;
const nodes = [3, 5, 2, 1, 4, 6, 7];
const root = create_binary_tree(n, nodes);

console.log("=======K-th-LARGEST-ELEMENT=======");
let store = [];
let k = 3;
inOrder_Traversal_STORE(root, store);
console.log(store);
console.log("Kth largest element: ", store[store.length - k]);

