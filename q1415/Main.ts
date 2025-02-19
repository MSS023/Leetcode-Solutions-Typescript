import getHappyString from "./Solution.js";

(function driver() {
  const testCases = [
    [1, 3],
    [1, 4],
    [3, 9],
  ];

  for (const test of testCases) {
    console.log(getHappyString(test[0], test[1]));
  }
})();
