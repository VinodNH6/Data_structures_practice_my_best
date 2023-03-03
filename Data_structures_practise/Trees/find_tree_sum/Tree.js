const RunTestCases = require("../operations/TestData");





const treeSum = (root) => {
    if (root == null)
        return 0;

    const leftSum = root.left != null ? treeSum(root.left) : 0;
    const rightSum = root.right != null ? treeSum(root.right) : 0;

    return leftSum + rightSum + root.data;
}





RunTestCases(treeSum, (sum) => {
    console.log("Tree sum is: ", sum);
});
