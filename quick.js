function pivot(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[start];
  let partitionIndex = start;

  for (let currentIndex = start + 1; currentIndex <= end; currentIndex++) {
    if (arr[currentIndex] < pivotValue) {
      partitionIndex++;
      [arr[partitionIndex], arr[currentIndex]] = [arr[currentIndex], arr[partitionIndex]];
    }
  }

  [arr[start], arr[partitionIndex]] = [arr[partitionIndex], arr[start]];

  return partitionIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  while (left < right) {
    let partitionIndex = pivot(arr, left, right);

    if (partitionIndex - left < right - partitionIndex) {
      quickSort(arr, left, partitionIndex - 1);
      left = partitionIndex + 1;
    } else {
      quickSort(arr, partitionIndex + 1, right);
      right = partitionIndex - 1;
    }
  }
  return arr;
}

module.exports = { pivot, quickSort };
