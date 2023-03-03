const RunTestCases = require("../operations/TestData");



const inOrder_Traversal = (root) => {
    if(root != null) {
        inOrder_Traversal(root.left);
        console.log(root.data);
        inOrder_Traversal(root.right);
    }
}




console.log("=======IN-ORDER  TRAVERSAL=======");
RunTestCases(inOrder_Traversal);

