const binarySearchLoop = (array: number[], item: number) => {
  const n = array.length;
  if (n === 0) {
    return;
  }
  // let mid = Math.floor(n / 2);
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === item) {
      return item;
    } else if (item < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};

console.log(binarySearchLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 20));
