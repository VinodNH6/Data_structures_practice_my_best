
// Node.js
var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

// Tree.js
var Tree = function() {
    this.root = null;
}

Tree.prototype.insert = function(node, data) {
    if (node == null){
    	node = new Node(data);
    }
 	else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
}




const treeSum = (root) => {
    if (root == null)
        return 0;

    const leftSum = root.left != null ? treeSum(root.left) : 0;
    const rightSum = root.right != null ? treeSum(root.right) : 0;

    return leftSum + rightSum + root.data;
}






//Create Binary Tree
const printTreeHeight = (n, nodes) => {
    // var nodes = [3, 5, 2, 1, 4, 6, 7];
    // var n = 7;

    let tree = new Tree();
    for (let i=0; i<n; i++) {
        const m = nodes[i];
        tree.root = tree.insert(tree.root, m);
    }

    let sum = treeSum(tree.root);
    console.log("Tree sum is: ", sum);
}

//Test scenarios
const testData = [
    {
        n : 7,
        nodes : [3, 5, 2, 1, 4, 6, 7]
    },
    {
        n: 5,
        nodes: [3, 1, 7, 5, 4]
    },
    {
        n: 1,
        nodes: [15]
    }
]
testData.forEach(data => {
    const { n, nodes } = data;
    console.log("=============");
    console.log("## N: ", n);
    console.log("## Nodes: ", nodes.join(" "));
    console.log("=============");
    printTreeHeight(n, nodes);
})

