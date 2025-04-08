import { describe, it } from "node:test";
import assert from "node:assert";
import { binarySearch } from "../search";

describe("Binary Search", () => {
  it("find number in the middle, odd numbers", () => {
    const numbers = [1,2,3];
    const searched = binarySearch(2, numbers);
    assert.strictEqual(searched, 2)
  })

  it("find number in the middle, even numbers", () => {
    const numbers = [1,2,3,4];
    const searched = binarySearch(2, numbers);
    assert.strictEqual(searched, 2)
  })

  it("find number in the end, odd numbers", () => {
    const numbers = [1,2,3,4,5,6,7,8,9];
    const searched = binarySearch(9, numbers)
    assert.strictEqual(searched, 9)
  })

  it("find number in the end, even numbers", () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const searched = binarySearch(10, numbers);
    assert.strictEqual(searched, 10)
  })

  it("find number in the beginning, odd numbers", () => {
    const numbers = [1,2,3,4,5,6,7,8,9];
    const searched = binarySearch(1, numbers);
    assert.strictEqual(searched, 1)
  })

  it("find number in the beginning, even numbers", () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const searched = binarySearch(1, numbers);
    assert.strictEqual(searched, 1)
  })
})