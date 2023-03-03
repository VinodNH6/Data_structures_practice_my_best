const Tree = require("./Tree.js");


const create_binary_tree = (n, nodes) => {
    let tree = new Tree();
    for (let i=0; i<n; i++) {
        const m = nodes[i];
        tree.root = tree.insert(tree.root, m);
    }
    return tree.root;
}


module.exports = create_binary_tree;