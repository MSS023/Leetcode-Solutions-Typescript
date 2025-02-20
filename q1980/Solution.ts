function findDifferentBinaryString(nums: string[]): string {
  const n = nums.length;
  const maxNum = 2 ** n;

  function format(value: string, targetLength: number): string {
    const len = value.length;
    let result = value;

    for (let idx = 0; idx < targetLength - len; idx += 1) {
      result = "0" + result;
    }

    return result;
  }

  for (let num = 0; num < maxNum; num += 1) {
    const b = format(num.toString(2), n);

    if (nums.indexOf(b) > -1) {
      continue;
    }

    return b;
  }

  return "";
}

export default findDifferentBinaryString;
