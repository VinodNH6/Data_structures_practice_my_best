const RunTestCases = require("../operations/TestData");





const treeHeight = (root) => {
    // console.log(root); 
    if (root == null)
        return -1;

    const leftHeight = treeHeight(root.left);
    const rightHeight = treeHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}





RunTestCases(treeHeight, (height) => {
    console.log("Tree height is: ", height);
});

