const RunTestCases = require("../operations/TestData");



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



console.log("=======BFS  TRAVERSAL=======");
RunTestCases(treeBfsTraversal);