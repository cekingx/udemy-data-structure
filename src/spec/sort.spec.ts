import { describe, it } from "node:test";
import assert from "node:assert";
import { bubbleSort } from "../sort";

describe("Bubble Sort", () => {
  it("swap first array", () => {
    const arr = [3,2,4,5,8];
    const sortedArr = bubbleSort(arr);
    assert.deepEqual(sortedArr, [2,3,4,5,8])
  })

  it("swap inverted array", () => {
    const arr = [8,5,4,3,2];
    const sortedArr = bubbleSort(arr);
    assert.deepEqual(sortedArr, [2,3,4,5,8]);
  })
});