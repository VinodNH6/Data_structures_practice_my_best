const RunTestCases = require("../operations/TestData");




//Level Order
const treeLevelOrder = (root) => {
    console.log(root);
    
    var queue = [];
    queue.push(root);
    while (queue.length != 0) {
        var tempNode = queue.shift();
        console.log(tempNode.data);

        if (tempNode.left != null) {
            queue.push(tempNode.left);
        }

        if (tempNode.right != null) {
            queue.push(tempNode.right);
        }
    }

    return queue;
}





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


RunTestCases(treeLevelOrder, (result) => {
    console.log("Tree level order is: ", result);
}, testData);

