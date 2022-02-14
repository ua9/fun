function merge(arr, left, right) {
  let i = 0, j = 0;
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      arr[i + j] = left[i];
      i++;
    } else {
      arr[i + j] = right[j];
      j++
    }
  }
  while(i < left.length) {
    arr[i + j] = left[i];
    i++;
  }
  while(j < right.length) {
    arr[i + j] = right[j];
    j++;
  }
  return arr;
}
/**
 * @param {number[]} arr
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr.length >> 1;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  merge(arr, left, right);
  return arr;
}
