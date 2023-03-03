



const getSum = (root) => {  //Pre-order
    console.log(root)
    if(root == null) 
        return 0;
    
    return root.data + getSum(root.left) + getSum(root.right);
}


//https://www.youtube.com/watch?v=zEIWqb8nWDk
//get root + leftsum + rightsurm.. if true then go down.. do same for left and right subtrees.
const isBinaryTree_SumTree_TopToBottom_summation = (root) => {
    console.log(root);
    if(root == null)
        return true;

    if(root.left == null && root.right == null) {
        return true;
    }
    
    let lsum = getSum(root.left);    //get sum of Left tree
    let rsum = getSum(root.right);   //get sum of Right tree
    
    if(root.data == lsum + rsum) {
        return isBinaryTree_SumTree_TopToBottom_summation(root.left) && isBinaryTree_SumTree_TopToBottom_summation(root.right);
    } else {
        return false;
    }
}



//https://www.youtube.com/watch?v=-1SIodPrhss
//from bottom nodes keep checking if node is sum tree or not... go up and do same..
const isBinaryTree_SumTree_BottomToTop_verification = (root, flag) => {
    if(root == null) {
        return 0;
    }
    
    if(root.left == null && root.right == null) {
        return root.data;
    }
    
    let lsum = isBinaryTree_SumTree_BottomToTop_verification(root.left, flag);
    let rsum = isBinaryTree_SumTree_BottomToTop_verification(root.right, flag);

    if(root.data == lsum + rsum) {
        //do nothing..
    }
    else {
        flag.push('false');
    }

    return root.data + lsum + rsum;
}







const create_SumTree = () => {
    root = new Node(26)
    root.left= new Node(10)
    root.right = new Node(3)
    root.left.left = new Node(4)
    root.left.right = new Node(6)
    root.right.right = new Node(3)

    // root.right.left = new Node(3);    //makes NOT sum tree

    return root;
}



console.log("=========== is BINARY TREE a SUM TREE =========");
let tree = new Tree();
tree.root = create_SumTree();

console.log("isBinaryTree_SumTree ? - TopToBottom - ", isBinaryTree_SumTree_TopToBottom_summation(tree.root));

// let flag = [];
// isBinaryTree_SumTree_BottomToTop_verification(tree.root, flag);
// console.log("isBinaryTree_SumTree ? - BottomToTop - " + flag.includes('false') ? 'NO' : 'YES');