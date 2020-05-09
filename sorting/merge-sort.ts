/**
 * Top-down Merge Sort:
 * Divide-and-conquer
 * Big-O: n log n
 *
 */
function mergeSort<T>(array: T[]) {
  const aux = [];
  sort(array, 0, array.length - 1, aux);
  return array;
}

function merge<T>(
  array: T[],
  low: number,
  mid: number,
  high: number,
  aux: T[],
) {
  let i = low;
  let j = mid + 1;
  for (let k = low; k <= high; k++) {
    aux[k] = array[k];
  }
  for (let k = low; k <= high; k++) {
    if (i > mid) {
      array[k] = aux[j++];
    } else if (j > high) {
      array[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      array[k] = aux[j++];
    } else {
      array[k] = aux[i++];
    }
  }
}

function sort<T>(array: T[], low: number, high: number, aux: T[]) {
  if (high <= low) {
    return;
  }
  const mid = Math.floor(low + (high - low) / 2);
  sort(array, low, mid, aux);
  sort(array, mid + 1, high, aux);
  merge(array, low, mid, high, aux);
}

console.log(mergeSort([1, 2, 5, 7, 9, 0]));
