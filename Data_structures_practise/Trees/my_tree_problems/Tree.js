
// Node.js
var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

// Tree.js
var Tree = function() {
    this.root = null;
}

Tree.prototype.insert = function(node, data) {
    if (node == null){
    	node = new Node(data);
    }
 	else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
}


const createSumTree = () => {
    root = new Node(26)
    root.left= new Node(10)
    root.right = new Node(3)
    root.left.left = new Node(4)
    root.left.right = new Node(6)
    root.right.right = new Node(3)

    // root.right.left = new Node(3);    //makes NOT sum tree

    return root;
}


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



const topViewOfBinaryTree_1_Queue = (root, hdist, hdistArr) => {
    
    if(root == null) {
        return;
    }
    
    if(hdistArr[hdist]) {
        //if this horizontal level is already visited.. then don't add it again.
        // hdistArr[hdist] = [...hdistArr[hdist], root.data];
    } else {
        hdistArr[hdist] = [root.data];
    }
    topViewOfBinaryTree_1_Queue(root.left, hdist - 1, hdistArr);
    console.log(root.data);
    topViewOfBinaryTree_1_Queue(root.right, hdist + 1, hdistArr);
}
//https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/?ref=rp




const getSum = (root) => {  //Pre-order
    console.log(root)
    if(root == null) 
        return 0;
    
    return root.data + getSum(root.left) + getSum(root.right);
}


//https://www.youtube.com/watch?v=zEIWqb8nWDk
//get root + leftsum + rightsurm.. if true then go down.. do same for left and right subtrees.
const isBinaryTree_SumTree_TopToBottom_summation = (root) => {
    console.log(root);
    if(root == null)
        return true;

    if(root.left == null && root.right == null) {
        return true;
    }
    
    let lsum = getSum(root.left);    //get sum of Left tree
    let rsum = getSum(root.right);   //get sum of Right tree
    
    if(root.data == lsum + rsum) {
        return isBinaryTree_SumTree_TopToBottom_summation(root.left) && isBinaryTree_SumTree_TopToBottom_summation(root.right);
    } else {
        return false;
    }
}



//https://www.youtube.com/watch?v=-1SIodPrhss
//from bottom nodes keep checking if node is sum tree or not... go up and do same..
const isBinaryTree_SumTree_BottomToTop_verification = (root, flag) => {
    if(root == null) {
        return 0;
    }
    
    if(root.left == null && root.right == null) {
        return root.data;
    }
    
    let lsum = isBinaryTree_SumTree_BottomToTop_verification(root.left, flag);
    let rsum = isBinaryTree_SumTree_BottomToTop_verification(root.right, flag);

    if(root.data == lsum + rsum) {
        //do nothing..
    }
    else {
        flag.push('false');
    }

    return root.data + lsum + rsum;
}




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


const vin_Insert_Node = (root, data) => {
    if(root != null) {
        if(data < root.data) {
            // root.left = new Node(data);
            root.left = insertNode(root.left, data);
        } else {
            // root.right = new Node(data);
            root.right = insertNode(root.right, data);
        }
        return root;
    } else {
        return new Node(data);
    }
}



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


const inOrder_Traversal = (root) => {
    if(root != null) {
        inOrder_Traversal(root.left);
        console.log(root.data);
        inOrder_Traversal(root.right);
    }
}



const inOrder_Traversal_STORE = (root, arr) => {
    if(root != null) {
        inOrder_Traversal_STORE(root.left, arr);
        // console.log(root.data);
        arr.push(root.data);
        inOrder_Traversal_STORE(root.right, arr);
    }
}




//Create Binary Tree
const printTreeHeight = (n, nodes) => {
    // var nodes = [3, 5, 2, 1, 4, 6, 7];
    // var n = 7;

    let tree = new Tree();
    for (let i=0; i<n; i++) {
        const m = nodes[i];
        tree.root = tree.insert(tree.root, m);

        //vin-work
        // tree.root = tree.vin_Insert_Node(tree.root, m)
    }

    console.log("=======BFS=======");
    treeBfsTraversal(tree.root);

    console.log("=======ZIG-ZAG=======");
    zigzagTraversal(tree.root);

    console.log("=======LEAF-NODES=======");
    printLeafNodes(tree.root);

    console.log("=======IN-ORDER-TRAVERSAL=======");
    inOrder_Traversal(tree.root);

    console.log("=======K-th-LARGEST-ELEMENT=======");
    let store = [];
    let k = 3;
    inOrder_Traversal_STORE(tree.root, store);
    console.log(store);
    console.log("Kth largest element: ", store[store.length - k]);


    console.log("======== LEFT VIEW OF BINARY TREE ========");
    // console.log('#### STACK - QUEUE ####');
    // leftViewOfBinaryTree_stack_queue(tree.root);

    console.log('#### 2 QUEUES ####');
    leftViewOfBinaryTree_2_queue(tree.root);

    console.log('#### 1 QUEUE ####');
    leftViewOfBinaryTree_1_Queue(tree.root);

    // console.log('#### 1 QUEUE & NULL pointer ####');
    // leftViewOfBinaryTree_1_Queue_and_null(tree.root);  //geeks for geeks


    console.log("======== TOP VIEW OF BINARY TREE ========");
    let hdistArr = {};
    topViewOfBinaryTree_1_Queue(tree.root, 0, hdistArr);
    console.log(hdistArr);


    console.log("=========== is BINARY TREE a SUM TREE =========");
    tree.root = createSumTree();

    console.log("isBinaryTree_SumTree ? - TopToBottom - ", isBinaryTree_SumTree_TopToBottom_summation(tree.root));
    
    // let flag = [];
    // isBinaryTree_SumTree_BottomToTop_verification(tree.root, flag);
    // console.log("isBinaryTree_SumTree ? - BottomToTop - " + flag.includes('false') ? 'NO' : 'YES');
}

//Test scenarios
const testData = [
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
    },
    {
        n: 6,
        nodes: [26, 10, 4, 6, 3, 3]         //sum tree
    }
]
testData.forEach(data => {
    const { n, nodes } = data;
    console.log("=============");
    console.log("## N: ", n);
    console.log("## Nodes: ", nodes.join(" "));
    console.log("=============");
    printTreeHeight(n, nodes);
})

