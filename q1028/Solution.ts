import TreeNode from "./TreeNode";

class SequenceObject {
  depth: number = 0;
  ele: number;
}

function recoverFromPreorder(traversal: string): TreeNode | null {
  function getEleSequence(traversal: string): Array<SequenceObject> {
    const result: Array<SequenceObject> = [];

    let currObj = new SequenceObject();
    let idx = 0;
    while (idx < traversal.length) {
      if (traversal[idx] == "-") {
        currObj.depth += 1;
        idx += 1;
        continue;
      }

      let value = "";
      while (idx < traversal.length && traversal[idx] != "-") {
        value += traversal[idx];
        idx += 1;
      }

      currObj.ele = Number(value);
      result.push(currObj);
      currObj = new SequenceObject();
    }

    return result;
  }

  function createTree(currLevel: number = 0): TreeNode | null {
    if (seq.length == 0) {
      return null;
    }

    const obj = seq.shift();

    if (obj && obj.depth < currLevel) {
      seq.unshift(obj);
      return null;
    }

    const node = new TreeNode(obj?.ele);
    node.left = createTree(currLevel + 1);
    node.right = createTree(currLevel + 1);

    return node;
  }

  let seq: Array<SequenceObject> = getEleSequence(traversal);

  return createTree(0);
}

export default recoverFromPreorder;
