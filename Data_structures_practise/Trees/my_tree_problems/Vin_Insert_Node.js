const Tree = require("../operations/Tree.js");




const insert_Node = (root, data) => {
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





const createBinaryTree = (nodes) => {
    let root = null;

    let tree = new Tree();
    for (let i=0; i<nodes.length; i++) {
        const m = nodes[i];
        root = insert_Node(tree.root, m);
    }

    return root;
}






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
    },
    {
        n: 6,
        nodes: [26, 10, 4, 6, 3, 3]         //sum tree
    }
]
testData.forEach(data => {
    const { n, nodes } = data;
    console.log("=============");
    console.log("## N: ", n);
    console.log("## Nodes: ", nodes.join(" "));
    console.log("=============");

    const root = createBinaryTree(n, nodes);
})
