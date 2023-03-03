const RunTestCases = require("../operations/TestData");

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



console.log("=======LEAF-NODES=======");
RunTestCases(printLeafNodes);