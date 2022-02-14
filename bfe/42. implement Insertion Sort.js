/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
  for(let i = 1, j = 0; i < arr.length; i++, j = i - 1) {
    let curVal = arr[i];
    for(; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];
    }
    if(i !== j + 1) {
      arr[j + 1] = curVal;
    }
  }
}
