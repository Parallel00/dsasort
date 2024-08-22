function merge(arrA, arrB) {
  let mergedArray = [];
  let x = 0;
  let y = 0;

  while (x < arrA.length && y < arrB.length) {
    if (arrB[y] > arrA[x]) {
      mergedArray.push(arrA[x]);
      x++;
    } else {
      mergedArray.push(arrB[y]);
      y++;
    }
  }

  while (x < arrA.length) {
    mergedArray.push(arrA[x]);
    x++;
  }

  while (y < arrB.length) {
    mergedArray.push(arrB[y]);
    y++;
  }

  return mergedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const center = Math.floor(arr.length / 2);
  const leftSide = mergeSort(arr.slice(0, center));
  const rightSide = mergeSort(arr.slice(center));

  return combine(leftSide, rightSide);
}

module.exports = { combine, mergeSort };
