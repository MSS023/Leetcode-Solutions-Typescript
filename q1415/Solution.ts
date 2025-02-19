function getHappyString(n: number, k: number): string {
  const maxPermutations = 3 * 2 ** (n - 1);

  if (k > maxPermutations) {
    return "";
  }

  const maxLength = n;
  let memo: string = "";
  let count = 0;
  const maxDepth = k;
  const characters = ["a", "b", "c"];

  function mainLogic(currString: string): void {
    if (currString.length === maxLength) {
      memo = currString;
      count += 1;
      return;
    }

    const len = currString.length;

    for (const ch of characters) {
      if (len > 0 && ch === currString[len - 1]) {
        continue;
      }

      mainLogic(currString + ch);

      if (count == maxDepth) {
        break;
      }
    }
  }

  mainLogic("");

  return memo;
}

export default getHappyString;
