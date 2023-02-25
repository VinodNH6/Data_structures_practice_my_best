
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


//Pre-order
const tree_DFS_Pre_Order = (root) => {
    // console.log(root);
    
    var stack = [];
    stack.push(root);
    while (stack.length != 0) {
        var tempNode = stack.pop();
        console.log(tempNode.data);

        /* Push right child */
        if (tempNode.right != null) {
            stack.push(tempNode.right);
        }

        /* Push left child */
        if (tempNode.left != null) {
            stack.push(tempNode.left);
        }


    }

    return stack;
}


//In-order
const tree_DFS_In_Order = (root) => {
    // console.log(root);
    
    if(root == null) 
        return;

    const stack = [];
    let curr = root;
    while(stack.length || curr != null){
        if(curr != null) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            console.log(curr.data);
            curr = curr.right;
        }        
    }

    return stack;
}


//Post-order
const tree_DFS_Post_Order = (root) => {
    // console.log(root);
        
    const s1 = [];
    const s2 = [];
    let curr;

    s1.push(root);

    while(s1.length) {
        curr = s1.pop();
        if (curr.left) s1.push(curr.left);
        if (curr.right) s1.push(curr.right);
        s2.push(curr);
    }

    while (s2.length) {
        curr = s2.pop();
        console.log(curr.data);
    }
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

const printTree = (n, nodes) => {
    const root = create_binary_tree(n, nodes);
    console.log("==== Pre Order ====");
    tree_DFS_Pre_Order(root);
    console.log("==== In Order====");
    tree_DFS_In_Order(root);
    console.log("==== Post Order====");
    tree_DFS_Post_Order(root);
}





//Test scenarios
const testData = [
    {
        n : 7,
        nodes : [3, 5, 2, 1, 4, 6, 7]
    },
]
testData.forEach(data => {
    const { n, nodes } = data;
    console.log("=============");
    console.log("## N: ", n);
    console.log("## Nodes: ", nodes.join(" "));
    console.log("=============");
    printTree(n, nodes);
})

