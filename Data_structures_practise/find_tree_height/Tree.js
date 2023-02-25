
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






const treeHeight = (root) => {
    console.log(root); 
    if (root == null)
        return -1;

    const leftHeight = treeHeight(root.left);
    const rightHeight = treeHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
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

    let height = treeHeight(tree.root);
    console.log("Tree height is: ", height);
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

