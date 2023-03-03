const create_binary_tree = require("../operations/CreateBinaryTree");




const topViewOfBinaryTree_1_Queue = (root, hdist, hdistArr) => {
    
    if(root == null) {
        return;
    }
    
    if(hdistArr[hdist]) {
        //if this horizontal level is already visited.. then don't add it again.
        // hdistArr[hdist] = [...hdistArr[hdist], root.data];
    } else {
        hdistArr[hdist] = [root.data];
    }
    topViewOfBinaryTree_1_Queue(root.left, hdist - 1, hdistArr);
    console.log(root.data);
    topViewOfBinaryTree_1_Queue(root.right, hdist + 1, hdistArr);
}
//https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/?ref=rp





const n = 7;
const nodes = [3, 5, 2, 1, 4, 6, 7];
const root = create_binary_tree(n, nodes);

console.log("======== TOP VIEW OF BINARY TREE ========");
let hdistArr = {};
topViewOfBinaryTree_1_Queue(root, 0, hdistArr);
console.log(hdistArr);
