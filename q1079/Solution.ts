type ValuesMap = Record<string, number>;

export function numTilePossibilities(tiles: string): number {
  function logic(currentPermutation: string): void {
    if (currentPermutation.length > 0) {
      permutationSet.add(currentPermutation);
    }

    if (currentPermutation.length == maxLength) {
      return;
    }

    for (const value in valuesMap) {
      if (valuesMap[value] == 0) {
        continue;
      }

      valuesMap[value] -= 1;
      logic(currentPermutation + value);
      valuesMap[value] += 1;
    }
  }

  const maxLength = tiles.length;
  const valuesMap: ValuesMap = {};
  const permutationSet: Set<string> = new Set();

  for (const tile of tiles) {
    if (!(tile in valuesMap)) {
      valuesMap[tile] = 0;
    }

    valuesMap[tile] += 1;
  }

  logic("");

  return permutationSet.size;
}
