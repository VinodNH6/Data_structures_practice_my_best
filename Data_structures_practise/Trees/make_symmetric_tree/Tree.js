const Node = require("../operations/Node.js");



const replaceTrees = (leftTree, rightTree) => {
    // console.log("# ", leftTree, rightTree);

    //true - case should be there in recursion.
    if(leftTree == null && rightTree == null) {
        return true;
    }

    //false - case should be there in recursion too.
    if(leftTree == null || rightTree == null) {
        return false;
    }



    if(leftTree.data == rightTree.data) {
        // return leftTree.left.data === rightTree.right.data
        //     && leftTree.right.data === rightTree.left.data;

        return replaceTrees(leftTree.left, rightTree.right) 
        && replaceTrees(leftTree.right, rightTree.left)
    }

    // if((leftTree.left == null || rightTree.right == null) &&
    //     leftTree.right == null || rightTree.left == null)
    //     return false;

    return false; 
}




const makeSymmetricTree = (root) => {
    if (root == null)
        return true;

    if(root.left && root.right && root.left.data == root.right.data) {
        return replaceTrees(root.left, root.right);
    }

    return false;
}






//Create Binary Tree
const createSymmetricTree = () => {
    
    //symtree1.jpg
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(2);
    root.left.left = new Node(3);
    root.left.right = new Node(4);
    root.right.left = new Node(4);
    root.right.right = new Node(3);

    //symtree2.jpg
    //......symtree1.jpg.....
    // root.left.right.left = new Node(5);
    // root.right.left.right = new Node(5);

    let sum = makeSymmetricTree(root);
    console.log("Is Tree symmetric : ", sum);
}


createSymmetricTree();



//Link: https://www.youtube.com/watch?v=UaZtKuaVNp0
