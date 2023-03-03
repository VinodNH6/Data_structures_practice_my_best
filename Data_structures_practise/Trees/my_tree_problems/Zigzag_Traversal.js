const RunTestCases = require("../operations/TestData");
const testData = require("./TestData");



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




console.log("=======ZIG-ZAG TRAVERSAL=======");
RunTestCases(zigzagTraversal, null, testData);


