/**
 * Insertion Sort:
 * Start from index 1, and in the inner loop back
 * and compare if it is less than- exchange all items if they are.
 * Big-O: quadratic/2
 * Linear if it is sorted
 */

function insertionSort<T>(array: T[]) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
    }
  }
  return array;
}

console.log(insertionSort([1, 2, 5, 7, 9, 0]));
