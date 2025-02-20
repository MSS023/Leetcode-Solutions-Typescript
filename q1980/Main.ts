import findDifferentBinaryString from "./Solution";

(function driver() {
  const testCases = [
    ["01", "10"],
    ["00", "01"],
    ["111", "011", "001"],
  ];

  for (const test of testCases) {
    console.log(findDifferentBinaryString(test));
  }
})();
