
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


//Level Order
const treeLevelOrder = (root) => {
    console.log(root);
    
    var queue = [];
    queue.push(root);
    while (queue.length != 0) {
        var tempNode = queue.shift();
        console.log(tempNode.data);

        /* Enqueue left child */
        if (tempNode.left != null) {
            queue.push(tempNode.left);
        }

        /* Enqueue right child */
        if (tempNode.right != null) {
            queue.push(tempNode.right);
        }
    }

    return queue;
}




//Create Binary Tree
const create_binary_tree = (n, nodes) => {
    let tree = new Tree();
    for (let i=0; i<n; i++) {
        const m = nodes[i];
        tree.root = tree.insert(tree.root, m);
    }
    return tree.root;
}

const printTree_leverOrder = (n, nodes) => {
    const root = create_binary_tree(n, nodes);
    let levelOrder = treeLevelOrder(root);
    console.log("Tree level order is: ", levelOrder);
}

//Test scenarios
const testData = [
    {
        n : 7,
        nodes : [3, 5, 2, 1, 4, 6, 7]
    },
    {
        n : 6,
        nodes : [1, 2, 5, 3, 6, 4]
    }
]

testData.forEach(data => {
    const { n, nodes } = data;
    console.log("=============");
    console.log("## N: ", n);
    console.log("## Nodes: ", nodes.join(" "));
    console.log("=============");
    printTree_leverOrder(n, nodes);
})

