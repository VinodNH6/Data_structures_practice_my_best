const RunTestCases = require("../operations/TestData");



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



const testData = [
    {
        n : 7,
        nodes : [3, 5, 2, 1, 4, 6, 7]
    }
];


console.log("==== Pre Order ====");
RunTestCases(tree_DFS_Pre_Order, null, testData);

console.log("==== In Order====");
RunTestCases(tree_DFS_In_Order, null, testData);

console.log("==== Post Order====");
RunTestCases(tree_DFS_Post_Order, null, testData);

