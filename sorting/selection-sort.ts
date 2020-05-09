/**
 * Selection Sort:
 * First find the smallest item and exchange with the first
 * entry, and then the second...
 * Big-O: quadratic
 *
 */

function selectionSort<T>(array: T[]) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    const temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

console.log(selectionSort([1, 2, 5, 7, 9, 0]));
