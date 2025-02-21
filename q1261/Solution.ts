import TreeNode from "./TreeNode";

class FindElements {
  root: TreeNode | null;
  passedValues: Set<number>;
  constructor(root: TreeNode | null) {
    this.root = root;
    this.passedValues = new Set();

    if (this.root !== null) {
      this.root.val = 0;
    }

    this.dfs(this.root);
  }

  dfs(node: TreeNode | null): void {
    if (node === null) {
      return;
    }

    const val = node.val;
    this.passedValues.add(val);

    if (node.left !== null) {
      node.left.val = 2 * val + 1;
      this.dfs(node.left);
    }

    if (node.right !== null) {
      node.right.val = 2 * val + 2;
      this.dfs(node.right);
    }
  }

  find(target: number): boolean {
    return this.passedValues.has(target);
  }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

export default FindElements;
