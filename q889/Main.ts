import constructFromPrePost from "./Solution";
import { TreeNode } from "./TreeNode";

function inorderTraversal(root: TreeNode | null): void {
  if (root == null) {
    return;
  }

  inorderTraversal(root.left);
  console.log(root.val, " ");
  inorderTraversal(root.right);
}

(function driver(): void {
  const testCases = [
    [
      [1, 2, 4, 5, 3, 6, 7],
      [4, 5, 2, 6, 7, 3, 1],
    ],
    [
      [1, 2, 3, 4, 5],
      [4, 3, 5, 2, 1],
    ],
  ];

  for (const test of testCases) {
    const root = constructFromPrePost(test[0], test[1]);
    inorderTraversal(root);
    console.log("\n");
  }
})();
