import { moveItemWithinArray } from "@/utils";

describe("utils.js", () => {
  describe("moveItemWithinArray", () => {
    it("should move an item from a lower index to a higher index", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = moveItemWithinArray(arr, 1, 3);
      expect(result).toEqual([1, 3, 4, 2, 5]);
    });

    it("should move an item from a higher index to a lower index", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = moveItemWithinArray(arr, 3, 1);
      expect(result).toEqual([1, 4, 2, 3, 5]);
    });

    it("should return the same array if fromIndex and toIndex are the same", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = moveItemWithinArray(arr, 2, 2);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it("should handle edge cases like moving to the start or end of the array", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(moveItemWithinArray(arr, 4, 0)).toEqual([5, 1, 2, 3, 4]);
      expect(moveItemWithinArray(arr, 0, 4)).toEqual([2, 3, 4, 5, 1]);
    });
  });
});
