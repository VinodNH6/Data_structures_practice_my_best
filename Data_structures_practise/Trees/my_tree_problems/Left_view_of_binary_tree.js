const RunTestCases = require("../operations/TestData");


const leftViewOfBinaryTree_stack_queue = (root) => {
    let stack1 = [];
    let stack2 = [];
    stack1.push(root);
    while(stack1.length != 0) {
        while(stack1.length != 0){
            let temp = stack1.pop();
            if(stack1.length == 0)
                console.log(temp.data);
            temp.right && stack2.unshift(temp.right);
            temp.left && stack2.unshift(temp.left);
        }
        while(stack2.length != 0) {
            let tex = stack2.pop();
            if(stack2.length == 0)
                console.log(tex.data);
            tex.right && stack1.unshift(tex.right);
            tex.left && stack1.unshift(tex.left);
        }
    }
}


const leftViewOfBinaryTree_2_queue = (root) => {
    let stack1 = [];
    let stack2 = [];
    stack1.push(root);
    while(stack1.length != 0) {

        let p = 0;
        while(stack1.length != 0){
            let temp = stack1.shift();
            if(p == 0)
                console.log(temp.data);
            temp.left && stack2.push(temp.left);
            temp.right && stack2.push(temp.right);

            p++;
        }

        let k = 0;
        while(stack2.length != 0) {           
            let tex = stack2.shift();
            if(k == 0)
                console.log(tex.data);
            tex.left && stack1.push(tex.left);
            tex.right && stack1.push(tex.right);
            
            k++;
        }
    }
}




const leftViewOfBinaryTree_1_Queue = (root) => {
    let queue = [];
    queue.push(root);
    while(queue.length != 0) {
        
        // number of nodes at current level
        const n = queue.length;

        // Traverse all nodes of current level
        for(let i = 0; i<n; i++) {
            let temp = queue.shift();

            if(i == 0)
                console.log(temp.data);

            temp.left && queue.push(temp.left);
            temp.right && queue.push(temp.right);
        }
    }
}






console.log("======== LEFT VIEW OF BINARY TREE ========");
// console.log('#### STACK - QUEUE ####');
// leftViewOfBinaryTree_stack_queue(tree.root);


console.log('#### 2 QUEUES ####');
// leftViewOfBinaryTree_2_queue(tree.root);
RunTestCases(leftViewOfBinaryTree_2_queue);



console.log('#### 1 QUEUE ####');
// leftViewOfBinaryTree_1_Queue(tree.root);
RunTestCases(leftViewOfBinaryTree_1_Queue);


// console.log('#### 1 QUEUE & NULL pointer ####');
// leftViewOfBinaryTree_1_Queue_and_null(tree.root);  //geeks for geeks