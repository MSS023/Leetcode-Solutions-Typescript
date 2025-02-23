import { TreeNode } from "./TreeNode";

function getLeftRightSubtreeSepIdx(
  preorder: number[],
  postorder: number[]
): number {
  const stack: number[] = [];
  let postIdx = 0;
  for (let idx = 1; idx < preorder.length; idx += 1) {
    stack.push(preorder[idx]);

    while (stack.length > 0) {
      if (postorder[postIdx] != stack[stack.length - 1]) break;
      postIdx += 1;
      stack.pop();
    }

    if (stack.length == 0) {
      return idx;
    }
  }
  return preorder.length - 1;
}

function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  if (preorder.length == 0 || postorder.length == 0) {
    return null;
  }

  const rootEle = preorder[0];
  const root = new TreeNode(rootEle);

  const sepIdx = getLeftRightSubtreeSepIdx(preorder, postorder);
  const leftPreorder = preorder.slice(1, sepIdx + 1);
  const leftPostorder = postorder.slice(0, sepIdx);
  root.left = constructFromPrePost(leftPreorder, leftPostorder);

  const rightPreorder = preorder.slice(sepIdx + 1);
  const rightPostorder = postorder.slice(sepIdx);
  root.right = constructFromPrePost(rightPreorder, rightPostorder);

  return root;
}

export default constructFromPrePost;
