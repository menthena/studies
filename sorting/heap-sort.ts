/**
 * Heap Sort:
 * Inventor: J. W. J. Williams
 * Big-O: n log n
 */

function exchange<T>(array: T[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function sink<T>(array: T[], i: number, n: number) {
  while (i * 2 <= n) {
    let j = i * 2;
    // This is here to compare one item to the next.
    if (j < n && array[j - 1] < array[j]) {
      j++;
    }
    // Get out of the while loop, if current index is
    // equal or less than previous item.
    if (array[i - 1] >= array[j - 1]) {
      break;
    }
    // otherwise swap.
    exchange(array, i - 1, j - 1);
    i = j;
  }
}

function heapSort<T>(array: T[]) {
  let n = array.length;
  for (let i = Math.ceil(n / 2); i >= 1; i--) {
    sink(array, i, n);
  }
  // Since it is heapified, largest item is at [0],
  // through `exchange`, put it to the last
  while (n > 1) {
    exchange(array, 0, --n);
    // Now that array size is decreased, do it again!!!
    sink(array, 1, n);
  }
  return array;
}

console.log(heapSort([-1, 1, 3, 2, 5, 30, 7, 9, 0, 4, 888]));
