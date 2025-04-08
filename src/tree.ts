import { Node } from "./class/node"

export const traverseTree = (root: number, tree: {[id: number]: Node}) => {
  const node = tree[root]
  if(node.left) {
    traverseTree(node.left, tree)
  }

  if(node.right) {
    traverseTree(node.right, tree)
  }

  console.log('tree value is', node.value);
}