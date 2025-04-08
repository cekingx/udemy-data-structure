import { describe, it } from "node:test";
import assert from "node:assert"
import { traverseTree } from "../tree";
import { Node } from "../class/node";

describe("Traverse Tree", () => {
  const tree: {[id: number]: Node} = {
    1: { value: 1, left: 2, right: 3 },
    2: { value: 2, left: 4, right: 5},
    3: { value: 3, left: 6, right: 7 },
    4: { value: 4, left: undefined, right: undefined },
    5: { value: 5, left: undefined, right: undefined },
    6: { value: 6, left: undefined, right: undefined },
    7: { value: 7, left: undefined, right: undefined }
  }

  it('traverse tree', () => {
    traverseTree(1, tree)
  })
})