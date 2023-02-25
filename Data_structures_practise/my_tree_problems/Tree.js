
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








const treeBfsTraversal = (root) => {
    let queueArr = [];
    queueArr.push(root);
    while(queueArr.length != 0) {
        let temp = queueArr.shift();

        console.log(temp.data);
        temp.left && queueArr.push(temp.left);
        temp.right && queueArr.push(temp.right);
    }
}


const zigzagTraversal = (root) => {
    let stackArr1 = [];
    let stackArr2 = [];

    stackArr1.push(root);
    while(stackArr1.length != 0) {

        while(stackArr1.length != 0) {
            let temp = stackArr1.pop();

            console.log(temp && temp.data);
            temp.left && stackArr2.push(temp.left);
            temp.right && stackArr2.push(temp.right);
        }
        while(stackArr2.length != 0) {
            let temp2 = stackArr2.pop();

            console.log(temp2 && temp2.data);
            temp2.right && stackArr1.push(temp2.right);
            temp2.left && stackArr1.push(temp2.left);
        }

    }
}


const vin_Insert_Node = (root, data) => {
    if(root != null) {
        if(data < root.data) {
            // root.left = new Node(data);
            root.left = insertNode(root.left, data);
        } else {
            // root.right = new Node(data);
            root.right = insertNode(root.right, data);
        }
        return root;
    } else {
        return new Node(data);
    }
}



const printLeafNodes = (root) => {
    if(root == null) {
        return;
    }
    if(root != null && root.left == null && root.right == null) {
        console.log(root.data);
    }
    printLeafNodes(root.left);
    printLeafNodes(root.right);
}


const inOrder_Traversal = (root) => {
    if(root != null) {
        inOrder_Traversal(root.left);
        console.log(root.data);
        inOrder_Traversal(root.right);
    }
}



const inOrder_Traversal_STORE = (root, arr) => {
    if(root != null) {
        inOrder_Traversal_STORE(root.left, arr);
        // console.log(root.data);
        arr.push(root.data);
        inOrder_Traversal_STORE(root.right, arr);
    }
}




//Create Binary Tree
const printTreeHeight = (n, nodes) => {
    // var nodes = [3, 5, 2, 1, 4, 6, 7];
    // var n = 7;

    let tree = new Tree();
    for (let i=0; i<n; i++) {
        const m = nodes[i];
        tree.root = tree.insert(tree.root, m);

        //vin-work
        // tree.root = tree.vin_Insert_Node(tree.root, m)
    }

    console.log("=======BFS=======");
    treeBfsTraversal(tree.root);

    console.log("=======ZIG-ZAG=======");
    zigzagTraversal(tree.root);

    console.log("=======LEAF-NODES=======");
    printLeafNodes(tree.root);

    console.log("=======IN-ORDER-TRAVERSAL=======");
    inOrder_Traversal(tree.root);

    console.log("=======K-th-LARGEST-ELEMENT=======");
    let store = [];
    let k = 3;
    inOrder_Traversal_STORE(tree.root, store);
    console.log(store);
    console.log("Kth largest element: ", store[store.length - k]);
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

