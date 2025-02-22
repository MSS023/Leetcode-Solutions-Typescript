import recoverFromPreorder from "./Solution"; "./Solution";
import TreeNode from "./TreeNode";

function inorderTraversal(root: TreeNode | null): void {
    if (root == null) {
        return;
    }

    inorderTraversal(root.left);
    console.log(root.val, " ");
    inorderTraversal(root.right);
}

(function driver() {
    const testCases = ["1-2--3--4-5--6--7", "1-2--3---4-5--6---7","1-401--349---90--88"];

    for (const test of testCases) {
        const node = recoverFromPreorder(test);
        inorderTraversal(node);
        console.log("\n");
    }
})()