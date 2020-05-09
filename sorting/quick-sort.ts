/**
 * Quick Sort:
 * Divide-and-conquer
 * Big-O: n log n
 *
 */

const exchange = <T>(array: T[], i: number, j: number) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const partition = <T>(array: T[], low: number, high: number): number => {
  let i = low;
  let j = high + 1;
  const v = array[low];
  while (true) {
    while (array[++i] < v) {
      if (i === high) {
        break;
      }
    }
    while (v < array[--j]) {
      if (j === low) {
        break;
      }
    }
    if (i >= j) {
      break;
    }
    exchange(array, i, j);
  }
  exchange(array, low, j);
  return j;
};

export function quickSort<T>(array: T[]) {
  sort(array, 0, array.length - 1);
  return array;
}
function sort<T>(array: T[], low: number, high: number) {
  if (high <= low) {
    return;
  }
  const j = partition(array, low, high);
  sort(array, low, j - 1);
  sort(array, j + 1, high);
}

console.log(quickSort([1, 2, 5, 7, 9, 0]));
