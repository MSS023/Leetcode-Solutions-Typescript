export function smallestNumber(pattern: string): string {
  function getMin(arr1: Array<number>, arr2: Array<number>): Array<number> {
    let minLength = Math.min(arr1.length, arr2.length);

    for (let idx = 0; idx < minLength; idx += 1) {
      if (arr1[idx] == arr2[idx]) {
        continue;
      }

      if (arr1[idx] < arr2[idx]) {
        return arr1;
      }

      return arr2;
    }

    return arr1.slice(0, minLength);
  }

  function isValueEligible(idx: number, num: number): boolean {
    if (idx == maxLength - 1) {
      return true;
    }

    const ch = pattern[idx];
    if (ch === "I") {
      return num < list[idx + 1];
    }

    return num > list[idx + 1];
  }

  function logic(idx: number, values: Set<number>): void {
    if (idx == -1) {
      memo = getMin(memo, [...list]);
      return;
    }

    for (let num = 1; num < 10; num += 1) {
      if (values.has(num)) {
        continue;
      }

      if (!isValueEligible(idx, num)) {
        continue;
      }

      list[idx] = num;
      values = values.add(num);

      logic(idx - 1, values);

      list[idx] = undefined;
      values.delete(num);
    }
  }

  let list = new Array(pattern.length + 1);
  let maxLength = pattern.length + 1;
  let memo = [9, 9, 9, 9, 9, 9, 9, 9, 9];

  logic(maxLength - 1, new Set());
  return memo.join("");
}
