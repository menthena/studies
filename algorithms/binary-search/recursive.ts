const binarySearchRecursive = (array: number[], item: number) => {
  const n = array.length;
  if (n === 0) {
    return;
  }
  const mid = Math.floor(n / 2);
  if (array[mid] === item) {
    return item;
  } else if (item < array[mid]) {
    return binarySearchRecursive(array.slice(0, mid), item);
  } else {
    return binarySearchRecursive(array.slice(mid + 1, n), item);
  }
};

console.log(
  binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3),
);
