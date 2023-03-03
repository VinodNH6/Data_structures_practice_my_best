const create_binary_tree = require("./CreateBinaryTree");


const myTestData = [
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
    }
];



const RunTestCases = (testFunc, callback, testData = myTestData) => {
    console.log("Running TEST CASES: ");

    testData.forEach(data => {
        const { n, nodes } = data;
        console.log("=============");
        console.log("## N: ", n);
        console.log("## Nodes: ", nodes.join(" "));
        console.log("=============");
    
        const root = create_binary_tree(n, nodes);
        const result = testFunc(root);
        callback && typeof callback == 'function' && callback(result);
    });

}

module.exports = RunTestCases;